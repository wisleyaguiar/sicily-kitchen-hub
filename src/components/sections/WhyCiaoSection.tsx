import { useRef, useState } from "react";

export default function WhyCiaoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasActivatedSound, setHasActivatedSound] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    if (!hasActivatedSound) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      setHasActivatedSound(true);
      setIsPlaying(true);
      videoRef.current.play().catch((err) => {
        console.error("Failed to play video:", err);
      });
    } else {
      if (videoRef.current.paused) {
        videoRef.current.play().catch((err) => {
          console.error("Failed to play video:", err);
        });
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePlayOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleVideoClick();
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && !hasActivatedSound) {
      setHasActivatedSound(true);
    }
  };

  return (
    <section id="why" className="py-12 px-5 bg-[var(--brand-cream)]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl uppercase">
          A Sicilian Ritual.
          <br />
          On Your Table.
        </h2>
        <div
          className="max-w-[340px] md:max-w-[360px] mx-auto aspect-[9/16] bg-foreground mt-10 rounded-2xl flex items-center justify-center border-4 border-foreground shadow-[var(--shadow-card)] relative overflow-hidden group cursor-pointer"
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            src="/videos/video-promo-home-otp.mp4"
            loop
            muted
            playsInline
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.58_0.22_27_/_0.15),_transparent_70%)]" />

          {(!hasActivatedSound || !isPlaying) && (
            <button
              onClick={handlePlayOverlayClick}
              className="relative z-10 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-bold)] hover:scale-110 transition duration-300"
              aria-label={hasActivatedSound ? "Play video" : "Play with sound"}
            >
              <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          {hasActivatedSound && (
            <button
              onClick={handleMuteToggle}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition backdrop-blur-sm"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
          )}

          <span className="absolute bottom-5 left-5 text-white/80 text-xs uppercase tracking-widest pointer-events-none drop-shadow-sm font-semibold">
            CIAO! Sicily — Story
          </span>
        </div>
        <div className="mt-12 max-w-2xl mx-auto flex flex-col gap-6 text-center">
          <p className="text-lg text-muted-foreground text-balance">
            Most people use olive oil only for cooking. But in Sicily, real olive oil also belongs{" "}
            <strong className="text-foreground">on the table</strong>. It finishes pasta. Enhances
            salads. Brings pizza to life.
          </p>
          <p className="text-lg text-muted-foreground text-balance">
            CIAO! brings this ritual into American kitchens — premium EVOO, bold flavor, modern
            design, and quality you notice from the very first drizzle. Not just another bottle. A
            product with{" "}
            <strong className="text-foreground">origin, purity, tradition and personality.</strong>
          </p>
        </div>
        <a
          href="#shop"
          className="inline-flex items-center justify-center mt-10 bg-foreground text-background px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold uppercase tracking-wider rounded-full outline outline-2 outline-offset-2 outline-foreground hover:bg-primary hover:outline-primary transition leading-none btn-pulse-black"
        >
          <span className="leading-none">Try CIAO! with 15% OFF</span>
        </a>
      </div>
    </section>
  );
}
