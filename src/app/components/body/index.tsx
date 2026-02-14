import { ASSETS_BASE_URL } from "@/constants/assets";
import type { Showcase } from "@/features/showcase/types";

interface Props {
  data: {
    body: Showcase["body"];
  };
}

export const Body = ({ data }: Props) => {
  const { body } = data;

  return (
    <div className="flex w-full">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">{body.title}</h2>
        <h3 className="text-2xl font-semibold mb-2">{body.section.title}</h3>
        <p className="text-gray-700">{body.section.description}</p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={`${ASSETS_BASE_URL}${body.image}`}
          alt="Body"
          className="w-full max-h-[400px] object-cover mb-6"
        />
      </div>
    </div>
  );
};
