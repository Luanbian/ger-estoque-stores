import type { Showcase } from "../features/showcase/types";
import { Header } from "./components/header";
import { ASSETS_BASE_URL } from "@/constants/assets";
import { Presentation } from "./components/presentation";
import { Body } from "./components/body";
import { Stories } from "./components/stories";
import { Testimonials } from "./components/testimonials";

interface Props {
  data: {
    showcase: Showcase | null;
  };
}

const Home = ({ data }: Props) => {
  const { showcase } = data;

  if (!showcase) {
    return <>Loading...</>;
  }

  return (
    <div>
      <Header
        data={{
          logo: showcase.logo,
          showName: showcase.showName,
          name: showcase.name,
        }}
      />
      <img
        src={`${ASSETS_BASE_URL}${showcase.banner}`}
        alt="Banner"
        className="w-full max-h-[800px] object-fill"
      />
      <Stories data={{ showStories: showcase.showStories }} />
      <Presentation data={{ presentation: showcase.presentation }} />
      <Body data={{ body: showcase.body }} />
      <Testimonials data={{ testimonials: showcase.testimonials }} />
    </div>
  );
};

export default Home;
