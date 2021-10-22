import React from 'react';
import { AuthProvider } from './providers/AuthProviders';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
      {/*Todoを表示するコンポーネント*/}
      {/* Fotter */}
    </AuthProvider>
  );
}

export default App;
