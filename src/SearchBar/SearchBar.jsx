import styles from './SearchBar.module.css';
import CoolButton from '../CoolButton/CoolButton';

export default function SearchBar() {
  return (
    <form className={styles.searchForm}>
      <input
        type="text"
        placeholder="Найти..."
        className={styles.searchInput}
      />
      <CoolButton theme="default" size="medium" type="submit">
        <img src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="Поиск" className={styles.searchIcon} />
      </CoolButton>
    </form>
  );
} 