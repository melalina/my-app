import Header from '../Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import Footer from '../Footer/Footer';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
} 