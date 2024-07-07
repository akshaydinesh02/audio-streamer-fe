import { IoCloudUploadOutline } from "react-icons/io5";
import { useAuth } from "../../hooks/Auth";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { FaRegCirclePause, FaRegCircleStop } from "react-icons/fa6";
import { MdOutlineNotStarted } from "react-icons/md";

const Dashboard = () => {
  const { user } = useAuth();
  const name = user?.user_metadata?.name
    ? `, ${user?.user_metadata?.name}!`
    : "!";

  const cardsInfo = [
    {
      header: "Start Streaming",
      description: "You can use this utility to start the audio streaming.",
      button: "start",
      icon: <MdOutlineNotStarted className="w-6 h-6" />,
    },
    {
      header: "Pause Streaming",
      description: "You can use this utility to pause the audio streaming.",
      button: "pause",
      icon: <FaRegCirclePause className="w-6 h-6" />,
    },
    {
      header: "Stop Streaming",
      description: "You can use this utility to stop the audio streaming..",
      button: "stop",
      icon: <FaRegCircleStop className="w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-[70%] m-auto flex flex-col gap-6">
      <h1 className="font-medium text-3xl mb-8">
        Welcome to admin dashboard<strong>{name}</strong>
      </h1>

      <div className="mb-8">
        <p className="text-xl">
          Current Streaming Status -
          <strong className="text-red-500"> NOT STREAMING</strong>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Card className="shadow-md flex flex-col justify-center items-center border-[1px] border-gray-200">
          <CardHeader className="bg-gray-100 w-full flex justify-center items-center capitalize text-xl font-medium h-[30%] text-gray-900">
            Upload audio files
          </CardHeader>
          <CardContent className="text-center h-[40%] p-4 text-gray-600">
            You can use this utility to upload upto 10 audio files which you'd
            like to be streamed through the player.
          </CardContent>
          <CardFooter className="h-[30%]">
            <Button type="button" className="uppercase flex gap-2">
              <IoCloudUploadOutline className="w-6 h-6" />
              Upload
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="gap-4 grid grid-cols-3">
        {cardsInfo.map((card, _i) => (
          <Card
            key={_i}
            className="shadow-md flex flex-col justify-center items-center border-[1px] border-gray-200"
          >
            <CardHeader className="bg-gray-100 w-full flex justify-center items-center capitalize text-xl font-medium h-[30%] text-gray-900">
              {card.header}
            </CardHeader>
            <CardContent className="text-center h-[40%] p-4 text-gray-600">
              {card.description}
            </CardContent>
            <CardFooter className="h-[30%]">
              <Button type="button" className="uppercase flex gap-2">
                {card.icon} {card.button}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
