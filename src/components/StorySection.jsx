import styles from '../styles/StorySection.module.css';

const cards = [
  {
    chapter: 'CHƯƠNG I',
    title: 'Đôi bạn thanh xuân',
    description: 'Tính & Lan Anh lớn lên cùng nhau, khám phá văn hóa Việt từ thuở ấu thơ.',
  },
  {
    chapter: 'CHƯƠNG II',
    title: 'Biến cố & Đứt gãy',
    description: 'Tai nạn liên tiếp, 3 năm hôn mê. Tính tỉnh lại với trí nhớ 4 tuổi.',
  },
  {
    chapter: 'CHƯƠNG III',
    title: 'Hành trình về ký ức',
    description: 'Lan Anh dắt tay người chồng ngây ngô, đi ngược dòng văn hóa tìm lại anh.',
  },
];

function StorySection() {
  return (
    <section id="story" className={styles.story}>
      <div className={`${styles.inner} reveal`}>
        <h2 className="section-title">Hành trình đánh thức ký ức</h2>
        <div className="gold-divider" />
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <article key={card.chapter} className={`${styles.card} reveal`} style={{ transitionDelay: `${index * 0.15}s` }}>
              <p>{card.chapter}</p>
              <h3>{card.title}</h3>
              <div className={styles.imagePlaceholder} />
              <span>{card.description}</span>
            </article>
          ))}
        </div>
        <a className={styles.link} href="#characters">Đọc đầy đủ cốt truyện →</a>
      </div>
    </section>
  );
}

export default StorySection;
