import { useRecoilState } from "recoil";
import { authCardToRender } from "../../state/atoms/globalAtoms";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  cardToRender: number;
}

const BackButton = ({ label, cardToRender }: BackButtonProps) => {
  const [, setAuthCardToRender] = useRecoilState(authCardToRender);

  return (
    <>
      <Button
        variant="link"
        className="font-normal w-full cursor-pointer"
        size="sm"
        asChild
        onClick={() => setAuthCardToRender(cardToRender)}
      >
        <p>{label}</p>
      </Button>
    </>
  );
};

export default BackButton;
