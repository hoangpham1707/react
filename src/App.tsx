import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product';


const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={Product} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
