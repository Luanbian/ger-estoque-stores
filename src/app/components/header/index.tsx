import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ASSETS_BASE_URL } from "@/constants/assets";
import { useOrderStore } from "@/features/order/order";
import { convertFromCents } from "@/utils/convertCents";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  data: {
    logo: string;
    showName: boolean;
    name: string;
  };
}

export const Header = ({ data }: Props) => {
  const navigate = useNavigate();
  const { logo, showName, name } = data;

  const { products, totalPrice } = useOrderStore((state) => state);

  const handleNavigateToOrders = () => {
    navigate("/orders");
  };

  return (
    <header className="flex m-2 items-center justify-between">
      <div className="flex items-center">
        <img
          src={`${ASSETS_BASE_URL}${logo}`}
          width={80}
          height={80}
          alt="Logo"
        />
        {showName && <h1 className="text-lg font-bold ml-2">{name}</h1>}
      </div>
      <Popover>
        <PopoverTrigger asChild className="cursor-pointer">
          <div className="relative">
            <ShoppingCart />
            {products.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 text-center border border-white shadow">
                {products.length}
              </span>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="bg-white rounded-lg p-4">
          <div>
            <p className="text-lg font-bold">Carrinho de Compras</p>
            {products.length === 0 ? (
              <p className="mt-2">Seu carrinho está vazio.</p>
            ) : (
              <ul className="mt-2">
                {products.slice(0, 3).map((product) => (
                  <li key={product._id} className="flex justify-between">
                    <span>
                      {product.title} x {product.quantity}
                    </span>
                    {product?.pricing?.basePriceInCents ? (
                      <span>
                        R${" "}
                        {convertFromCents(
                          product.pricing.basePriceInCents * product.quantity,
                        )}
                      </span>
                    ) : null}
                  </li>
                ))}
                {products.length > 3 && (
                  <li className="flex justify-between">
                    <span>...e mais {products.length - 3} itens</span>
                  </li>
                )}
              </ul>
            )}
            <hr className="my-4" />
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-bold">
                R$ {convertFromCents(totalPrice())}
              </span>
            </div>
            <Button
              variant="outline"
              className="mt-4 cursor-pointer"
              onClick={handleNavigateToOrders}
            >
              Ver detalhes do pedido
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};
