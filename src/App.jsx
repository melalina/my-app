import React from 'react';
import Header from './Header/Header';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import BookList from './BookList/BookList';
import Footer from './Footer/Footer';
import BookDetail from './BookDetail/BookDetail';
import Cart from './Cart/Cart';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import UserProfile from './UserProfile/UserProfile';
import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <Header />
      <SidebarFilter />
      <BookList />
      <BookDetail />
      <Cart />
      <LoginForm />
      <RegisterForm />
      <UserProfile />
      <Footer />
    </div>
  );
}
