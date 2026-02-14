import { ASSETS_BASE_URL } from "@/constants/assets";
import type { Showcase } from "@/features/showcase/types";
import { BodyBoxes } from "./bodyBoxes";

interface Props {
  data: {
    presentation: Showcase["presentation"];
  };
}

export const Presentation = ({ data }: Props) => {
  const { presentation } = data;

  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">{presentation.title}</h2>
        <BodyBoxes data={{ quantity: 5 }} />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={`${ASSETS_BASE_URL}${presentation.image}`}
          alt="Presentation"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
