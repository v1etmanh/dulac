import { useState } from 'react';
import styles from '../styles/CharacterSection.module.css';

const characters = {
  lananh: {
    tab: 'Lan Anh',
    name: 'Lan Anh',
    image: '/game/character/lan_anh.png',
    role: 'Người dẫn đường',
    meta: 'Nhà báo online · 33 tuổi · Hà Nội',
    headline: 'Người chọn ở lại, chăm sóc và dẫn Tính trở về.',
    bio:
      'Lan Anh lớn lên cùng Tính qua những chuyến đi khám phá văn hóa Việt. Sau tai nạn, cô vừa phục hồi đôi chân, vừa làm nhà báo online tại nhà để chăm sóc người chồng sống thực vật suốt 3 năm. Khi Tính tỉnh lại với trí nhớ như một đứa trẻ 4 tuổi, Lan Anh tin ký ức của anh không mất, chỉ đang bị khóa ở đâu đó.',
    motive:
      'Cô quyết định đưa Tính quay lại những vùng đất cũ, dùng âm thanh, phong tục, trò chơi dân gian và kỷ niệm chung để đánh thức phần linh hồn đang ngủ say của anh.',
    traits: ['Kiên nhẫn', 'Yêu văn hóa', 'Không buông bỏ', 'Nhà báo online'],
    quote: 'Ký ức không mất, chúng chỉ đang ngủ ở đâu đó. Tôi sẽ đánh thức anh ấy.',
  },
  tinh: {
    tab: 'Tính',
    name: 'Tính',
    image: '/game/character/tinh.png',
    role: 'Người trở về',
    meta: '33 tuổi · tỉnh lại với trí nhớ 4 tuổi',
    headline: 'Một người đàn ông trưởng thành mang tâm trí bị đứt gãy.',
    bio:
      'Tính từng là người bạn đồng hành của Lan Anh trên mọi chuyến đi văn hóa. Trước ngày cả hai định xin con nuôi, anh gặp tai nạn giao thông nghiêm trọng khi đang lao đến bệnh viện vì Lan Anh. Sau 3 năm sống thực vật, anh tỉnh lại nhờ âm thanh của tiếng nước, tiếng trống hội và múa rối nước trong một đoạn video về làng cổ Hà Nội.',
    motive:
      'Tính không còn nhớ mình từng là ai, nhưng cơ thể và tầng sâu ký ức vẫn phản ứng với âm nhạc, trò chơi dân gian và những địa điểm cũ.',
    traits: ['Ngây thơ', 'Bản năng âm nhạc', 'Ký ức bị khóa', 'Thân xác 33 tuổi'],
    quote: 'Cái này... quen lắm. Nhưng tao không nhớ.',
  },
};

const milestones = [
  {
    label: 'Tuổi thơ',
    text: 'Lan Anh và Tính lớn lên bên nhau, cùng yêu những chuyến đi và văn hóa Việt.',
  },
  {
    label: 'Tuổi 30',
    text: 'Cả hai dừng chân lập gia đình, đối mặt áp lực hiếm muộn và quyết định xin con nuôi.',
  },
  {
    label: 'Biến cố',
    text: 'Tai nạn kép khiến Lan Anh bị thương, Tính rơi vào trạng thái sống thực vật suốt 3 năm.',
  },
  {
    label: 'Du Lạc',
    text: 'Lan Anh dắt Tính trở lại những vùng đất cũ để dùng văn hóa mở khóa ký ức.',
  },
];

function CharacterSection() {
  const [selectedChar, setSelectedChar] = useState('lananh');
  const character = characters[selectedChar];

  return (
    <section id="characters" className={styles.characters}>
      <div className={`${styles.inner} reveal`}>
        <section className={styles.heroPanel}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Nhân vật</p>
            <h2>Hai con người, một hành trình tìm lại ký ức</h2>
            <p>
              Du Lạc không chỉ kể về những vùng đất văn hóa Việt, mà còn kể về Lan Anh và Tính:
              một người giữ lời hứa, một người đang học cách trở về với chính mình.
            </p>
          </div>

          <div className={styles.duoStage} aria-label="Lan Anh và Tính">
            <img src={characters.lananh.image} alt="Lan Anh sprite" />
            <img src={characters.tinh.image} alt="Tính sprite" />
          </div>
        </section>

        <div className={styles.selector} role="tablist" aria-label="Chọn nhân vật">
          {Object.entries(characters).map(([id, item]) => (
            <button
              key={id}
              type="button"
              className={selectedChar === id ? styles.active : ''}
              onClick={() => setSelectedChar(id)}
            >
              <img src={item.image} alt="" />
              <span>{item.name}</span>
              <small>{item.role}</small>
            </button>
          ))}
        </div>

        <article className={styles.profile}>
          <div className={styles.portraitFrame}>
            <div className={styles.portraitGlow} />
            <img src={character.image} alt={character.name} />
          </div>

          <div className={styles.profileCopy}>
            <p className={styles.kicker}>{character.role}</p>
            <h3>{character.name}</h3>
            <span className={styles.meta}>{character.meta}</span>
            <strong>{character.headline}</strong>
            <p>{character.bio}</p>
            <p>{character.motive}</p>

            <div className={styles.traits}>
              {character.traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>

            <blockquote>{character.quote}</blockquote>
          </div>
        </article>

        <section className={styles.relationship}>
          <div>
            <p className={styles.kicker}>Mạch quan hệ</p>
            <h3>Từ thanh mai trúc mã đến người dẫn đường</h3>
          </div>
          <div className={styles.milestones}>
            {milestones.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default CharacterSection;
