import { create } from "zustand";
import type { CatalogStore } from "./types";
import { filterCatalogItemByCategory, getCatalog } from "./request";
import { useOrderStore } from "../order/order";

export const useCatalogStore = create<CatalogStore>()((set, get) => ({
  catalog: null,
  selectedCategoryId: null,
  request: {
    success: true,
    message: null,
  },

  setCatalog: async (showcaseId: string) => {
    set({
      selectedCategoryId: null,
      request: { success: true, message: null },
    });
    const data = await getCatalog(showcaseId);
    if (get().selectedCategoryId !== null) return;
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
    useOrderStore.getState().refreshProducts(data.items ?? []);
  },

  selectCatalogCategory: async (categoryId: string | null) => {
    const showcaseId = get().catalog?.categories?.[0]?.showcaseId || null;
    if (!showcaseId) return;

    set({
      selectedCategoryId: categoryId,
      request: { success: true, message: null },
    });
    const data = await filterCatalogItemByCategory(showcaseId, categoryId);
    if (get().selectedCategoryId !== categoryId) return;
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
}));
