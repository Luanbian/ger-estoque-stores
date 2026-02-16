import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ASSETS_BASE_URL } from "@/constants/assets";
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
          <ShoppingCart />
        </PopoverTrigger>
        <PopoverContent className="bg-white rounded-lg p-4">
          <div>
            <p className="text-lg font-bold">Carrinho de Compras</p>
            <p>Seu carrinho está vazio.</p>
            <Button
              variant="outline"
              className="mt-4 cursor-pointer"
              onClick={handleNavigateToOrders}
            >
              Concluir
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </header>
  );
};
