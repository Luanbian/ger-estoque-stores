import type { Showcase } from "@/features/showcase/types";

interface Props {
  data: {
    quantity: number;
    sections: Showcase["presentation"]["sections"];
  };
}

export const BodyBoxes = ({ data }: Props) => {
  const { quantity, sections } = data;

  if (quantity === 0) return;

  if (quantity === 1) {
    return (
      <div>
        <p className="text-xl font-semibold text-gray-700">
          {sections[0].title}
        </p>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {sections[0].description}
          </span>
        </div>
      </div>
    );
  }

  if (quantity === 2) {
    return (
      <div className="flex flex-col space-y-4">
        <p className="text-xl font-semibold text-gray-700">
          {sections[0].title}
        </p>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {sections[0].description}
          </span>
        </div>
        <p className="text-xl font-semibold text-gray-700">
          {sections[1].title}
        </p>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[1].description}
            </span>
          </div>
          <div className="w-1/2 h-48" />
        </div>
      </div>
    );
  }

  if (quantity === 3) {
    return (
      <div className="flex flex-col space-y-4">
        <p className="text-xl font-semibold text-gray-700">
          {sections[0].title}
        </p>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {sections[0].description}
          </span>
        </div>
        <div className="flex w-full space-x-4">
          <p className="text-xl font-semibold text-gray-700">
            {sections[1].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[1].description}
            </span>
          </div>
          <p className="text-xl font-semibold text-gray-700">
            {sections[2].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[2].description}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (quantity === 4) {
    return (
      <div className="flex flex-col space-y-4">
        <p className="text-xl font-semibold text-gray-700">
          {sections[0].title}
        </p>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {sections[0].description}
          </span>
        </div>
        <div className="flex w-full space-x-4">
          <p className="text-xl font-semibold text-gray-700">
            {sections[1].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[1].description}
            </span>
          </div>
          <p className="text-xl font-semibold text-gray-700">
            {sections[2].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[2].description}
            </span>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <p className="text-xl font-semibold text-gray-700">
            {sections[3].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[3].description}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (quantity === 5) {
    return (
      <div className="flex flex-col space-y-4">
        <p className="text-xl font-semibold text-gray-700">
          {sections[0].title}
        </p>
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">
            {sections[0].description}
          </span>
        </div>
        <div className="flex w-full space-x-4">
          <p className="text-xl font-semibold text-gray-700">
            {sections[1].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[1].description}
            </span>
          </div>
          <p className="text-xl font-semibold text-gray-700">
            {sections[2].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[2].description}
            </span>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <p className="text-xl font-semibold text-gray-700">
            {sections[3].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[3].description}
            </span>
          </div>
          <p className="text-xl font-semibold text-gray-700">
            {sections[4].title}
          </p>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">
              {sections[4].description}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return;
};
