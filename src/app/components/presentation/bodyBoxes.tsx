interface Props {
  data: {
    quantity: number;
  };
}

export const BodyBoxes = ({ data }: Props) => {
  const { quantity } = data;

  if (quantity === 0) return;

  if (quantity === 1) {
    return (
      <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
        <span className="text-xl font-semibold text-gray-700">1 Box</span>
      </div>
    );
  }

  if (quantity === 2) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">1 Box</span>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">2 Box</span>
          </div>
          <div className="w-1/2 h-48" />
        </div>
      </div>
    );
  }

  if (quantity === 3) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">1 Box</span>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">2 Box</span>
          </div>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">3 Box</span>
          </div>
        </div>
      </div>
    );
  }

  if (quantity === 4) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">1 Box</span>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">2 Box</span>
          </div>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">3 Box</span>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">4 Box</span>
          </div>
          <div className="w-1/2 h-48" />
        </div>
      </div>
    );
  }

  if (quantity === 5) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">1 Box</span>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">2 Box</span>
          </div>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">3 Box</span>
          </div>
        </div>
        <div className="flex w-full space-x-4">
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">4 Box</span>
          </div>
          <div className="w-1/2 h-48 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-xl font-semibold text-gray-700">5 Box</span>
          </div>
        </div>
      </div>
    );
  }

  return;
};
