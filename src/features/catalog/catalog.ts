import { create } from "zustand";
import type { CatalogStore } from "./types";
import { persist } from "zustand/middleware";
import { getCatalog } from "./request";

export const useCatalogStore = create<CatalogStore>()(
  persist(
    (set) => ({
      catalog: null,
      request: {
        success: true,
        message: null,
      },

      setCatalog: async (showcaseId: string) => {
        const data = await getCatalog(showcaseId);
        if ("success" in data) {
          set({
            request: {
              success: data.success,
              message: data.message,
            },
          });
          return;
        }
        set({ catalog: data });
      },

      setRequest: (request) => set({ request }),
    }),
    {
      name: "catalog-store",
    },
  ),
);
