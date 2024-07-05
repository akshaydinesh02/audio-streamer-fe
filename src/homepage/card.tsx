import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface SingleCardProps {
  title: string;
  description: string;
}

const SingleCard = ({ title, description }: SingleCardProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default SingleCard;
