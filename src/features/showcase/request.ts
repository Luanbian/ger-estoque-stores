import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import type { Showcase } from "./types";
import type { APIResponse } from "../common/types";

export const getShowcase = async (domain: string) => {
  try {
    const response = await axios.get<APIResponse<Showcase>>(
      `${API_BASE_URL}/showcase/${domain}`,
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching showcase:", error);
    return {
      success: false,
      message:
        "Ocorreu um erro ao carregar a vitrine. Por favor, tente novamente.",
    };
  }
};
