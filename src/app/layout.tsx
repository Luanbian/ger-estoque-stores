import { useEffect } from "react";
import Home from "./page";
import { useShowcaseStore } from "@/features/showcase/showcase";
import { useCatalogStore } from "@/features/catalog/catalog";

const MainLayout = () => {
  const { showcase, setShowcase, setRequest } = useShowcaseStore(
    (state) => state,
  );
  const {
    catalog,
    setCatalog,
    setRequest: setRequestCatalog,
  } = useCatalogStore((state) => state);

  useEffect(() => {
    setShowcase(null);
    setRequest({ success: true, message: null });
  }, [setShowcase, setRequest]);

  useEffect(() => {
    if (showcase?._id) {
      setCatalog(showcase._id);
      setRequestCatalog({ success: true, message: null });
    }
  }, [setCatalog, setRequestCatalog, showcase]);

  return <Home data={{ showcase, catalog }} />;
};

export default MainLayout;
