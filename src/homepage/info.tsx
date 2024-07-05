import SingleCard from "./card";

const cardData = [
  {
    title: "Continuous Streaming",
    description:
      "Stream audio files continuously throughout the day without interruption.",
  },
  {
    title: "Admin Dashboard",
    description:
      "Admins can manage audio files, add/remove admins, start and stop streaming from an intuitive dashboard.",
  },
  {
    title: "Upload Audio Files",
    description: "Easily upload up to 10 audio files to be streamed.",
  },
  {
    title: "Real-time Control",
    description:
      "Control the audio stream in real-time, ensuring a smooth user experience.",
  },
  {
    title: "Responsive Design",
    description:
      "Access and control the stream from any device, whether it's a desktop or mobile.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "An interface designed to be easy to navigate for both admins and listeners.",
  },
];

const Info = () => {
  return (
    <div className="grid grid-cols-3 gap-12 max-w-[60%] m-auto h-full">
      {cardData.map((card, _i) => (
        <SingleCard
          key={_i}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Info;
