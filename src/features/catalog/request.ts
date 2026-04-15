import axios from "axios";
import type { APIResponse } from "../common/types";
import type { Catalog, CatalogCategory, CatalogItem } from "./types";
import { API_BASE_URL } from "@/constants/api";

export const getCatalog = async (showcaseId: string) => {
  try {
    const [responseCategory, responseItem] = await Promise.all([
      axios.get<APIResponse<CatalogCategory[]>>(
        `${API_BASE_URL}/catalog/category/${showcaseId}`,
      ),
      axios.post<APIResponse<CatalogItem[]>>(
        `${API_BASE_URL}/catalog/item/list/${showcaseId}`,
        {},
      ),
    ]);

    const catalog: Catalog = {
      items: responseItem.data.data,
      categories: responseCategory.data.data,
    };

    return catalog;
  } catch (error) {
    console.error("Error fetching itens/category:", error);
    return {
      success: false,
      message:
        "Ocorreu um erro ao carregar os itens da vitrine. Por favor, tente novamente.",
    };
  }
};

export const filterCatalogItemByCategory = async (
  showcaseId: string,
  categoryId: string,
) => {
  try {
    const result = await axios.post<APIResponse<CatalogItem[]>>(
      `${API_BASE_URL}/catalog/item/list/${showcaseId}`,
      { categoryId },
    );

    return result.data.data;
  } catch (error) {
    console.error("Error fetching itens filtered:", error);
    return {
      success: false,
      message:
        "Ocorreu um erro ao filtrar os itens da vitrine pela categoria. Por favor, tente novamente.",
    };
  }
};
