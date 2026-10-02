import { Button } from "@/components/ui/button";

interface Props {
  data: {
    message: string | null;
  };
  actions: {
    retry: () => void;
  };
}

export const RequestError = ({ data, actions }: Props) => {
  const { message } = data;
  const { retry } = actions;

  return (
    <div className="flex flex-col items-center gap-4 py-12 text-center">
      <p className="text-lg text-muted-foreground">{message}</p>
      <Button className="cursor-pointer" onClick={retry}>
        Tentar novamente
      </Button>
    </div>
  );
};
