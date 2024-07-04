import { useState } from "react";
import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LoginForm from "./login";

import RegisterForm from "./register";

export function AuthComponent() {
  const [formToRender, setFormToRender] = useState(0);
  console.log("form to render setter", setFormToRender);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Login</Button>
      </SheetTrigger>
      <SheetContent>
        {formToRender === 0 ? <LoginForm /> : <RegisterForm />}
      </SheetContent>
    </Sheet>
  );
}
