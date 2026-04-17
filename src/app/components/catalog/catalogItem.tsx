import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ASSETS_BASE_URL } from "@/constants/assets";
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
  const { pricing } = item;

  const hasDiscount = !!pricing?.discount && !!pricing?.finalPriceInCents;
  const hasInstallments = !!pricing?.installments;

  const discountLabel = pricing?.discount
    ? pricing.discount.type === "percentage"
      ? `-${pricing.discount.value}%`
      : `-R$ ${convertFromCents(pricing.discount.value)}`
    : null;

  return (
    <Card className="transition hover:shadow-lg hover:-translate-y-1 duration-200 overflow-hidden">
      {item.image && (
        <div className="relative w-full h-40 overflow-hidden">
          <img
            src={`${ASSETS_BASE_URL}${item.image}`}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {hasDiscount && discountLabel && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {discountLabel}
            </span>
          )}
        </div>
      )}

      <CardHeader className="pb-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-medium leading-snug">
            {item.title}
          </CardTitle>
          {!item.image && hasDiscount && discountLabel && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shrink-0">
              {discountLabel}
            </span>
          )}
        </div>
      </CardHeader>

      {pricing?.basePriceInCents ? (
        <CardContent className="pb-2 space-y-0.5">
          {hasDiscount ? (
            <>
              <p className="text-sm text-muted-foreground line-through">
                R$ {convertFromCents(pricing.basePriceInCents)}
              </p>
              {pricing.finalPriceInCents && (
                <p className="text-lg font-bold text-green-600">
                  R$ {convertFromCents(pricing.finalPriceInCents)}
                </p>
              )}
            </>
          ) : (
            <p className="text-lg font-semibold">
              R$ {convertFromCents(pricing.basePriceInCents)}
            </p>
          )}

          {hasInstallments && (
            <p className="text-xs text-muted-foreground">
              {pricing.installments!.maxInstallments}x de R${" "}
              {convertFromCents(pricing.installments!.installmentPriceInCents)}
              {pricing.installments!.interestFree ? " sem juros" : " com juros"}
            </p>
          )}
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
