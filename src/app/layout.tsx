import { useEffect } from "react";
import Home from "./page";
import { useShowcaseStore } from "@/features/showcase/showcase";

const MainLayout = () => {
  const { showcase, setShowcase, setRequest } = useShowcaseStore(
    (state) => state,
  );

  useEffect(() => {
    setShowcase(null);
    setRequest({ success: true, message: null });
  }, [setShowcase, setRequest]);

  return <Home data={{ showcase }} />;
};

export default MainLayout;
