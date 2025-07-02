import Header from '../Header/Header';
import BookDetail from '../BookDetail/BookDetail';
import Footer from '../Footer/Footer';

export default function BookDetailPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <BookDetail />
      </main>
      <Footer />
    </>
  );
} 