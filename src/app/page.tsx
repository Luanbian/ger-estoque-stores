import type { Showcase, ShowcaseStore } from "../features/showcase/types";
import { Header } from "./components/header";
import { ASSETS_BASE_URL } from "@/constants/assets";
import { Presentation } from "./components/presentation";
import { Body } from "./components/body";
import { Testimonials } from "./components/testimonials";
import { CatalogList } from "./components/catalog/catalogList";
import type { Catalog } from "@/features/catalog/types";
import { RequestError } from "./components/requestError";

interface Props {
  data: {
    showcase: Showcase | null;
    catalog: Catalog | null;
    request: ShowcaseStore["request"];
  };
  actions: {
    fetchShowcase: () => void;
  };
}

const Home = ({ data, actions }: Props) => {
  const { showcase, catalog, request } = data;
  const { fetchShowcase } = actions;
  console.log(catalog);

  if (!showcase && !request.success) {
    return (
      <RequestError
        data={{ message: request.message }}
        actions={{ retry: fetchShowcase }}
      />
    );
  }

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
      <CatalogList data={{ catalog, showcaseId: showcase._id }} />
    </div>
  );
};

export default Home;
