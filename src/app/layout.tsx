import { useEffect } from "react";
import Home from "./page";
import { useShowcaseStore } from "@/features/showcase/showcase";
import { useCatalogStore } from "@/features/catalog/catalog";

const MainLayout = () => {
  const { showcase, request, fetchShowcase } = useShowcaseStore(
    (state) => state,
  );
  const { catalog, setCatalog } = useCatalogStore((state) => state);
  const showcaseId = showcase?._id;

  useEffect(() => {
    fetchShowcase();
  }, [fetchShowcase]);

  useEffect(() => {
    if (!showcaseId) return;
    setCatalog(showcaseId);
  }, [setCatalog, showcaseId]);

  return (
    <Home
      data={{ showcase, catalog, request }}
      actions={{ fetchShowcase }}
    />
  );
};

export default MainLayout;
