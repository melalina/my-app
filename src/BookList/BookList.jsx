import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.css';

export default function BookList() {
  const books = [
    {
      id: 1,
      title: 'Название книги',
      author: 'Автор книги',
      price: 'Цена книги',
      image: '',
      genre: '',
      description: 'Описание книги'
    }
  ];

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
} 