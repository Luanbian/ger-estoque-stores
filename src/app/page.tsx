import type { Showcase } from "../features/showcase/types";
import { Header } from "./components/header";
import { ASSETS_BASE_URL } from "@/constants/assets";
import { Presentation } from "./components/presentation";
import { Body } from "./components/body";
import { Testimonials } from "./components/testimonials";
import { CatalogList } from "./components/catalog/catalogList";
import type { Catalog } from "@/features/catalog/types";

interface Props {
  data: {
    showcase: Showcase | null;
    catalog: Catalog | null;
  };
}

const Home = ({ data }: Props) => {
  const { showcase, catalog } = data;
  console.log(catalog);

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
      <Presentation data={{ presentation: showcase.presentation }} />
      <Body data={{ body: showcase.body }} />
      <Testimonials data={{ testimonials: showcase.testimonials }} />
      <CatalogList data={{ catalog }} />
    </div>
  );
};

export default Home;
