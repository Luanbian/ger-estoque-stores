import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CatalogItem as CatalogItemType } from "@/features/catalog/types";
import { convertFromCents } from "@/utils/convertCents";

interface Props {
  data: {
    item: CatalogItemType;
  };
  actions: {
    addItem: (product: CatalogItemType) => void;
  };
}

export const CatalogItem = ({ data, actions }: Props) => {
  const { item } = data;
  const { addItem } = actions;

  return (
    <Card className="transition hover:shadow-lg hover:-translate-y-1 duration-200">
      <CardHeader>
        <CardTitle className="text-base font-medium">{item.title}</CardTitle>
      </CardHeader>

      {item?.pricing?.basePriceInCents ? (
        <CardContent>
          <p className="text-lg font-semibold">
            R${convertFromCents(item.pricing.basePriceInCents)}
          </p>
        </CardContent>
      ) : null}

      <CardFooter>
        <Button className="w-full cursor-pointer" onClick={() => addItem(item)}>
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
