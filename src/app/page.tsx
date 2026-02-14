import type { Showcase } from "../features/showcase/types";
import { Header } from "./components/header";
import { ASSETS_BASE_URL } from "@/constants/assets";
import { Presentation } from "./components/presentation";
import { Body } from "./components/body";

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
      <Header data={{ logo: showcase?.logo }} />
      <img
        src={`${ASSETS_BASE_URL}${showcase.banner}`}
        alt="Banner"
        className="w-full max-h-[800px] object-fill"
      />
      <Presentation data={{ presentation: showcase.presentation }} />
      <Body data={{ body: showcase.body }} />
    </div>
  );
};

export default Home;
