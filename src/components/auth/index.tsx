import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LoginForm from "./login";

import RegisterForm from "./register";
import { authCardToRender } from "../../state/atoms/globalAtoms";
import { useRecoilState } from "recoil";

export function AuthComponent() {
  const [card] = useRecoilState(authCardToRender);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Login</Button>
      </SheetTrigger>
      <SheetContent>
        {card === 0 ? <LoginForm /> : <RegisterForm />}
      </SheetContent>
    </Sheet>
  );
}
