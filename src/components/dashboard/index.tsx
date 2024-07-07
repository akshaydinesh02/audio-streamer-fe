import { useAuth } from "../../hooks/Auth";
import LogsTable from "./LogsTable";
import UtilityCards from "./UtilityCards";

const Dashboard = () => {
  const { user } = useAuth();
  const name = user?.user_metadata?.name
    ? `, ${user?.user_metadata?.name}!`
    : "!";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const curDate = new Date(Date.now());
  const year = curDate.getFullYear();
  const month = months[curDate.getMonth() + 1];
  const date = curDate.getDate();
  const hour = curDate.getHours();
  const min = curDate.getMinutes();
  const currentDate = `${date} ${month} ${year} ${hour}:${min}`;

  return (
    <div className="max-w-[70%] m-auto flex flex-col gap-4">
      <h1 className="font-medium text-3xl text-center">
        Welcome to admin dashboard<strong>{name}</strong>
      </h1>

      <div className="mt-4 py-4 px-2 flex justify-between items-center text-gray-500">
        <p className="text-lg">
          Current Streaming Status -{" "}
          <strong className="text-red-500">NOT STREAMING</strong>
        </p>
        <p className="text-lg">
          Current Date - <span className="text-gray-600">{currentDate}</span>
        </p>
      </div>

      <UtilityCards />

      <LogsTable />
    </div>
  );
};

export default Dashboard;
