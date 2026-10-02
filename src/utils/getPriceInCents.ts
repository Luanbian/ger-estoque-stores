import type { CatalogItem } from "@/features/catalog/types";

export const getPriceInCents = (item: CatalogItem): number =>
  item.pricing?.finalPriceInCents ?? item.pricing?.basePriceInCents ?? 0;
