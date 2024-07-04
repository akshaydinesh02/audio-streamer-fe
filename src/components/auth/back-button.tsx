import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <p>{label}</p>
      <p>{href}</p>
    </Button>
  );
};

export default BackButton;
