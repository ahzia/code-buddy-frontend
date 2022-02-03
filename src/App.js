import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import Login from './features/user/Login';
import Snackbar from './common/snackbar/Snackbar';
import Header from './common/header/Header';

function App() {
  return (
    <div className="App">
      <Snackbar />
      <Router>
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
