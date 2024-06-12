import React from 'react';
import Container from './components/Container';
import CardDetail from './components/CardDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <hr />
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