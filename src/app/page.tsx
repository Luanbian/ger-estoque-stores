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
    </div>
  );
};

export default Home;
