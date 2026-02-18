import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useOrderStore } from "@/features/order/order";
import type { CreateOrderPayload } from "@/features/order/types";
import { useShowcaseStore } from "@/features/showcase/showcase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CustomerComponent = () => {
  const { products, totalPrice, request, makeOrder } = useOrderStore(
    (state) => state,
  );
  const showcase = useShowcaseStore((state) => state.showcase);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrderPayload["customer"]>();

  const finishOrder = (data: CreateOrderPayload["customer"]) => {
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
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    };

    makeOrder(payload);
  };

  useEffect(() => {
    if (request.message) {
      if (request.success) {
        toast.success(request.message, { position: "top-center" });
      } else {
        toast.error(request.message, { position: "top-center" });
      }
    }
  }, [request]);

  return (
    <form
      onSubmit={handleSubmit(finishOrder)}
      className="flex flex-col space-y-4 max-w-md mx-auto"
    >
      <Input
        type="text"
        placeholder="Nome"
        {...register("name", { required: "O nome é obrigatório" })}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

      <Input type="email" placeholder="Email" {...register("email")} />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <Input
        type="tel"
        placeholder="Telefone"
        {...register("phone", { required: "O telefone é obrigatório" })}
      />
      {errors.phone && (
        <span className="text-red-500">{errors.phone.message}</span>
      )}

      <Button type="submit">Finalizar Pedido</Button>
    </form>
  );
};
