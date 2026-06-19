import styles from '../styles/StorySection.module.css';

const chapters = [
  {
    id: 'chapter-1',
    number: 'CHƯƠNG I',
    title: 'Đôi bạn thanh xuân',
    period: 'Tuổi thơ, tuổi trẻ và những chuyến đi trước hôn nhân',
    cover: 'chuong1_1.png',
    feature: 'chuong1_4.png',
    images: ['chuong1_2.png', 'chuong1_3.png', 'chuong1_5.png', 'chuong1_6.png'],
    summary:
      'Tính và Lan Anh lớn lên bên nhau, cùng nuôi một tình yêu cháy bỏng với văn hóa Việt. Những chuyến đi qua phố cổ, sông nước, lễ hội và làng nghề khiến tình bạn dần thành tình yêu.',
    beats: ['Thanh mai trúc mã', 'Khám phá văn hóa', 'Tình yêu từ ký ức chung'],
  },
  {
    id: 'chapter-2',
    number: 'CHƯƠNG II',
    title: 'Áp lực & rạn nứt',
    period: 'Khi những chuyến đi dừng lại và đời sống gia đình bắt đầu',
    cover: 'chuong2_1.png',
    feature: 'chuong2_3.png',
    images: ['chuong2_2.png', 'chuong2_4.png', 'chuong2_5.png', 'chuong2_6.png'],
    summary:
      'Tuổi 30 đưa họ về với mái ấm, nhưng hiếm muộn, công việc và tổn thương tích tụ khiến hôn nhân rạn nứt. Sau những cãi vã, họ nhận ra điều giữ mình lại chính là nhau.',
    beats: ['Áp lực hôn nhân', 'Nỗi đau hiếm muộn', 'Quyết định nhận con nuôi'],
  },
  {
    id: 'chapter-3',
    number: 'CHƯƠNG III',
    title: 'Biến cố & ba năm đứt gãy',
    period: 'Tai nạn, hôn mê và âm thanh đánh thức não bộ',
    cover: 'chuong3_1.png',
    feature: 'chuong3_6.png',
    images: ['chuong3_2.png', 'chuong3_3.png', 'chuong3_4.png', 'chuong3_5.png', 'chuong3_7.png', 'chuong3_8.png'],
    summary:
      'Trước ngày hẹn, Lan Anh nhập viện vì tai nạn lao động. Tính lao đến bên vợ và bị xe tải tông trúng. Ba năm sống thực vật kết thúc khi tiếng trống hội, tiếng nước và múa rối trong một đoạn video Hà Nội chạm vào tầng ký ức sâu nhất.',
    beats: ['Tai nạn kép', 'Ba năm chăm sóc', 'Tỉnh lại với trí nhớ 4 tuổi'],
  },
  {
    id: 'chapter-4',
    number: 'CHƯƠNG IV',
    title: 'Hành trình bắt đầu',
    period: 'Lan Anh dắt Tính ngược dòng ký ức',
    cover: 'chuong4_1.png',
    feature: 'chuong4_1.png',
    images: ['chuong1_7.png', 'chuong2_2.png', 'chuong3_10.png', 'chuong4_1.png'],
    summary:
      'Lan Anh tin ký ức của Tính không mất, chúng chỉ đang bị khóa lại. Cô quyết định đưa người chồng mang tâm trí một đứa trẻ trở về những vùng đất cũ, bắt đầu từ ngôi làng cổ Hà Nội đã đánh thức anh.',
    beats: ['Văn hóa là chìa khóa', 'Hà Nội là trạm đầu tiên', 'Du Lạc chính thức mở ra'],
  },
];

function StorySection() {
  return (
    <section id="story" className={styles.story}>
      <div className={`${styles.inner} reveal`}>
        <section className={styles.storyHero}>
          <div className={styles.poster}>
            <img src="/story_map/chuong1_1.png" alt="Tính và Lan Anh trong ký ức tuổi trẻ" />
            <div className={styles.posterText}>
              <span>COMMON BACKGROUND</span>
              <strong>DU LẠC</strong>
            </div>
          </div>

          <div className={styles.heroInfo}>
            <div className={styles.preview}>
              <img src="/story_map/chuong3_6.png" alt="Biến cố đánh thức hành trình Du Lạc" />
            </div>
            <p className={styles.label}>CỐT TRUYỆN</p>
            <h2>Câu chuyện về ký ức, văn hóa và một lời hứa chưa kịp trọn vẹn</h2>
            <p>
              Du Lạc bắt đầu từ tình yêu của Tính và Lan Anh với những miền văn hóa Việt, rồi rẽ sang
              một biến cố khiến ký ức bị khóa chặt. Hành trình trong game là nỗ lực đưa một con người
              trở về với chính mình bằng âm thanh, phong tục và những kỷ niệm từng thuộc về cả hai.
            </p>
            <div className={styles.chapterPills}>
              {chapters.map((chapter) => (
                <a key={chapter.id} href={`#${chapter.id}`}>{chapter.number.replace('CHƯƠNG ', 'Ch.')}</a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overview} aria-label="Tóm tắt cốt truyện">
          <p className={styles.label}>DU LẠC LÀ GÌ?</p>
          <h3>Du hành để nhớ lại, lạc đường để tìm thấy nhau.</h3>
          <p>
            Cốt truyện được chia thành 4 chương: tuổi trẻ và tình yêu văn hóa, áp lực gia đình,
            biến cố đứt gãy, rồi hành trình Lan Anh đưa Tính trở lại những địa điểm cũ để đánh thức ký ức.
          </p>
        </section>

        <div className={styles.chapterList}>
          {chapters.map((chapter, index) => (
            <article key={chapter.id} id={chapter.id} className={`${styles.chapter} reveal`}>
              <div className={styles.chapterMedia}>
                <img className={styles.featureImage} src={`/story_map/${chapter.feature}`} alt={`${chapter.title} minh họa`} />
                <div className={styles.thumbGrid}>
                  {chapter.images.map((image) => (
                    <img key={image} src={`/story_map/${image}`} alt="" loading="lazy" />
                  ))}
                </div>
              </div>

              <div className={styles.chapterCopy}>
                <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                <p className={styles.label}>{chapter.number}</p>
                <h3>{chapter.title}</h3>
                <small>{chapter.period}</small>
                <p>{chapter.summary}</p>
                <div className={styles.beatGrid}>
                  {chapter.beats.map((beat) => (
                    <span key={beat}>{beat}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StorySection;
