import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ClockTime, CountdownTimer} from './components/timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <ClockTime></ClockTime>
        <CountdownTimer 
          id="my--personal--countdown"
          date="2021-12-24"
          time="12:00:00"
        ></CountdownTimer>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
