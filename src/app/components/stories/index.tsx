import Stories from "react-insta-stories";
import { ASSETS_BASE_URL } from "@/constants/assets";
import type { Showcase } from "@/features/showcase/types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Props {
  data: {
    storiesProp: NonNullable<Showcase["stories"]>;
  };
}

const StoriesComponent = ({ data }: Props) => {
  const { storiesProp } = data;

  return (
    <div className="flex flex-row gap-8">
      {storiesProp.map((story, index) => {
        const storyData = story.items.map((item) => ({
          url: `${ASSETS_BASE_URL}${item.image}`,
          header: {
            heading: item.title,
            subheading: item.subtitle,
            profileImage: `${ASSETS_BASE_URL}${story.thumbnail}`,
          },
        }));

        return (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <img
                  src={`${ASSETS_BASE_URL}${story.thumbnail}`}
                  alt={`Story ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <p className="text-center">{story.title}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="bg-white rounded-lg p-4">
              <Stories
                stories={storyData}
                defaultInterval={1500}
                width={400}
                height={700}
              />
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

interface PropsHOC {
  data: {
    showStories: boolean;
    storiesProp?: Showcase["stories"];
  };
}

const StoriesComponentHOC = ({ data }: PropsHOC) => {
  const { showStories, storiesProp } = data;

  if (!showStories || !storiesProp) return null;

  return <StoriesComponent data={{ storiesProp }} />;
};

export default StoriesComponentHOC;
