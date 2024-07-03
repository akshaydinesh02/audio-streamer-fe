import { AuthComponent } from "../auth";

const Header = () => {
  return (
    <div className="flex justify-between border-b p-6 items-center shadow-xl">
      <h1 className="text-xl font-bold">Audio Streaming Web App</h1>

      <AuthComponent />
    </div>
  );
};

export default Header;
