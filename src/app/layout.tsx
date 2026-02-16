import { useEffect } from "react";
import Home from "./page";
import { useShowcaseStore } from "@/features/showcase/showcase";

const MainLayout = () => {
  const { showcase, setShowcase } = useShowcaseStore((state) => state);

  useEffect(() => {
    setShowcase(null);
  }, [setShowcase]);

  return <Home data={{ showcase }} />;
};

export default MainLayout;
