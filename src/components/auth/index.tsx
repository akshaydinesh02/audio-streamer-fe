import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import LoginForm from "./Login";
import RegisterForm from "./Register";
import { authCardToRender, authSheetOpen } from "../../state/atoms/globalAtoms";
import { useRecoilState } from "recoil";
import { useAuth } from "../../hooks/Auth";
import { CgProfile } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

export function AuthComponent() {
  const [card] = useRecoilState(authCardToRender);
  const [open, setOpen] = useRecoilState(authSheetOpen);
  const { user, signOut } = useAuth();
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const isAdmin = true;
  return (
    <>
      {user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <CgProfile className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  if (path === "/") return;
                  navigate("/");
                }}
              >
                Home
              </DropdownMenuItem>
              {isAdmin ? (
                <DropdownMenuItem
                  onClick={() => {
                    if (path === "/dashboard") return;
                    navigate("/dashboard");
                  }}
                >
                  Admin Dashboard
                </DropdownMenuItem>
              ) : (
                <></>
              )}
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <CgProfile className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            {card === 0 ? <LoginForm /> : <RegisterForm />}
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
