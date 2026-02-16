import axios from "axios";
import { API_BASE_URL } from "@/constants/api";
import type { CreateOrderPayload } from "./types";

export const postMakeOrder = async (payload: CreateOrderPayload) => {
  try {
    await axios.post(`${API_BASE_URL}/order`, payload);
    return {
      success: true,
      message: "Pedido realizado com sucesso!",
    };
  } catch (error) {
    console.error("Error making order:", error);
    return {
      success: false,
      message:
        "Ocorreu um erro ao realizar o pedido. Por favor, tente novamente.",
    };
  }
};
