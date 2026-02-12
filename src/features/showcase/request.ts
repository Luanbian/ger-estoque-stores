import axios from "axios";
import { API_BASE_URL } from "../../constants/api";
import type { APIResponse } from "../common/types";
import type { Showcase } from "./types";

export const getShowcase = async (name: string) => {
  const response: APIResponse<Showcase> = await axios.get(
    `${API_BASE_URL}/showcase/${name}`,
  );
  console.log({ response });
  return response.data;
};
