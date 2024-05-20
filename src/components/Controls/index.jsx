import "./styles.css";
import Stop from "./../../assets/stop.svg";
import Previous from "./../../assets/previous.svg";
import Pause from "./../../assets/pause.svg";
import Play from "./../../assets/play.svg";
import Next from "./../../assets/next.svg";

export default function Controls({
  audioRef,
  isPlaying,
  setIsPlaying,
  musicIndex,
  setMusicIndex,
  musics,
  setCurrentMusic,
  handleNext,
}) {
  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  function handleStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  function handlePrevious() {
    if (musicIndex === 0) {
      let lastMusicIndex = musics.length - 1;
      setMusicIndex(lastMusicIndex);
      setCurrentMusic(musics[lastMusicIndex]);
    } else {
      setMusicIndex((prev) => prev - 1);
      setCurrentMusic(musics[musicIndex - 1]);
    }
  }
  return (
    <div className="container-buttons">
      <button onClick={handleStop}>
        <img src={Stop} alt="" />
      </button>
      <button onClick={handlePrevious}>
        <img src={Previous} alt="" />
      </button>
      <button>
        <img src={isPlaying ? Pause : Play} alt="" onClick={togglePlayPause} />
      </button>
      <button onClick={handleNext}>
        <img src={Next} alt="" onClick={handleNext} />
      </button>
    </div>
  );
}
