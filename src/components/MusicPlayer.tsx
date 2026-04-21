import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Soft romantic instrumental (royalty-free)
const TRACK_URL =
  "https://cdn.pixabay.com/audio/2022/10/30/audio_347111d654.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [needsPrompt, setNeedsPrompt] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryPlay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setNeedsPrompt(true);
      }
    };
    void tryPlay();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
        setNeedsPrompt(false);
      } catch {
        /* ignore */
      }
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-card/80 px-4 py-3 backdrop-blur-md shadow-soft border border-border hover:scale-105 transition-transform"
    >
      {playing ? (
        <Music className="h-4 w-4 text-rose animate-heartbeat" />
      ) : (
        <VolumeX className="h-4 w-4 text-muted-foreground" />
      )}
      <span className="text-xs font-medium text-foreground">
        {playing ? "Playing" : needsPrompt ? "Tap to play music" : "Music off"}
      </span>
    </button>
  );
}
