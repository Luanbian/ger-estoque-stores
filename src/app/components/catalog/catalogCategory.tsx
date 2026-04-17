import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CatalogCategory as CatalogCategoryType } from "@/features/catalog/types";

interface Props {
  data: {
    categories?: CatalogCategoryType[] | null;
  };
  actions: {
    selectCatalogCategory: (categoryId: string | null) => void;
  };
}

export const CatalogCarousel = ({ data, actions }: Props) => {
  const { categories } = data;
  const { selectCatalogCategory } = actions;

  if (!categories || !categories.length) return;

  return (
    <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm">
      <CarouselContent className="-ml-1">
        <CarouselItem
          className="basis-1/2 pl-1 lg:basis-1/3"
          style={{ cursor: "pointer" }}
          onClick={() => selectCatalogCategory(null)}
        >
          <div className="p-1">Sem categoria</div>
        </CarouselItem>
        {categories.map((category) => (
          <CarouselItem
            key={category._id}
            className="basis-1/2 pl-1 lg:basis-1/3"
            style={{ cursor: "pointer" }}
            onClick={() => selectCatalogCategory(category._id)}
          >
            <div className="p-1">{category.name}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
