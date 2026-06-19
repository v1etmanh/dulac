import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const navLinks = [
  { href: '#home', label: 'Trang chủ' },
  { href: '#story', label: 'Câu chuyện' },
  { href: '#characters', label: 'Nhân vật' },
  { href: '#world', label: 'Thế giới game' },
  { href: '#shop', label: 'Cửa hàng' },
  { href: '#newsletter', label: 'Tin tức' },
];

function LotusIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className={styles.lotus}>
      <path d="M14 22c-4-3.2-5.8-6.9-5.4-11.1 3.5 1.6 5.3 4.8 5.4 9.6.1-4.8 1.9-8 5.4-9.6.4 4.2-1.4 7.9-5.4 11.1Z" />
      <path d="M14 20.5c-3.5-1.5-6-4-7.5-7.4 3.9-.3 6.3 2.3 7.5 7.4Zm0 0c3.5-1.5 6-4 7.5-7.4-3.9-.3-6.3 2.3-7.5 7.4Z" />
      <path d="M14 17.8c-1.5-3.7-1.2-7 1-9.9 2 3.1 1.7 6.4-1 9.9Z" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.brand} href="#home" aria-label="Du Lạc">
        <span className={styles.logoBox}><LotusIcon /></span>
        <span>DU LẠC</span>
      </a>

      <button
        className={styles.menuButton}
        type="button"
        aria-label="Mở menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Điều hướng chính">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className={styles.cta} href="#newsletter">Theo dõi ra mắt →</a>
    </header>
  );
}

export default Navbar;
