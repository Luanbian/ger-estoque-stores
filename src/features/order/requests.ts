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
    const status = axios.isAxiosError(error)
      ? error.response?.status
      : undefined;
    if (axios.isAxiosError(error) && !status) {
      return {
        success: false,
        message:
          "Sem resposta do servidor. Verifique sua conexão e tente novamente.",
      };
    }
    if (status && status < 500) {
      return {
        success: false,
        message:
          "Não foi possível registrar o pedido. Confira os dados informados e tente novamente.",
      };
    }
    return {
      success: false,
      message:
        "Ocorreu um erro ao realizar o pedido. Por favor, tente novamente.",
    };
  }
};
