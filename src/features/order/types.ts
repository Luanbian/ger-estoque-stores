import type { CatalogItem } from "../catalog/types";

export interface CartItem extends CatalogItem {
  quantity: number;
}

export interface OrderStore {
  products: CartItem[];
  addItem: (product: CatalogItem) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  refreshProducts: (items: CatalogItem[]) => void;
  totalPrice: () => number;
  makeOrder: (
    payload: CreateOrderPayload,
  ) => Promise<{ success: boolean; message: string }>;
}

export interface CreateOrderPayload {
  tenantId: string;
  domain: string;
  totalAmount: number;
  items: {
    productId: string;
    nameSnapshot: string;
    quantity: number;
    priceSnapshot: number;
  }[];
  customer: {
    name: string;
    email: string | null;
    phone: string;
  };
}
