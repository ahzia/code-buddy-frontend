import {
  BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Snackbar from './common/snackbar/Snackbar';
import Header from './common/header/Header';
import { selectSlideBarState } from './common/header/components/sideBarSlice';
import MainContainer from './common/Main';
import AllRoutes from './app/Routes';

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
          <AllRoutes />
        </MainContainer>
      </Router>
    </div>
  );
}

export default App;
