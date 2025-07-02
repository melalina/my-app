import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import UserProfile from '../UserProfile/UserProfile';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Читай-город
        </Link>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <nav className={styles.menu}>
          <Link to="/cart" className={styles.menuLink}>
            <img src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png" alt="Корзина" className={styles.iconImg} /> Корзина
          </Link>
          <Link to="/profile" className={styles.menuLink}>
            <img src="https://img.icons8.com/ios-glyphs/30/user--v1.png" alt="Профиль" className={styles.iconImg} /> Профиль
          </Link>
          <Link to="/register" className={styles.menuLink}>
            <img src="https://img.icons8.com/material-sharp/24/edit-user-male.png" alt="Регистрация" className={styles.iconImgSmall} /> Регистрация
          </Link>
        </nav>
      </div>
    </header>
  );
} 