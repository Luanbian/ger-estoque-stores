import { useOrderStore } from "@/features/order/order";
import { CatalogItem } from "./catalogItem";
import type { Catalog } from "@/features/catalog/types";

export interface Props {
  data: {
    catalog: Catalog | null;
  };
}

export const CatalogList = ({ data }: Props) => {
  const { catalog } = data;

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
          {catalog?.items?.map((item) => (
            <CatalogItem key={item._id} data={{ item }} actions={{ addItem }} />
          ))}
        </div>
      </div>
    </main>
  );
};
