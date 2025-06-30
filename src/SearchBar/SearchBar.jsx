import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Поиск книг..."
      />
      <button type="submit">Найти</button>
    </form>
  );
} 