import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import CoolButton from '../CoolButton/CoolButton';

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <div className={styles.title}>Вход</div>
      <input className={styles.input} type="email" placeholder="Email" required />
      <input className={styles.input} type="password" placeholder="Пароль" required />
      <CoolButton theme="pretty" size="big" type="submit">Войти</CoolButton>
      <Link to="/register" className={styles.link}>Нет аккаунта? Зарегистрироваться</Link>
    </form>
  );
} 