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
      {showcase ? JSON.stringify(showcase, null, 2) : "No showcase available"}
    </div>
  );
};

export default Home;
