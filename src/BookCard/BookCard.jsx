import styles from './BookCard.module.css';

export default function BookCard() {
  return (
    <div>
      <div>Изображение книги</div>
      <div>
        <h3>Название книги</h3>
        <p>Автор книги</p>
        <p>Описание книги</p>
        <div>
          <span>Цена книги</span>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
} 