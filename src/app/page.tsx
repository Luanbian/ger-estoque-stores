import { ASSETS_BASE_URL } from "../constants/assets";
import type { Showcase } from "../features/showcase/types";

interface Props {
  data: {
    showcase: Showcase | null;
  };
}

const Home = ({ data }: Props) => {
  const { showcase } = data;

  return (
    <div>
      <h1>
        {showcase && showcase.name ? showcase.name : "No showcase available"}
      </h1>
      <h2>{showcase && showcase.hash ? showcase.hash : "No hash available"}</h2>
      <img
        src={
          showcase && showcase.banner
            ? `${ASSETS_BASE_URL}${showcase.banner}`
            : ""
        }
        alt="Banner"
      />
      <img
        src={
          showcase && showcase.logo ? `${ASSETS_BASE_URL}${showcase.logo}` : ""
        }
        alt="Logo"
      />
      <h3>
        {showcase && showcase.presentation.title
          ? showcase.presentation.title
          : "No presentation title available"}
      </h3>
    </div>
  );
};

export default Home;
