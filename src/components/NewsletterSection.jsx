import { useState } from 'react';
import styles from '../styles/NewsletterSection.module.css';

const posts = [
  {
    game: 'Tuổi thơ',
    title: 'Du Lạc: Tuổi thơ mở demo tại làng Thạch Bình',
    date: '18.06.2026',
    image: '/game/coverkey/game1/begin.png',
    excerpt: 'Bản demo đầu tiên đưa người chơi về quê hương của Tính, nơi cổng làng và nhật ký mở lại những mảnh ký ức đầu đời.',
    tag: 'Demo',
  },
  {
    game: 'Tuổi thơ',
    title: 'Ô ăn quan trở thành thử thách trí nhớ trong tập 1',
    date: '17.06.2026',
    image: '/game/coverkey/game1/oanquan.png',
    excerpt: 'Mini-game ô ăn quan không chỉ là trò chơi dân gian, mà còn là nhịp đếm giúp Tính lần theo ký ức tuổi nhỏ.',
    tag: 'Gameplay',
  },
  {
    game: 'Tuổi thơ',
    title: 'Bà Ngần và tuyến ký ức đàn bầu',
    date: '16.06.2026',
    image: '/game/coverkey/game1/dan_bau.jpg',
    excerpt: 'Một nhân vật bản địa giữ câu chuyện về tiếng đàn bầu, người mẹ của Tính và những điều gia đình chưa từng nói hết.',
    tag: 'Nhân vật',
  },
  {
    game: 'Tuổi thơ',
    title: 'Nhật ký du lạc: cách game ghi lại hành trình quê hương',
    date: '15.06.2026',
    image: '/game/coverkey/game1/diary.png',
    excerpt: 'Sổ tay trong game lưu nhiệm vụ, ký ức, vật phẩm và những ghi chú nhỏ của Lan Anh trên đường đưa Tính trở về.',
    tag: 'Devlog',
  },
  {
    game: 'Rối nước',
    title: 'Rối nước: án mạng làng Thạch Thất hé lộ teaser đầu tiên',
    date: '14.06.2026',
    image: '/game/coverkey/game2/1.png',
    excerpt: 'Tập game sắp ra mắt chuyển sang màu sắc trinh thám với cụ Minh Đường, Diễm và bộ rối Thất Tinh.',
    tag: 'Sắp ra mắt',
  },
  {
    game: 'Rối nước',
    title: 'Cơ chế điều tra bằng dây ròng rọc và manh mối con rối',
    date: '13.06.2026',
    image: '/game/coverkey/game2/3.png',
    excerpt: 'Người chơi sẽ lần theo hướng dây, căn phòng khóa trái và ký ức con rối rùa đang trở lại rất chậm trong Tính.',
    tag: 'Preview',
  },
];

function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const featured = posts[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={`${styles.inner} reveal`}>
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Tin tức Du Lạc</p>
            <h2>Nơi các cập nhật được dẫn ra</h2>
            <p>
              Demo page cho các bài đăng ngắn: cập nhật gameplay, nhân vật, devlog và thông tin sắp ra mắt
              của hai tập game `Tuổi thơ` và `Rối nước`.
            </p>
          </div>
        </div>

        <article className={styles.featured}>
          <img src={featured.image} alt={featured.title} />
          <div>
            <span>{featured.tag}</span>
            <p>{featured.game} · {featured.date}</p>
            <h3>{featured.title}</h3>
            <small>{featured.excerpt}</small>
            <a href="#newsletter">Đọc bài viết →</a>
          </div>
        </article>

        <div className={styles.grid}>
          {posts.slice(1).map((post) => (
            <article key={post.title} className={styles.card}>
              <img src={post.image} alt={post.title} loading="lazy" />
              <div>
                <span>{post.tag}</span>
                <p>{post.game} · {post.date}</p>
                <h3>{post.title}</h3>
                <small>{post.excerpt}</small>
                <a href="#newsletter">Đọc thêm →</a>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.followBox}>
          <div>
            <p className={styles.eyebrow}>Theo dõi</p>
            <h3>Nhận tin khi có demo, devlog và teaser mới</h3>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="email" placeholder="Email của bạn" aria-label="Email" required />
            <button type="submit">Theo dõi</button>
          </form>
          {submitted && <span className={styles.success}>Đã đăng ký!</span>}

          <div className={styles.socials}>
            <a href="#newsletter">Facebook</a>
            <a href="#newsletter">YouTube</a>
            <a href="#newsletter">Discord</a>
            <a href="#newsletter">Steam</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default NewsletterSection;
