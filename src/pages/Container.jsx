import React from 'react';
import { Cards } from '../components/Cards';
import '../styles/style.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
