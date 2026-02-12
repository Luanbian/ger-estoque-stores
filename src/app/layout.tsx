import { useEffect, useState } from "react";
import type { Showcase } from "../features/showcase/types";
import { getShowcase } from "../features/showcase/request";
import Home from "./page";

const MainLayout = () => {
  const [showcase, setShowcase] = useState<Showcase | null>(null);

  useEffect(() => {
    const fetchShowcase = async () => {
      const result = await getShowcase("vitrine");
      setShowcase(result);
    };

    fetchShowcase();
  }, []);

  return <Home data={{ showcase }} />;
};

export default MainLayout;
