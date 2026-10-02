import { useOrderStore } from "@/features/order/order";
import OrderPage from "./page";
import { useNavigate } from "react-router-dom";

const OrderLayout = () => {
  const navigate = useNavigate();
  const { products, removeItem, clearCart, totalPrice } = useOrderStore(
    (state) => state,
  );

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <OrderPage
      data={{ order: products, totalPrice: totalPrice() }}
      actions={{ navigateBack, removeItem, clearCart }}
    />
  );
};

export default OrderLayout;
