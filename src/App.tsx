import "./App.css";
import Header from "./components/header";
import AudioPlayerComponent from "./components/audio-player";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <AudioPlayerComponent />
    </RecoilRoot>
  );
}

export default App;
