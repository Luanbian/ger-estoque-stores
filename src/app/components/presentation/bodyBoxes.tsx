import type { Showcase } from "@/features/showcase/types";
import { cn } from "@/lib/utils";

interface Props {
  data: {
    sections: Showcase["presentation"]["sections"];
  };
}

export const BodyBoxes = ({ data }: Props) => {
  const { sections } = data;

  if (sections.length === 0) return;

  return (
    <div className="grid grid-cols-2 gap-4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={cn("space-y-2", index === 0 && "col-span-2")}
        >
          <p className="text-xl font-semibold text-gray-700">
            {section.title}
          </p>
          <div className="h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {section.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
