import { useOrderStore } from "@/features/order/order";
import { CatalogItem } from "./catalogItem";
import type { Product } from "@/features/order/types";

export const CatalogList = () => {
  const products: Product[] = [
    { _id: "1", name: "Produto A", price: 9990, quantity: 1 },
    { _id: "2", name: "Produto B", price: 14990, quantity: 1 },
    { _id: "3", name: "Produto C", price: 5990, quantity: 1 },
    { _id: "4", name: "Produto D", price: 19990, quantity: 1 },
    { _id: "5", name: "Produto E", price: 7990, quantity: 1 },
    { _id: "6", name: "Produto F", price: 12990, quantity: 1 },
    { _id: "7", name: "Produto G", price: 8990, quantity: 1 },
    { _id: "8", name: "Produto H", price: 17990, quantity: 1 },
    { _id: "9", name: "Produto I", price: 6990, quantity: 1 },
    { _id: "10", name: "Produto J", price: 15990, quantity: 1 },
    { _id: "11", name: "Produto K", price: 10990, quantity: 1 },
    { _id: "12", name: "Produto L", price: 13990, quantity: 1 },
    { _id: "13", name: "Produto M", price: 11990, quantity: 1 },
    { _id: "14", name: "Produto N", price: 8990, quantity: 1 },
    { _id: "15", name: "Produto O", price: 14990, quantity: 1 },
  ];

  const { addItem } = useOrderStore((state) => state);

  return (
    <main className="min-h-screen bg-muted/40 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-10">Produtos</h1>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
        >
          {products.map((product) => (
            <CatalogItem
              key={product._id}
              data={{ product }}
              actions={{ addItem }}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
