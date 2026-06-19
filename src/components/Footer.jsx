import styles from '../styles/Footer.module.css';

const columns = [
  ['Game', 'Câu chuyện', 'Nhân vật', 'Thế giới game'],
  ['Cộng đồng', 'Discord', 'YouTube', 'Press Kit'],
  ['Mua game', 'Steam', 'Nintendo', 'Mobile'],
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h2>DU LẠC</h2>
          <p>Game phiêu lưu văn hóa Việt — 2025</p>
        </div>
        {columns.map(([title, ...links]) => (
          <div key={title}>
            <h3>{title}</h3>
            {links.map((link) => {
              const route = {
                'Câu chuyện': '#story',
                'Nhân vật': '#characters',
                'Thế giới game': '#world',
                Steam: '#shop',
                Nintendo: '#shop',
                Mobile: '#shop',
              }[link] || '#newsletter';

              return <a key={link} href={route}>{link}</a>;
            })}
          </div>
        ))}
      </div>
      <div className={styles.bottom}>Made with ♥ for Vietnamese culture</div>
    </footer>
  );
}

export default Footer;
