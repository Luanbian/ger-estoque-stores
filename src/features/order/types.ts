export interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderStore {
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalPrice: () => number;
}
