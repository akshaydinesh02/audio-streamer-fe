import React from "react";
import Header from "../header";
import AudioPlayerComponent from "../audio-player";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[60%] px-12 py-8 overflow-y-scroll">
        {children}
      </main>
      <AudioPlayerComponent />
    </>
  );
};

export default RootLayout;
