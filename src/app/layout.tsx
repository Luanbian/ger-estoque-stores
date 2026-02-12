import { useEffect, useState } from "react";
import type { Showcase } from "../features/showcase/types";
import { getShowcase } from "../features/showcase/request";
import Home from "./page";
import { getSubdomain } from "../utils/getSubdomain";

const MainLayout = () => {
  const [showcase, setShowcase] = useState<Showcase | null>(null);

  useEffect(() => {
    const fetchShowcase = async () => {
      const subdomain = getSubdomain();
      const result = await getShowcase(subdomain);
      setShowcase(result);
    };

    fetchShowcase();
  }, []);

  return <Home data={{ showcase }} />;
};

export default MainLayout;
