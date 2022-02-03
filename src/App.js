import React from 'react';
import './App.css';
import Login from './features/user/Login';
import Snackbar from './common/snackbar/Snackbar';
import Header from './common/header/Header';

function App() {
  return (
    <div className="App">
      <Snackbar />
      <header className="App-header">
        <Header />
        <Login />
      </header>
    </div>
  );
}

export default App;
