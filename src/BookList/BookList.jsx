import styles from './BookList.module.css';
import BookCard from '../BookCard/BookCard';

const books = [
  {
    id: 1,
    cover: 'https://cdn1.ozone.ru/s3/multimedia-f/c600/6090731715.jpg',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    price: 499,
  },
  {
    id: 2,
    cover: 'https://avatars.mds.yandex.net/i?id=77372f6916865f6704f2cc7f14f8998b_l-5283746-images-thumbs&n=13',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    price: 399,
  },
  {
    id: 3,
    cover: 'https://www.podpisnie.ru/upload/iblock/968/4522cuux0o0xerjc2ximv69ddqe7rk7l.jpg',
    title: 'Война и мир',
    author: 'Лев Толстой',
    price: 599,
  },
  {
    id: 4,
    cover: 'https://avatars.mds.yandex.net/i?id=6b1316d743eb25b278e1b4025013d2c8_l-12738621-images-thumbs&n=13',
    title: 'Анна Каренина',
    author: 'Лев Толстой',
    price: 459,
  },
];

export default function BookList() {
  return (
    <div className={styles.list}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
} 