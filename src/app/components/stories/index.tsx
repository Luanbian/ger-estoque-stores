interface Props {
  data: {
    showStories: boolean;
  };
}

export const Stories = ({ data }: Props) => {
  const { showStories } = data;

  if (!showStories) return;

  return (
    <div className="flex gap-6 m-2 justify-center m-8">
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="w-16 h-16 rounded-full bg-gray-300" />
    </div>
  );
};
