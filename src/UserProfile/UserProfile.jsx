import styles from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <div>
      <h2>Профиль пользователя</h2>
      <div>
        <p><b>Email:</b> user@mail.ru</p>
        <p><b>Имя:</b> Имя пользователя</p>
      </div>
      <div>
        <h3>Мои заказы</h3>
        <ul>
          <li>Заказ #1 — 1 книга, цена книги</li>
          <li>Заказ #2 — 2 книги, цена книги</li>
        </ul>
      </div>
    </div>
  );
} 