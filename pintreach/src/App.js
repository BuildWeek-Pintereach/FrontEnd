import React from 'react';
import SignUpPage from './components/SignUpPage';
import './App.css';
import AddArticle from './components/AddArticle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUpPage />
      </header>
      <AddArticle />
    </div>
  );
}

export default App;
