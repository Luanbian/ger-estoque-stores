import { ASSETS_BASE_URL } from "@/constants/assets";

interface Props {
  data: {
    logo: string;
    showName: boolean;
    name: string;
  };
}

export const Header = ({ data }: Props) => {
  const { logo, showName, name } = data;

  return (
    <header className="flex m-2 items-center">
      <img
        src={`${ASSETS_BASE_URL}${logo}`}
        width={80}
        height={80}
        alt="Logo"
      />
      {showName && <h1 className="text-lg font-bold ml-2">{name}</h1>}
    </header>
  );
};
