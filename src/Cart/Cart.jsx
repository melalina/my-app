import styles from './Cart.module.css';
import CoolButton from '../CoolButton/CoolButton';

export default function Cart() {
  const cartItems = [
    {
      title: 'Мастер и Маргарита',
      author: 'Михаил Булгаков',
      price: 499,
      count: 1,
    },
    {
      title: 'Преступление и наказание',
      author: 'Фёдор Достоевский',
      price: 399,
      count: 2,
    },
  ];
  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className={styles.cart}>
      <div className={styles.title}>Корзина</div>
      {cartItems.length === 0 ? (
        <div className={styles.empty}>Ваша корзина пуста</div>
      ) : (
        <>
          <table className={styles.list}>
            <thead>
              <tr>
                <th>Книга</th>
                <th>Автор</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.price} ₽</td>
                  <td>{item.count}</td>
                  <td>{item.price * item.count} ₽</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.total}>Итого: {total} ₽</div>
          <CoolButton theme="pretty" size="big">Оформить заказ</CoolButton>
        </>
      )}
    </div>
  );
} 