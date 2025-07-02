import styles from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>Профиль пользователя</div>
      <div className={styles.info}>
        <p><b>Email:</b> user@mail.ru</p>
        <p><b>Имя:</b> Имя пользователя</p>
      </div>
      <div className={styles.orders}>
        <div className={styles.ordersTitle}>Мои заказы</div>
        <ul className={styles.orderList}>
          <li className={styles.orderItem}>Заказ #1 — 1 книга, 499 ₽</li>
          <li className={styles.orderItem}>Заказ #2 — 2 книги, 798 ₽</li>
        </ul>
      </div>
    </div>
  );
} 