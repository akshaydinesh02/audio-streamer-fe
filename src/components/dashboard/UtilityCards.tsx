import { IoCloudUploadOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { MdOutlineNotStarted } from "react-icons/md";
import { FaRegCirclePause, FaRegCircleStop } from "react-icons/fa6";

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

const UtilityCards = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium text-xl p-4 pb-0 mt-6 text-center">
        Utilities
      </h1>
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

export default UtilityCards;
