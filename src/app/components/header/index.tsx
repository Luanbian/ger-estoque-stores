import { ASSETS_BASE_URL } from "@/constants/assets";

interface Props {
  data: {
    logo: string;
  };
}

export const Header = ({ data }: Props) => {
  const { logo } = data;

  return (
    <header className="flex m-2">
      <img
        src={`${ASSETS_BASE_URL}${logo}`}
        width={80}
        height={80}
        alt="Logo"
      />
    </header>
  );
};
