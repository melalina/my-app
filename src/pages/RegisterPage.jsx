import Header from '../Header/Header';
import RegisterForm from '../RegisterForm/RegisterForm';
import Footer from '../Footer/Footer';

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
} 