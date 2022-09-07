import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Nav from './components/Nav.js';
import MainContent from './components/MainContent.js';

export default function App() {
  return (
    <div className="container">
      <Nav />
      <MainContent />
    </div>
  )
}