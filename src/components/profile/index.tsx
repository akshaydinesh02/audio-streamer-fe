import { useAuth } from "../../hooks/Auth";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const { user } = useAuth();
  const name = user?.user_metadata?.name
    ? `, ${user?.user_metadata?.name}!`
    : "!";

  return (
    <div className="max-w-[70%] m-auto flex flex-col gap-4 pb-14">
      <h1 className="font-medium text-3xl text-center">
        Welcome to profile page<strong>{name}</strong>
      </h1>
      <ProfileDetails />
    </div>
  );
};

export default Profile;
