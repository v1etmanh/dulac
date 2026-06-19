import { useState } from 'react';
import VietnamMap from './VietnamMap.jsx';
import styles from '../styles/HeroSection.module.css';

const gameOneShots = [
  'begin.png',
  'game_demo.png',
  'map.png',
  'diary.png',
  'oanquan.png',
  'dan_bau.jpg',
];

const gameTwoShots = ['1.png', '2.png', '3.png', '4.png', '5.png'];

const worlds = [
  {
    title: 'Múa rối nước',
    text: 'Âm thanh của nước và tiếng trống hội là tín hiệu đầu tiên đánh thức Tính.',
    image: '/game/coverkey/game2/1.png',
  },
  {
    title: 'Làng Thạch Thất',
    text: 'Cổng làng, sân đình và những lối nhỏ giữ lại ký ức tuổi thơ của Lan Anh và Tính.',
    image: '/game/coverkey/game1/begin.png',
  },
  {
    title: 'Hà Nội cổ',
    text: 'Trạm khởi đầu của hành trình, nơi văn hóa trở thành chiếc chìa khóa mở ký ức.',
    image: '/game/coverkey/game2/4.png',
  },
];

const characters = [
  {
    name: 'Lan Anh',
    role: 'Người dẫn đường',
    image: '/game/character/lan_anh.png',
    text: 'Kiên nhẫn, yêu văn hóa, luôn tin ký ức của Tính vẫn còn ở đâu đó.',
  },
  {
    name: 'Tính',
    role: 'Người trở về',
    image: '/game/character/tinh.png',
    text: 'Mang thân xác 33 tuổi nhưng tâm trí như trẻ nhỏ, được đánh thức bởi âm thanh quen thuộc.',
  },
];

