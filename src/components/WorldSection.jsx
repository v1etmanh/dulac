import styles from '../styles/WorldSection.module.css';

const locations = [
  {
    place: 'Hà Nội',
    title: 'Múa rối nước & Tiếng trống hội',
    description: 'Nơi tiếng trống đánh thức Tính. Mini-game Ô Ăn Quan trên sân đình.',
  },
  {
    place: 'Hội An',
    title: 'Phố cổ & Hoa đăng',
    description: 'Mái ngói rêu phong, hò sông nước, đêm thả đèn hoa đăng.',
  },
  {
    place: 'Huế',
    title: 'Nhã nhạc & Cung đình',
    description: 'Nhã nhạc cung đình. Mini-game đàn bầu & lễ hội cung đình.',
  },
  {
    place: '???',
    title: 'Sắp được tiết lộ',
    description: 'Một vùng đất mới còn nằm sau lớp sương ký ức.',
    locked: true,
  },
];

function WorldSection() {
  return (
    <section id="world" className={styles.world}>
      <div className={`${styles.inner} reveal`}>
        <h2 className="section-title">Những vùng đất bạn sẽ khám phá</h2>
        <div className="gold-divider" />
        <div className={styles.grid}>
          {locations.map((location) => (
            <article key={location.place} className={`${styles.card} ${location.locked ? styles.locked : ''}`}>
              <div className={styles.imagePlaceholder}>{location.locked ? '🔒' : ''}</div>
              <p>{location.place}</p>
              <h3>{location.title}</h3>
              <span>{location.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorldSection;
