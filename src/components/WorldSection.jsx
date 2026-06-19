import styles from '../styles/WorldSection.module.css';

const gameOneChallenges = [
  {
    title: 'Ô ăn quan',
    image: '/game/coverkey/game1/oanquan.png',
    text: 'Một thử thách tuổi thơ trên sân làng, nơi nhịp đếm và trí nhớ bắt đầu mở lại.',
  },
  {
    title: 'Lùa gà',
    image: '/game/coverkey/game1/batga.png',
    text: 'Mini-game vui nhộn trong không gian quê, gợi lại những ngày Tính chạy khắp xóm nhỏ.',
  },
  {
    title: 'Đàn bầu',
    image: '/game/coverkey/game1/dan_bau.jpg',
    text: 'Gặp bà Ngần và lần theo quá khứ của tiếng đàn bầu trong ký ức gia đình.',
  },
];

const gameTwoClues = [
  'Diễm bị đuổi khỏi nhà vì tự ý sửa con rối trong bộ Thất Tinh.',
  'Cụ Minh Đường biến mất trong căn phòng khóa trái, để lại tách trà ấm và con rối bị tháo dây.',
  'Tính vô thức thắt nút ròng rọc, hé lộ hướng dây và cách cụ đã thoát qua mặt nước.',
  'Ký ức con rối rùa trở lại với Tính: chậm rãi, âm thầm, nhưng có thật.',
];

function WorldSection() {
  return (
    <section id="world" className={styles.world}>
      <div className={`${styles.inner} reveal`}>
        <div className={styles.hero}>
          <p className={styles.kicker}>Thế giới game</p>
          <h2>Hai tập game, hai lát cắt ký ức</h2>
          <p>
            Du Lạc được xây như một chuỗi tập truyện tương tác. Tập đầu đưa Tính trở về quê hương
            để tìm lại người mẹ từng rời xa cha anh. Tập tiếp theo chuyển sang màu sắc trinh thám
            rối nước, nơi một vụ mất tích che giấu mối nứt trong một gia đình nghệ nhân.
          </p>
        </div>

        <article className={styles.featureGame}>
          <div className={styles.mediaStack}>
            <img className={styles.cover} src="/game/coverkey/game1/begin.png" alt="Du Lạc Tuổi thơ" />
            <div className={styles.miniShots}>
              <img src="/game/coverkey/game1/map.png" alt="" loading="lazy" />
              <img src="/game/coverkey/game1/diary.png" alt="" loading="lazy" />
              <img src="/game/coverkey/game1/npc.png" alt="" loading="lazy" />
            </div>
          </div>

          <div className={styles.gameCopy}>
            <span className={styles.liveBadge}>Đã ra mắt</span>
            <p className={styles.kicker}>Game 1</p>
            <h3>Tuổi thơ</h3>
            <strong>Hành trình về quê hương của Tính</strong>
            <p>
              Lan Anh đưa Tính trở lại quê cũ, nơi tuổi thơ của anh vẫn còn nằm trong cổng làng,
              trò chơi dân gian và những câu chuyện chưa từng được kể hết. Trên đường tìm lại người mẹ
              từng chia tay bố anh, Tính lần lượt chạm vào những ký ức đầu đời: sân đình, nhật ký,
              tiếng đàn bầu và bà Ngần, người giữ một mảnh quá khứ âm nhạc của gia đình.
            </p>
            <div className={styles.tags}>
              <span>Quê hương</span>
              <span>Ký ức tuổi thơ</span>
              <span>Bà Ngần</span>
              <span>Đàn bầu</span>
            </div>
          </div>
        </article>

        <section className={styles.challengeSection} aria-label="Thử thách trong game Tuổi thơ">
          <div className={styles.sectionHead}>
            <p className={styles.kicker}>Thử thách trong tập 1</p>
            <h3>Chơi qua ký ức, không chỉ xem lại ký ức</h3>
          </div>
          <div className={styles.challengeGrid}>
            {gameOneChallenges.map((challenge) => (
              <article key={challenge.title} className={styles.challengeCard}>
                <img src={challenge.image} alt={challenge.title} loading="lazy" />
                <div>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <article className={`${styles.featureGame} ${styles.lockedGame}`}>
          <div className={styles.mediaStack}>
            <div className={styles.lockedCover}>
              <img className={styles.cover} src="/game/coverkey/game2/1.png" alt="Rối nước chưa ra mắt" />
              <div className={styles.lockOverlay}>
                <span>Khóa</span>
                <strong>Chưa ra mắt</strong>
              </div>
            </div>
            <div className={styles.miniShots}>
              <img src="/game/coverkey/game2/2.png" alt="" loading="lazy" />
              <img src="/game/coverkey/game2/3.png" alt="" loading="lazy" />
              <img src="/game/coverkey/game2/5.png" alt="" loading="lazy" />
            </div>
          </div>

          <div className={styles.gameCopy}>
            <span className={styles.lockBadge}>Đang được viết</span>
            <p className={styles.kicker}>Game 2</p>
            <h3>Rối nước</h3>
            <strong>Án mạng làng Thạch Thất</strong>
            <p>
              Lan Anh và Tính đến làng đúng lúc Diễm bị đuổi vì sửa con rối Thất Tinh. Đêm đó,
              cụ Minh Đường biến mất khỏi căn phòng khóa trái. Từ sợi dây ròng rọc, con rối bị tháo dây
              và những hướng điều tra sai, người chơi dần bóc ra sự thật: đây không chỉ là vụ mất tích,
              mà là câu chuyện về di sản, gia đình và cách một ký ức của Tính trở lại qua con rối rùa.
            </p>
            <ul className={styles.clueList}>
              {gameTwoClues.map((clue) => (
                <li key={clue}>{clue}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WorldSection;
