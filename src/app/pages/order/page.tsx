import type { Product } from "@/features/order/types";

interface Props {
  data: {
    order: Product[];
  };
  actions: {
    navigateBack: () => void;
    makeOrder: () => void;
  };
}

const OrderPage = ({ data, actions }: Props) => {
  const { order } = data;
  const { navigateBack, makeOrder } = actions;

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
                  <span>{product.name}</span>
                  <span className="font-semibold">
                    R$ {product.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end items-center">
              <span className="text-lg font-bold">
                Total: R${" "}
                {order
                  .reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0,
                  )
                  .toFixed(2)}
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
            onClick={makeOrder}
          >
            Realizar Pedido
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OrderPage;
