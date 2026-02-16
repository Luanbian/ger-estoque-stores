import { useOrderStore } from "@/features/order/order";
import OrderPage from "./page";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderLayout = () => {
  const navigate = useNavigate();
  const { products, removeItem, clearCart, totalPrice, setRequest } =
    useOrderStore((state) => state);

  const navigateBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setRequest({ success: true, message: null });
  }, [setRequest]);

  return (
    <OrderPage
      data={{ order: products, totalPrice: totalPrice() }}
      actions={{ navigateBack, removeItem, clearCart }}
    />
  );
};

export default OrderLayout;
