import { CustomerComponent } from "@/app/components/customer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Product } from "@/features/order/types";
import { convertFromCents } from "@/utils/convertCents";

interface Props {
  data: {
    order: Product[];
    totalPrice: number;
  };
  actions: {
    navigateBack: () => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
  };
}

const OrderPage = ({ data, actions }: Props) => {
  const { order, totalPrice } = data;
  const { navigateBack, removeItem, clearCart } = actions;

  return (
    <div className="min-h-screen flex flex-col bg-muted/40">
      <main className="flex-1 flex flex-col max-w-6xl mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl font-semibold mb-10">Meu Pedido</h1>

        {order.length === 0 ? (
          <p className="text-lg text-muted-foreground">
            Seu carrinho está vazio.
          </p>
        ) : (
          <div className="flex-1 flex flex-col">
            <ul
              className="space-y-4 overflow-y-auto"
              style={{ maxHeight: "610px" }}
            >
              {order.map((product) => (
                <li
                  key={product._id}
                  className="flex justify-between items-center p-4 bg-white rounded shadow"
                >
                  <span>
                    {product.name} x {product.quantity}
                  </span>
                  <span className="font-semibold">
                    R$ {convertFromCents(product.price)}
                  </span>
                  <button
                    className="text-red-500 ml-4 cursor-pointer"
                    onClick={() => removeItem(product._id)}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end items-center">
              <span className="text-lg font-bold">
                Total: R$ {convertFromCents(totalPrice)}
              </span>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
          <button
            className="bg-primary text-white px-6 py-2 rounded font-bold shadow cursor-pointer"
            onClick={navigateBack}
          >
            Voltar
          </button>
          <button
            className="bg-primary text-white px-6 py-2 rounded font-bold shadow cursor-pointer"
            onClick={clearCart}
          >
            Limpar carrinho
          </button>

          <Dialog>
            <DialogTrigger asChild>
              <button
                className="bg-primary text-white px-6 py-2 rounded font-bold shadow cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={order.length === 0}
              >
                Realizar Pedido
              </button>
            </DialogTrigger>
            <DialogContent className="bg-white rounded-lg p-6">
              <DialogTitle className="text-2xl font-semibold mb-4">
                Finalizar Pedido
              </DialogTitle>
              <CustomerComponent />
            </DialogContent>
          </Dialog>
        </div>
      </footer>
    </div>
  );
};

export default OrderPage;
