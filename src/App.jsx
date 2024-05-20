import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { musics } from "./musics";
import { useRef, useState } from "react";

function App() {
  const audioRef = useRef();
  const progressBarRef = useRef();
  const [musicList, setMusicList] = useState([...musics]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [currentMusic, setCurrentMusic] = useState(musicList[musicIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleNext() {
    if (musicIndex >= musicList.length - 1) {
      setMusicIndex(0);
      setCurrentMusic(musicList[0]);
    } else {
      setMusicIndex((prev) => prev + 1);
      setCurrentMusic(musicList[musicIndex + 1]);
    }
  }

  return (
    <div className="container">
      <Header />
      <Main
        musics={musicList}
        audioRef={audioRef}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        setIsPlaying={setIsPlaying}
        setMusicIndex={setMusicIndex}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
        handleNext={handleNext}
      />
      <Footer
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        musicIndex={musicIndex}
        setMusicIndex={setMusicIndex}
        timeProgress={timeProgress}
        setTimeProgress={setTimeProgress}
        duration={duration}
        musics={musicList}
        currentMusic={currentMusic}
        setCurrentMusic={setCurrentMusic}
        handleNext={handleNext}
      />
    </div>
  );
}

export default App;
