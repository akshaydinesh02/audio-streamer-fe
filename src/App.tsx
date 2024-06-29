import "./App.css";
import Header from "./components/header";
import AudioPlayerComponent from "./components/audio-player";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>Audio Streaming Web App</h1>
        <Button>TEST</Button>
      </div>

      <AudioPlayerComponent />
    </>
  );
}

export default App;
