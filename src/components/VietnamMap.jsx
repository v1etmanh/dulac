import styles from '../styles/VietnamMap.module.css';

const LOCATIONS = [
  { id: 'hanoi', label: 'Hà Nội', svgX: 210, svgY: 148, visited: true, lore: 'Tiếng trống hội gọi lại ký ức đầu tiên.' },
  { id: 'hoian', label: 'Hội An', svgX: 235, svgY: 295, visited: true, lore: 'Đêm hoa đăng trôi qua những lời hứa cũ.' },
  { id: 'hue', label: 'Huế', svgX: 230, svgY: 265, visited: true, lore: 'Nhịp nhã nhạc giữ một mảnh tên người.' },
  { id: 'hcmc', label: 'Sài Gòn', svgX: 215, svgY: 390, visited: false, lore: 'Nơi hành trình tạm khép lại.' },
  { id: 'hagiang', label: 'Hà Giang', svgX: 195, svgY: 118, visited: false, lore: 'Đá núi còn giữ câu chuyện chưa kể.' },
];

function VietnamMap() {
  return (
    <div className={styles.mapWrap}>
      <p className={styles.heading}>Hành trình đã qua</p>
      <p className={styles.subheading}>
        Những điểm sáng là nơi Lan Anh và Tính đã đặt chân — màu xám là nơi chuyến đi dừng lại.
      </p>

      <div className={styles.stage}>
        <svg viewBox="0 0 420 520" className={styles.map} role="img" aria-label="Bản đồ Việt Nam">
          <path
            className={styles.land}
            d="M194 84c13 8 23 16 30 27l-12 28 24 28-17 36 29 42-13 43 24 46-22 48-13 57-35-18 18-56-19-44 21-45-16-37 10-48-21-42 9-34-14-29 17-28Z"
          />
          <path
            className={styles.spine}
            d="M196 94c22 41 23 73 9 96-13 22 10 46 22 72 13 27-11 47-6 75 4 26 5 55-13 87"
          />
        </svg>

        {LOCATIONS.map((location) => (
          <button
            key={location.id}
            type="button"
            className={`${styles.dot} ${location.visited ? styles.visited : styles.unvisited}`}
            style={{ left: `${(location.svgX / 420) * 100}%`, top: `${(location.svgY / 520) * 100}%` }}
            aria-label={location.label}
          >
            <span className={styles.pulse} />
            <span className={styles.core} />
            <span className={styles.label}>{location.label}</span>
            {!location.visited && <span className={styles.stopped}>Chuyến đi đã dừng</span>}
            <span className={styles.tooltip}>
              <strong>{location.label}</strong>
              {location.lore}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default VietnamMap;
