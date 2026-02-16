import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { OrderStore } from "./types";

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      products: [] as OrderStore["products"],

      addItem: (product) =>
        set((state) => {
          const existing = state.products.find((p) => p._id === product._id);
          if (existing) {
            return {
              products: state.products.map((p) =>
                p._id === product._id
                  ? { ...p, quantity: p.quantity + (product.quantity ?? 1) }
                  : p,
              ),
            };
          }
          return {
            products: [
              ...state.products,
              { ...product, quantity: product.quantity ?? 1 },
            ],
          };
        }),

      removeItem: (productId) =>
        set((state) => ({
          products: state.products.filter((p) => p._id !== productId),
        })),

      clearCart: () => set({ products: [] as OrderStore["products"] }),

      totalPrice: () =>
        get().products.reduce(
          (total, product) => total + product.price * product.quantity,
          0,
        ),
    }),
    {
      name: "order-store",
    },
  ),
);
