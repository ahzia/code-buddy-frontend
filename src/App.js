import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Login from './features/user/Login';
import Snackbar from './common/snackbar/Snackbar';

function App() {
  return (
    <div className="App">
      <Snackbar />
      <Login />
    </div>
  );
}

export default App;
