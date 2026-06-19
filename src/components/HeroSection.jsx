import VietnamMap from './VietnamMap.jsx';
import styles from '../styles/HeroSection.module.css';

function HeroSection({ onReplayIntro }) {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.headerVideo}>
        <video src="/videos/header_video.mp4" autoPlay muted loop playsInline />
        <div className={styles.headerFade} />
      </div>

      <div className={`${styles.inner} reveal`}>
        <p className={styles.eyebrow}>✦ MỘT CHUYẾN HÀNH TRÌNH VỀ KÝ ỨC ✦</p>
        <h1>DU LẠC</h1>
        <p className={styles.subtitle}>DU • LẠC • 遊 • 樂</p>
        <p className={styles.tagline}>
          Khi ký ức bị khóa chặt — chỉ có văn hóa mới mở được cánh cửa trở về.
        </p>

        <VietnamMap />

        <div className={styles.actions}>
          <button className={styles.primary} type="button" onClick={onReplayIntro}>Xem trailer →</button>
          <a className={styles.secondary} href="#shop">Đặt hàng trước</a>
        </div>

        <div className={styles.platforms} aria-label="Nền tảng">
          <span>Steam</span>
          <span>Nintendo Switch</span>
          <span>Mobile</span>
        </div>
      </div>

      <div className={`${styles.foreground} hero-foreground`}>
        {/* Pixel art foreground layer — Lan Anh sprite at village gate */}
      </div>
    </section>
  );
}

export default HeroSection;
