import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  return (
    <form>
      <h2>Регистрация</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Пароль" />
      <input type="password" placeholder="Повторите пароль" />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
} 