import "./App.css";
import Header from "./components/header";
import AudioPlayerComponent from "./components/audio-player";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./hooks/Auth";

function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <Header />
        <AudioPlayerComponent />
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
