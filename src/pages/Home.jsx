import Header from '../Header/Header';
import SidebarFilter from '../SidebarFilter/SidebarFilter';
import BookList from '../BookList/BookList';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', minHeight: '80vh' }}>
        <SidebarFilter />
        <main style={{ flex: 1 }}>
          <BookList />
        </main>
      </div>
      <Footer />
    </>
  );
} 