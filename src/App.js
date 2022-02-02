import React from 'react';
import './App.css';
import Header from './common/header/Header';
import MeetingForm from './common/meetingForm/MeetingForm';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="meetingForm">
          <MeetingForm />
        </div>
      </div>
    </>
  );
}

export default App;
