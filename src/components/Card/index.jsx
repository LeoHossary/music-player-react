import "./styles.css";

export default function Card({
  musics,
  audioRef,
  setIsPlaying,
  setMusicIndex,
  setCurrentMusic,
}) {
  function handleStartMusic(music) {
    const index = music.id - 1;
    setMusicIndex(index);
    setCurrentMusic(musics[index]);

    audioRef.current.currentTime = 0;

    setIsPlaying(true);
  }

  return (
    <>
      {musics.map((music) => (
        <div
          className="container-card"
          onClick={() => handleStartMusic(music)}
          key={music.id}
        >
          <img src={music.cover} alt="capa do albúm da música" />
          <strong>{music.title}</strong>
          <p>{music.description}</p>
        </div>
      ))}
    </>
  );
}
