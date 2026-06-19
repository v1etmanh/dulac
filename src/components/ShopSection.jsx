import styles from '../styles/ShopSection.module.css';

const products = [
  {
    name: 'Đàn bầu mini ký ức',
    category: 'Nhạc cụ trưng bày',
    price: '349.000₫',
    oldPrice: '420.000₫',
    image: '/game/buy/danbau.png',
    rating: 4.9,
    reviews: 128,
    sold: '560+ đã bán',
    badge: 'Bán chạy',
    desc: 'Mô hình đàn bầu gỗ lấy cảm hứng từ bà Ngần và tuyến ký ức âm nhạc trong Du Lạc: Tuổi thơ.',
    review: 'Đóng gói rất kỹ, màu gỗ đẹp và đặt lên bàn làm việc cực hợp.',
  },
  {
    name: 'Bộ ô ăn quan gỗ',
    category: 'Board game dân gian',
    price: '289.000₫',
    oldPrice: '360.000₫',
    image: '/game/buy/oanquan.png',
    rating: 4.8,
    reviews: 94,
    sold: '430+ đã bán',
    badge: 'Quà tặng',
    desc: 'Bàn ô ăn quan gỗ kèm quân đá/hạt, mô phỏng thử thách tuổi thơ của Tính ở sân làng.',
    review: 'Chơi được thật, không chỉ để trưng. Mấy viên đá nhìn rất có hồn.',
  },
  {
    name: 'Tượng rối nước chú Tễu',
    category: 'Sưu tầm văn hóa',
    price: '259.000₫',
    oldPrice: '310.000₫',
    image: '/game/buy/roinc.png',
    rating: 4.7,
    reviews: 76,
    sold: '300+ đã bán',
    badge: 'Mới',
    desc: 'Tượng rối nước sơn bóng, mở màn cho tuyến game Rối nước và câu chuyện làng Thạch Thất.',
    review: 'Nhỏ gọn nhưng biểu cảm rất vui, đúng chất rối nước truyền thống.',
  },
];

function stars(score) {
  const rounded = Math.round(score);
  return '★★★★★'.slice(0, rounded) + '☆☆☆☆☆'.slice(0, 5 - rounded);
}

function ShopSection() {
  return (
    <section id="shop" className={styles.shop}>
      <div className={`${styles.inner} reveal`}>
        <div className={styles.shopHero}>
          <div>
            <p className={styles.kicker}>Cửa hàng Du Lạc</p>
            <h2>Mang một mảnh ký ức Việt về nhà</h2>
            <p>
              Các vật phẩm lấy cảm hứng từ thử thách, âm nhạc và rối nước trong Du Lạc. Trang này là
              giao diện trưng bày thương mại điện tử, chưa kết nối thanh toán.
            </p>
          </div>
          <div className={styles.heroDeal}>
            <span>Ưu đãi mở bán</span>
            <strong>Giảm đến 20%</strong>
            <small>Miễn phí vận chuyển cho đơn từ 499.000₫</small>
          </div>
        </div>

        <div className={styles.toolbar}>
          <span>3 sản phẩm</span>
          <div>
            <button type="button">Bán chạy</button>
            <button type="button">Giá tốt</button>
            <button type="button">Đánh giá cao</button>
          </div>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span>{product.badge}</span>
              </div>

              <div className={styles.content}>
                <p className={styles.category}>{product.category}</p>
                <h3>{product.name}</h3>
                <p className={styles.desc}>{product.desc}</p>

                <div className={styles.rating}>
                  <span>{stars(product.rating)}</span>
                  <strong>{product.rating}</strong>
                  <small>({product.reviews} đánh giá)</small>
                </div>

                <div className={styles.priceRow}>
                  <strong>{product.price}</strong>
                  <del>{product.oldPrice}</del>
                </div>

                <div className={styles.meta}>
                  <span>{product.sold}</span>
                  <span>Còn hàng</span>
                  <span>Đổi trả 7 ngày</span>
                </div>

                <blockquote>{product.review}</blockquote>

                <div className={styles.actions}>
                  <button type="button">Thêm vào giỏ</button>
                  <button type="button">Mua ngay</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.reviewPanel} aria-label="Đánh giá cửa hàng">
          <div>
            <p className={styles.kicker}>Đánh giá cửa hàng</p>
            <h3>4.8/5 từ cộng đồng yêu văn hóa Việt</h3>
          </div>
          <p>
            “Sản phẩm có cảm giác như một phần của game bước ra ngoài đời: gần gũi, có câu chuyện,
            và đủ đẹp để trưng trong góc làm việc.”
          </p>
        </section>
      </div>
    </section>
  );
}

export default ShopSection;
