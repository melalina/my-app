import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.phone}>8 (495) 424-84-44</div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Вопросы и ответы</a>
        <a href="#" className={styles.link}>Обратная связь</a>
      </div>
      <div className={styles.copyright}>
        © 2025, Читай-город
      </div>
    </footer>
  );
} 