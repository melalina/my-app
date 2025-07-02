import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';
import Footer from '../Footer/Footer';

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <UserProfile />
      </main>
      <Footer />
    </>
  );
} 