import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';



function Main() {
  const mainStyle = {
    backgroundColor: '#f5cdc0',
  };

  return (
    <div style={mainStyle}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Main;
