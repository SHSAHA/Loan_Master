import React from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style"><NavLink to="/" className="App-link">Home</NavLink></li>
            <li className="li-style"><NavLink to="/deposit" className="App-link">Deposit</NavLink></li>
            <li className="li-style"><NavLink to="/withdraw" className="App-link">Withdraw</NavLink></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/deposit" component={Deposit} />
          <Route eaxct path="/withdraw" component={Withdraw} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
