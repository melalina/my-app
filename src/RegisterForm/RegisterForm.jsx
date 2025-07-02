import styles from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import CoolButton from '../CoolButton/CoolButton';

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <div className={styles.title}>Регистрация</div>
      <input className={styles.input} type="text" placeholder="Имя" required />
      <input className={styles.input} type="email" placeholder="Email" required />
      <input className={styles.input} type="password" placeholder="Пароль" required />
      <CoolButton theme="pretty" size="big" type="submit">Зарегистрироваться</CoolButton>
      <Link to="/login" className={styles.link}>Уже есть аккаунт? Войти</Link>
    </form>
  );
} 