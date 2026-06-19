import { useRef } from 'react';
import styles from '../styles/IntroGate.module.css';

function IntroGate({ onComplete }) {
  const videoRef = useRef(null);

  const handleLoaded = () => {
    videoRef.current?.play().catch(() => {});
  };

  return (
    <main className={styles.gate} aria-label="Du Lạc intro">
      <button className={styles.skip} type="button" onClick={onComplete}>
        Bỏ qua intro
      </button>
      <video
        ref={videoRef}
        src="/videos/introduction.mp4"
        autoPlay
        muted
        playsInline
        onCanPlay={handleLoaded}
        onEnded={onComplete}
      />
      <div className={styles.overlay}>
        <p>DU LẠC</p>
        <span>Intro cinematic</span>
      </div>
    </main>
  );
}

export default IntroGate;
