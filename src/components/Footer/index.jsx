import "./styles.css";
import { useEffect, useCallback, useRef } from "react";
import Controls from "../Controls";
import ProgressBar from "../ProgressBar";

export default function Footer({
  audioRef,
  progressBarRef,
  isPlaying,
  setIsPlaying,
  musicIndex,
  setMusicIndex,
  timeProgress,
  setTimeProgress,
  duration,
  musics,
  currentMusic,
  setCurrentMusic,
  handleNext,
}) {
  return (
    <div className="container-footer">
      <Controls
        handleNext={handleNext}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        musicIndex={musicIndex}
        setMusicIndex={setMusicIndex}
        musics={musics}
        setCurrentMusic={setCurrentMusic}
      />

      <ProgressBar
        audioRef={audioRef}
        timeProgress={timeProgress}
        setTimeProgress={setTimeProgress}
        progressBarRef={progressBarRef}
        duration={duration}
        isPlaying={isPlaying}
      />

      <div className="music-content">
        <h1>{currentMusic.title}</h1>
        <strong>{currentMusic.artist}</strong>
      </div>
    </div>
  );
}
