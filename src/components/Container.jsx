import React from 'react';
import { Cards } from './Cards';
import '../styles/style.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

const Container = () => {
  return (
    <div className="container">
      <Header className="header" />
      <div className="content">
        <Cards />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Container;
