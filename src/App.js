import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewsList from './components/NewsList';
import PersonasPage from './components/PersonasPage';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/personas" element={<PersonasPage />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
