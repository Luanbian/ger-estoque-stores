import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/features/order/types";

interface Props {
  data: {
    product: Product;
  };
  actions: {
    addItem: (product: Product) => void;
  };
}

export const CatalogItem = ({ data, actions }: Props) => {
  const { product } = data;
  const { addItem } = actions;

  return (
    <Card className="transition hover:shadow-lg hover:-translate-y-1 duration-200">
      <CardHeader>
        <CardTitle className="text-base font-medium">{product.name}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-semibold">R$ {product.price.toFixed(2)}</p>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full cursor-pointer"
          onClick={() => addItem(product)}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
