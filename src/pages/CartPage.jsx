import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';

export default function CartPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Cart />
      </main>
      <Footer />
    </>
  );
} 