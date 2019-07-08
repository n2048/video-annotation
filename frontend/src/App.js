import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';


import "../node_modules/video-react/dist/video-react.css"; // import css

import Header from './components/header';
import MainContent from './components/main-content';

function App() {
  return (
    <Container fluid className="App">
      <Header></Header>
      <MainContent></MainContent>
    </Container>
  );
}

export default App;
