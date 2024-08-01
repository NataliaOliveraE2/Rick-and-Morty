import React from 'react';
import Container from './pages/Container';
import CardDetail from './pages/CardDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const cardState = useSelector(state => state.cards);
  console.log(cardState);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/detalles/:id" element={<CardDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App