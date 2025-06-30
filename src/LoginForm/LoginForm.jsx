import styles from './LoginForm.module.css';

export default function LoginForm() {
  return (
    <form>
      <h2>Вход</h2>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  );
} 