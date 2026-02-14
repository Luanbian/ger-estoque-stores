import { Button } from "@/components/ui/button";
import type { Showcase } from "../features/showcase/types";

interface Props {
  data: {
    showcase: Showcase | null;
  };
}

const Home = ({ data }: Props) => {
  const { showcase } = data;

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
};

export default Home;
