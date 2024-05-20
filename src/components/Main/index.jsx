import Card from "../Card";
import "./styles.css";

export default function Main({
  musics,
  audioRef,
  currentMusic,
  setCurrentMusic,
  setIsPlaying,
  setMusicIndex,
  setDuration,
  progressBarRef,
  handleNext,
}) {
  function onLoadedMetadata() {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  }
  return (
    <div className="container-main">
      <div className="root">
        <div className="title">
          <h1>The best play list</h1>
        </div>
        <div className="cards">
          <Card
            musics={musics}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            setMusicIndex={setMusicIndex}
            setCurrentMusic={setCurrentMusic}
          />
        </div>
        <audio
          src={currentMusic.url}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={handleNext}
        />
      </div>
    </div>
  );
}
