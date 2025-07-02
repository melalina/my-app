import styles from './SidebarFilter.module.css';
import CoolButton from '../CoolButton/CoolButton';

const genres = [
  'Книги',
  'Художественная литература',
  'Young Adult',
  'Учебная литература',
  'Психология',
  'Бизнес-книги',
];

const activeGenre = 'Книги';

export default function SidebarFilter() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.title}>Каталог</div>
      <ul className={styles.genreList}>
        {genres.map((genre) => (
          <li key={genre} className={styles.genreItem}>
            <span
              className={
                genre === activeGenre
                  ? `${styles.genreLink} ${styles.active}`
                  : styles.genreLink
              }
            >
              {genre}
            </span>
          </li>
        ))}
      </ul>
      <hr className={styles.divider} />
      <CoolButton theme="default" size="small" className={styles.expand}>
        Развернуть все категории <span>▼</span>
      </CoolButton>
    </aside>
  );
} 