import styles from './Cart.module.css';

export default function Cart() {
  return (
    <div>
      <h2>Корзина</h2>
      <ul>
        <li>
          <span>Название книги</span>
          <span>Сумма заказа</span>
        </li>
      </ul>
    </div>
  );
} 