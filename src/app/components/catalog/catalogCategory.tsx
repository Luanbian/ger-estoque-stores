import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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

  const rootCategories = categories.filter((c) => !c.fatherCategoryId);

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        <CarouselItem
          className="basis-auto pl-1"
          style={{ cursor: "pointer" }}
          onClick={() => selectCatalogCategory(null)}
        >
          <div className="p-1">Todos</div>
        </CarouselItem>
        {rootCategories.map((category) => {
          const subCategories = categories.filter(
            (c) => c.fatherCategoryId === category._id
          );

          if (subCategories.length === 0) {
            return (
              <CarouselItem
                key={category._id}
                className="basis-auto pl-1"
                style={{ cursor: "pointer" }}
                onClick={() => selectCatalogCategory(category._id)}
              >
                <div className="p-1">{category.name}</div>
              </CarouselItem>
            );
          }

          return (
            <CarouselItem key={category._id} className="basis-auto pl-1">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="p-1" style={{ cursor: "pointer" }}>
                    {category.name}
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-1">
                  <div className="flex flex-col">
                    {subCategories.map((sub) => (
                      <div
                        key={sub._id}
                        className="px-3 py-1.5 rounded cursor-pointer hover:bg-accent"
                        onClick={() => selectCatalogCategory(sub._id)}
                      >
                        {sub.name}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
