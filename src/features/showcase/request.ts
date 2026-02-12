import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import type { Showcase } from "./types";
import type { APIResponse } from "../common/types";

export const getShowcase = async (name: string) => {
  const response = await axios.get<APIResponse<Showcase>>(
    `${API_BASE_URL}/showcase/${name}`,
  );

  return response.data.data;
};
