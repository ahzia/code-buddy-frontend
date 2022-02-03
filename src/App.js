import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './features/user/Login';
import Snackbar from './common/snackbar/Snackbar';
import Header from './common/header/Header';
import { selectSlideBarState } from './common/header/components/sideBarSlice';
import MainContainer from './common/Main';

function App() {
  const open = useSelector(selectSlideBarState);
  return (
    <div className="App">
      <Snackbar />
      <Router>
        <header className="App-header">
          <Header />
        </header>
        <MainContainer open={open} className="main">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" />
          </Routes>
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
