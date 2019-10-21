import React from 'react';
import { Route, Link } from "react-router-dom";
import SignUpPage from './components/SignUpPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUpPage />
      </header>
    </div>
  );
}

export default App;
