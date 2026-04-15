import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CatalogStore } from "./types";
import { filterCatalogItemByCategory, getCatalog } from "./request";

export const useCatalogStore = create<CatalogStore>()(
  persist(
    (set, get) => ({
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

      selectCatalogCategory: async (categoryId: string) => {
        const showcaseId = get().catalog?.categories?.[0]?.showcaseId || null;
        if (!showcaseId) return;

        const data = await filterCatalogItemByCategory(showcaseId, categoryId);
        if ("success" in data) {
          set({
            request: {
              success: data.success,
              message: data.message,
            },
          });
          return;
        }
        set({
          catalog: {
            categories: get().catalog?.categories ?? null,
            items: data,
          },
        });
      },
    }),
    {
      name: "catalog-store",
    },
  ),
);
