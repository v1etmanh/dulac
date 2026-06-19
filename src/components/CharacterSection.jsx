import { useState } from 'react';
import styles from '../styles/CharacterSection.module.css';

const characters = {
  lananh: {
    tab: 'Lan Anh',
    name: 'Lan Anh',
    role: 'NHÂN VẬT CHÍNH',
    sticker: 'Nhà báo online',
    sub: 'Nhà báo online · 33 tuổi · Hà Nội',
    bio: 'Lan Anh là người phụ nữ lớn lên cùng Tính giữa những sân đình, tiếng trống hội và những trang ghi chép về văn hóa Việt. Sau biến cố khiến người chồng mất phần ký ức trưởng thành, cô chọn đi cùng anh qua từng miền đất, kiên nhẫn dùng câu chuyện, âm nhạc và lễ hội để mở lại những cánh cửa đã ngủ quên.',
    traits: [
      ['Kiên nhẫn', 'warning'],
      ['Yêu văn hóa', 'success'],
      ['Nhà báo', 'info'],
      ['Phục hồi chấn thương', 'neutral'],
    ],
    quote: 'Ký ức không mất, chúng chỉ đang ngủ ở đâu đó. Tôi sẽ đánh thức anh ấy.',
  },
  tinh: {
    tab: 'Tính',
    name: 'Tính',
    role: 'NGƯỜI GIỮ KÝ ỨC',
    sticker: 'Thân quen xa lạ',
    sub: 'Nghệ sĩ bản năng · 33 tuổi · ký ức 4 tuổi',
    bio: 'Tính thức dậy sau ba năm hôn mê với thân thể của một người đàn ông trưởng thành và tâm trí còn mắc lại ở tuổi thơ. Những âm thanh dân gian, nhịp đàn và trò chơi cũ thỉnh thoảng khiến anh khựng lại, như thể một phần rất sâu trong anh vẫn biết đường về.',
    traits: [
      ['Ngây thơ', 'warning'],
      ['Bản năng âm nhạc', 'success'],
      ['Không ký ức', 'neutral'],
      ['Thể xác 33 tuổi', 'info'],
    ],
    quote: 'Cái này... quen lắm. Nhưng tao không nhớ.',
  },
  npc: {
    tab: 'NPC...',
    name: 'Những người dẫn đường',
    role: 'NPC VĂN HÓA',
    sticker: 'Ký ức tập thể',
    sub: 'Nghệ nhân · Người kể chuyện · Bạn đường',
    bio: 'Trên đường đi, Lan Anh và Tính gặp những nghệ nhân, người bán hàng rong, em bé làng nghề và các nhân vật giữ một mảnh văn hóa riêng. Mỗi người mở ra một nhiệm vụ nhỏ, một trò chơi dân gian hoặc một lớp ký ức mới.',
    traits: [
      ['Dẫn đường', 'success'],
      ['Bí ẩn', 'neutral'],
      ['Làng nghề', 'info'],
      ['Ký ức dân gian', 'warning'],
    ],
    quote: 'Có chuyện phải nghe bằng tai, có chuyện phải nhớ bằng cả bàn tay.',
  },
};

function CharacterSection() {
  const [selectedChar, setSelectedChar] = useState('lananh');
  const character = characters[selectedChar];

  return (
    <section id="characters" className={styles.characters}>
      <div className={`${styles.inner} reveal`}>
        <h2 className="section-title">Những người du lạc</h2>
        <div className="gold-divider" />

        <div className={styles.tabs} role="tablist" aria-label="Nhân vật">
          {Object.entries(characters).map(([id, item]) => (
            <button
              key={id}
              type="button"
              className={selectedChar === id ? styles.active : ''}
              onClick={() => setSelectedChar(id)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <article className={styles.panel}>
          <div className={styles.left}>
            <div className={`${styles.portrait} ${selectedChar === 'tinh' ? styles.fragment : ''}`} />
            <div className={styles.sticker}>
              <strong>{character.name}</strong>
              <span>{character.sticker}</span>
            </div>
          </div>
          <div className={styles.right}>
            <p className={styles.role}>{character.role}</p>
            <h3>{character.name}</h3>
            <p className={styles.sub}>{character.sub}</p>
            <p className={styles.bio}>{character.bio}</p>
            <div className={styles.traits}>
              {character.traits.map(([trait, tone]) => (
                <span key={trait} className={styles[tone]}>{trait}</span>
              ))}
            </div>
            <blockquote>{character.quote}</blockquote>
          </div>
        </article>

        <div className={styles.dots} aria-hidden="true">
          <span className={selectedChar === 'lananh' ? styles.dotActive : ''} />
          <span className={selectedChar === 'tinh' ? styles.dotActive : ''} />
        </div>
      </div>
    </section>
  );
}

export default CharacterSection;
