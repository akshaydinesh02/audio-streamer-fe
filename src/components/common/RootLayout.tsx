import React from "react";
import Header from "../header";
import AudioPlayerComponent from "../audio-player";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-h-[20%]">
        <Header />
      </div>
      <div className="h-[60%] px-12 py-24">{children}</div>
      <AudioPlayerComponent />
    </>
  );
};

export default RootLayout;
