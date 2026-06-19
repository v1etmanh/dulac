import { useState } from 'react';
import styles from '../styles/NewsletterSection.module.css';

function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className={styles.newsletter}>
      <div className={`${styles.inner} reveal`}>
        <p className={styles.eyebrow}>✦ SẮP RA MẮT ✦</p>
        <h2>Đừng bỏ lỡ ngày Du Lạc ra mắt</h2>
        <p>
          Nhận thông báo ngay khi có tin tức mới, bản demo, và ưu đãi đặt hàng trước.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder="Email của bạn" aria-label="Email" required />
          <button type="submit">Theo dõi</button>
        </form>
        {submitted && <span className={styles.success}>✅ Đã đăng ký!</span>}

        <div className={styles.socials}>
          <a href="#newsletter">Facebook</a>
          <a href="#newsletter">YouTube</a>
          <a href="#newsletter">Discord</a>
          <a href="#newsletter">Steam</a>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
