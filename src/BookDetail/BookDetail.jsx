import styles from './BookDetail.module.css';
import { useParams } from 'react-router-dom';
import CoolButton from '../CoolButton/CoolButton';

const books = [
  {
    id: 1,
    cover: 'https://cdn1.ozone.ru/s3/multimedia-f/c600/6090731715.jpg',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 499,
    description: 'Роман о мистике, любви и сатире на советское общество. Один из величайших произведений XX века.'
  },
  {
    id: 2,
    cover: 'https://avatars.mds.yandex.net/i?id=77372f6916865f6704f2cc7f14f8998b_l-5283746-images-thumbs&n=13',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    price: 399,
    description: 'Психологический роман о борьбе добра и зла в душе человека.'
  },
  {
    id: 3,
    cover: 'https://www.podpisnie.ru/upload/iblock/968/4522cuux0o0xerjc2ximv69ddqe7rk7l.jpg',
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 599,
    description: 'Эпопея о судьбах людей на фоне исторических событий.'
  },
  {
    id: 4,
    cover: 'https://avatars.mds.yandex.net/i?id=6b1316d743eb25b278e1b4025013d2c8_l-12738621-images-thumbs&n=13',
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    price: 459,
    description: 'Трагическая история любви и поиска счастья.'
  },
];

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find(b => String(b.id) === String(id));

  if (!book) {
    return <div className={styles.detail}><div className={styles.info}>Книга не найдена</div></div>;
  }

  return (
    <div className={styles.detail}>
      <img className={styles.cover} src={book.cover} alt={book.title} />
      <div className={styles.info}>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.author}>{book.author}</div>
        <div className={styles.price}>{book.price} ₽</div>
        <CoolButton className={styles.button} theme="pretty">В корзину</CoolButton>
        <div className={styles.description}>{book.description}</div>
      </div>
    </div>
  );
} 