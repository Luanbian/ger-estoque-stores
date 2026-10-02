import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useOrderStore } from "@/features/order/order";
import type { CreateOrderPayload } from "@/features/order/types";
import { useShowcaseStore } from "@/features/showcase/showcase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getPriceInCents } from "@/utils/getPriceInCents";

interface Props {
  actions: {
    closeDialog: () => void;
  };
}

export const CustomerComponent = ({ actions }: Props) => {
  const { closeDialog } = actions;
  const { products, totalPrice, makeOrder } = useOrderStore((state) => state);
  const showcase = useShowcaseStore((state) => state.showcase);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateOrderPayload["customer"]>();

  const finishOrder = async (data: CreateOrderPayload["customer"]) => {
    if (!showcase) return;

    const payload: CreateOrderPayload = {
      tenantId: showcase.tenantId,
      domain: showcase.domain,
      totalAmount: totalPrice(),
      items: products.map((product) => ({
        productId: product._id,
        nameSnapshot: product.title,
        quantity: product.quantity,
        priceSnapshot: getPriceInCents(product),
      })),
      customer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    };

    const { success, message } = await makeOrder(payload);
    if (!success) {
      toast.error(message, { position: "top-center" });
      return;
    }

    toast.success(message, { position: "top-center" });
    closeDialog();
  };

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

      <Button type="submit" disabled={isSubmitting}>
        Finalizar Pedido
      </Button>
    </form>
  );
};
