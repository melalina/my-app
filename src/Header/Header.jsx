import SearchBar from '../SearchBar/SearchBar';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <div>ЧИТАЙ ГОРОД</div>
      <SearchBar />
      <div>
        <button>Корзина</button>
        <button>Профиль</button>
        <button>Войти</button>
      </div>
    </header>
  );
} 