import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BookDetailPage from './pages/BookDetailPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/book/:id', element: <BookDetailPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]); 