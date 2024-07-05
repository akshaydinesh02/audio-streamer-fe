import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import AuthHeader from "./AuthHeader";
import BackButton from "./BackButton";

interface CardWrapperProps {
  label: string;
  title: string;
  cardToRender: number;
  backButtonLabel: string;
  children: ReactNode;
}
const CardWrapper = ({
  label,
  title,
  cardToRender,
  backButtonLabel,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} cardToRender={cardToRender} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
