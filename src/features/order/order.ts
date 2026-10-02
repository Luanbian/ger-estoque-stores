import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { OrderStore } from "./types";
import { postMakeOrder } from "./requests";
import { getPriceInCents } from "@/utils/getPriceInCents";

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      products: [],

      addItem: (product) =>
        set((state) => {
          const existing = state.products.find((p) => p._id === product._id);
          if (existing) {
            return {
              products: state.products.map((p) =>
                p._id === product._id ? { ...p, quantity: p.quantity + 1 } : p,
              ),
            };
          }
          return {
            products: [...state.products, { ...product, quantity: 1 }],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          products: state.products.filter((p) => p._id !== productId),
        })),

      clearCart: () => set({ products: [] }),

      refreshProducts: (items) =>
        set((state) => ({
          products: state.products.map((product) => {
            const item = items.find((i) => i._id === product._id);
            return item ? { ...item, quantity: product.quantity } : product;
          }),
        })),

      totalPrice: () =>
        get().products.reduce(
          (total, product) =>
            total + getPriceInCents(product) * product.quantity,
          0,
        ),

      makeOrder: async (payload) => {
        const result = await postMakeOrder(payload);
        if (result.success) get().clearCart();
        return result;
      },
    }),
    {
      name: "order-store",
      version: 1,
      partialize: (state) => ({ products: state.products }),
    },
  ),
);
