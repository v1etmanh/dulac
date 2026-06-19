import styles from '../styles/ShopSection.module.css';

const products = [
  {
    name: 'Artbook kỹ thuật số',
    price: '59.000₫',
    desc: 'Hành trình sáng tác mỹ thuật pixel art văn hóa Việt — 80 trang.',
  },
  {
    name: 'Bộ sticker Du Lạc',
    price: '89.000₫',
    desc: '20 sticker in holo: Lan Anh, Tính, rối nước, đèn lồng, ô ăn quan.',
  },
  {
    name: 'OST Du Lạc — Vinyl',
    price: '490.000₫',
    desc: 'Nhạc nền đàn bầu, trống hội, tiếng nước — phiên bản vinyl giới hạn.',
    limited: true,
  },
];

function ShopSection() {
  return (
    <section id="shop" className={styles.shop}>
      <div className={`${styles.inner} reveal`}>
        <h2 className="section-title">Mang Du Lạc về nhà</h2>
        <div className="gold-divider" />
        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.name} className={styles.card}>
              {product.limited && <span className={styles.limited}>LIMITED</span>}
              <div className={styles.imagePlaceholder} />
              <div className={styles.cardHeader}>
                <h3>{product.name}</h3>
                <span>{product.price}</span>
              </div>
              <p>{product.desc}</p>
              <button type="button">Mua ngay</button>
            </article>
          ))}
        </div>
        <a className={styles.link} href="#shop">Xem toàn bộ cửa hàng →</a>
      </div>
    </section>
  );
}

export default ShopSection;
