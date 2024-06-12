import React from 'react'
import Container from './components/Container'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <hr />
      <Container/>
    </div>
  )
}

export default App