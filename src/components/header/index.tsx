import { useAuth } from "../../hooks/Auth";
import { AuthComponent } from "../auth";

const Header = () => {
  const { user } = useAuth();
  console.log("User", user);
  return (
    <header className="max-h-[20%] w-full sticky top-0 z-20 bg-gray-100">
      <div className="flex justify-between border-b p-6 items-center shadow-xl z-20">
        <h1 className="text-xl font-bold">Audio Streaming Web App</h1>

        <AuthComponent />
      </div>
    </header>
  );
};

export default Header;
