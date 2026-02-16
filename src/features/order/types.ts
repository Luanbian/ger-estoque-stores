export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderStore {
  products: Product[];
  request: {
    success: boolean;
    message: string | null;
  };
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
  makeOrder: (payload: CreateOrderPayload) => void;
  setRequest: (request: { success: boolean; message: string | null }) => void;
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
