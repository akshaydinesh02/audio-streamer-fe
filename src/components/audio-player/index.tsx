import { createPortal } from "react-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const mountEl = document.getElementById("player");
console.log(mountEl);

const AudioPlayerComponent = () => {
  return createPortal(
    <>
      <AudioPlayer />
    </>,
    mountEl as HTMLElement
  );
};

export default AudioPlayerComponent;
