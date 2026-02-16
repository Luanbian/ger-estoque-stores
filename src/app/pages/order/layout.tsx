import { useOrderStore } from "@/features/order/order";
import OrderPage from "./page";
import { useNavigate } from "react-router-dom";
import type { CreateOrderPayload } from "@/features/order/types";
import { useShowcaseStore } from "@/features/showcase/showcase";

const OrderLayout = () => {
  const navigate = useNavigate();
  const { products, removeItem, clearCart, totalPrice } = useOrderStore(
    (state) => state,
  );
  const showcase = useShowcaseStore((state) => state.showcase);

  const makeOrder = () => {
    if (!showcase) return;

    const payload: CreateOrderPayload = {
      tenantId: showcase.tenantId,
      domain: showcase.domain,
      totalAmount: totalPrice(),
      items: products.map((product) => ({
        productId: product._id,
        nameSnapshot: product.name,
        quantity: product.quantity,
        priceSnapshot: product.price,
      })),
      customer: {
        name: "Customer Name",
        email: "customer@example.com",
        phone: "123-456-7890",
      },
    };

    console.log({ payload });
  };

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <OrderPage
      data={{ order: products, totalPrice: totalPrice() }}
      actions={{ navigateBack, makeOrder, removeItem, clearCart }}
    />
  );
};

export default OrderLayout;
