import styles from './BookCard.module.css';
import { Link } from 'react-router-dom';
import CoolButton from '../CoolButton/CoolButton';

export default function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className={`${styles.card} ${styles.cardLink}`}>
      <img className={styles.cover} src={book.cover} alt={book.title} />
      <div className={styles.title}>{book.title}</div>
      <div className={styles.author}>{book.author}</div>
      <div className={styles.spacer}></div>
      <div className={styles.price}>{book.price} ₽</div>
      <CoolButton theme="pretty" size="small" onClick={e => { e.preventDefault(); /* обработка добавления в корзину */ }}>
        В корзину
      </CoolButton>
    </Link>
  );
} 