function HeroSection({ onReplayIntro }) {
  const [selectedGameOne, setSelectedGameOne] = useState(gameOneShots[0]);
  const [selectedGameTwo, setSelectedGameTwo] = useState(gameTwoShots[0]);

  return (
    <main id="top" className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.headerVideo}>
          <video src="/videos/header_video.mp4" autoPlay muted loop playsInline />
          <div className={styles.headerFade} />
        </div>

        <div className={`${styles.heroCopy} reveal`}>
          <p className={styles.eyebrow}>✦ MỘT CHUYẾN HÀNH TRÌNH VỀ KÝ ỨC ✦</p>
          <h1>DU LẠC</h1>
          <p className={styles.subtitle}>DU • LẠC • 遊 • 樂</p>
          <p className={styles.tagline}>
            Khi ký ức bị khóa chặt — chỉ có văn hóa mới mở được cánh cửa trở về.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary} type="button" onClick={onReplayIntro}>Xem trailer →</button>
            <a className={styles.secondary} href="#story">Đọc cốt truyện</a>
          </div>
        </div>
      </section>

      <section className={`${styles.storyIntro} reveal`} aria-label="Giới thiệu cốt truyện">
        <p className={styles.sectionKicker}>Khối 1 — cốt truyện</p>
        <div>
          <h2>Lan Anh dẫn Tính trở về bằng văn hóa Việt.</h2>
          <p>
            Sau biến cố khiến Tính mất ký ức trưởng thành, Lan Anh đưa anh quay lại những vùng đất cũ:
            làng cổ, sân đình, múa rối nước, trò chơi dân gian và những âm thanh từng thuộc về tuổi trẻ
            của cả hai.
          </p>
        </div>
        <a href="#story">Xem toàn bộ cốt truyện →</a>
      </section>

      <section className={`${styles.gamesSection} reveal`} aria-label="Các game hiện có">
        <p className={styles.sectionKicker}>Khối 2 — tủ game</p>
        <article className={styles.gameFeature}>
          <div className={styles.gameMedia}>
            <img className={styles.gameCover} src={`/game/coverkey/game1/${selectedGameOne}`} alt="Du Lạc Tập 01 Tuổi thơ" />
            <div className={styles.shotGrid}>
              {gameOneShots.map((shot) => (
                <button
                  key={shot}
                  type="button"
                  className={selectedGameOne === shot ? styles.activeShot : ''}
                  onClick={() => setSelectedGameOne(shot)}
                  aria-label={`Xem ảnh ${shot}`}
                >
                  <img src={`/game/coverkey/game1/${shot}`} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <div className={styles.gameCopy}>
            <span className={styles.statusLive}>Đã ra mắt</span>
            <h2>Từ thơ</h2>
            <h3>Pixel art</h3>
            <p>
              Tuổi thơ của Lan Anh và Tính, nơi mọi ký ức bắt đầu: cổng làng, ô ăn quan, nhật ký du lạc
              và những trò chơi đầu đời.
            </p>
            <a href="#world">Chơi ngay →</a>
          </div>
        </article>

        <article className={`${styles.gameFeature} ${styles.reverse}`}>
          <div className={styles.gameMedia}>
            <img className={styles.gameCover} src={`/game/coverkey/game2/${selectedGameTwo}`} alt="Rối nước ân mạng làng Thạch Thất" />
            <div className={styles.shotGrid}>
              {gameTwoShots.map((shot) => (
                <button
                  key={shot}
                  type="button"
                  className={selectedGameTwo === shot ? styles.activeShot : ''}
                  onClick={() => setSelectedGameTwo(shot)}
                  aria-label={`Xem ảnh ${shot}`}
                >
                  <img src={`/game/coverkey/game2/${shot}`} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
          <div className={styles.gameCopy}>
            <span className={styles.statusSoon}>Sắp ra mắt</span>
            <h2>Rối nước: án mạng làng Thạch Thất</h2>
            <h3>Point & click, phong cách Rusty Lake</h3>
            <p>
              Một vụ án giấu sau tiếng trống hội và những con rối gỗ. Tính và Lan Anh lần theo mảnh ký
              ức ở làng cổ phía Bắc.
            </p>
            <a href="#newsletter">Wishlist →</a>
          </div>
        </article>
      </section>

      <section className={`${styles.teaserSection} reveal`} aria-label="Teaser game sắp ra mắt">
        <div className={styles.teaserCopy}>
          <p className={styles.sectionKicker}>Khối 3 — teaser sắp ra mắt</p>
          <h2>Tiếng trống hội vang lên, một vụ án bắt đầu.</h2>
          <p>
            Teaser của game 2 hé lộ màu sắc u tối hơn: làng cổ, rối nước, những đồ vật tưởng quen thuộc
            nhưng che giấu một bí mật chưa được gọi tên.
          </p>
        </div>
        <video src="/game/coverkey/game2/trailer.mov" controls muted playsInline poster="/game/coverkey/game2/1.png" />
      </section>

      <section className={`${styles.worldSection} reveal`} aria-label="Bối cảnh game">
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>Khối 4 — thế giới văn hóa</p>
          <h2>Bối cảnh game</h2>
        </div>
        <div className={styles.worldGrid}>
          {worlds.map((world) => (
            <article key={world.title} className={styles.worldCard}>
              <img src={world.image} alt={world.title} loading="lazy" />
              <div>
                <h3>{world.title}</h3>
                <p>{world.text}</p>
                <a href="#world">Đọc thêm →</a>
              </div>
            </article>
          ))}
        </div>
        <VietnamMap />
      </section>

      <section className={`${styles.characterSection} reveal`} aria-label="Nhân vật">
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>Khối 5 — nhân vật</p>
          <h2>Những người giữ ký ức</h2>
        </div>
        <div className={styles.characterGrid}>
          {characters.map((character) => (
            <article key={character.name} className={styles.characterCard}>
              <img src={character.image} alt={character.name} loading="lazy" />
              <div>
                <h3>{character.name}</h3>
                <span>{character.role}</span>
                <p>{character.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className={styles.note}>
          Mỗi tập có dàn nhân vật bản địa riêng — ví dụ các nghi phạm trong vụ án làng Thạch Thất.
        </p>
      </section>
    </main>
  );
}

export default HeroSection;
