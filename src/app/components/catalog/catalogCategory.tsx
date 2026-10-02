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
        <CarouselItem className="basis-auto pl-1">
          <button
            type="button"
            className="p-1 cursor-pointer"
            onClick={() => selectCatalogCategory(null)}
          >
            Todos
          </button>
        </CarouselItem>
        {rootCategories.map((category) => {
          const subCategories = categories.filter(
            (c) => c.fatherCategoryId === category._id
          );

          if (subCategories.length === 0) {
            return (
              <CarouselItem key={category._id} className="basis-auto pl-1">
                <button
                  type="button"
                  className="p-1 cursor-pointer"
                  onClick={() => selectCatalogCategory(category._id)}
                >
                  {category.name}
                </button>
              </CarouselItem>
            );
          }

          return (
            <CarouselItem key={category._id} className="basis-auto pl-1">
              <Popover>
                <PopoverTrigger className="p-1 cursor-pointer">
                  {category.name}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-1">
                  <div className="flex flex-col">
                    {subCategories.map((sub) => (
                      <button
                        key={sub._id}
                        type="button"
                        className="px-3 py-1.5 rounded text-left cursor-pointer hover:bg-accent"
                        onClick={() => selectCatalogCategory(sub._id)}
                      >
                        {sub.name}
                      </button>
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
