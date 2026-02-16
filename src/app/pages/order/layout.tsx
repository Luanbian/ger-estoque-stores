import { useOrderStore } from "@/features/order/order";
import OrderPage from "./page";
import { useNavigate } from "react-router-dom";

const OrderLayout = () => {
  const navigate = useNavigate();
  const products = useOrderStore((state) => state.products);

  const makeOrder = () => {
    console.log("Fazendo pedido com os seguintes produtos:");
  };

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <OrderPage
      data={{ order: products }}
      actions={{ navigateBack, makeOrder }}
    />
  );
};

export default OrderLayout;
