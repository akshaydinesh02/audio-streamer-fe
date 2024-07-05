import { Button } from "../ui/button";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import LoginForm from "./login";

import RegisterForm from "./register";
import { authCardToRender } from "../../state/atoms/globalAtoms";
import { useRecoilState } from "recoil";
import { useAuth } from "../../hooks/Auth";
import { CgProfile } from "react-icons/cg";

export function AuthComponent() {
  const [card] = useRecoilState(authCardToRender);
  const { user, signOut } = useAuth();
  return (
    <>
      {user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary">
                <CgProfile className="w-6 h-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => signOut()}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default">
              <CgProfile className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            {card === 0 ? <LoginForm /> : <RegisterForm />}
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
