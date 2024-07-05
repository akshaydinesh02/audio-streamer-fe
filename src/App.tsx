import "./App.css";
import Header from "./components/header";
import AudioPlayerComponent from "./components/audio-player";
import { RecoilRoot } from "recoil";
import { AuthProvider } from "./hooks/Auth";
import Info from "./homepage/info";

function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <div className="max-h-[20%]">
          <Header />
        </div>
        <div className="h-[60%] px-12 py-24">
          <Info />
        </div>
        <AudioPlayerComponent />
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
