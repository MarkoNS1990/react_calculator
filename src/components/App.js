import React, { useState } from 'react';
import '../styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';

function App() {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (name) => {
    const data = { ...value };
    const result = calculate(data, name);
    setValue({ ...result });
  };
  const { total, next } = value;

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">

        <Switch>
          <Route exact path="/calculator">
            <Display result={(next && next.toString()) || (total && total.toString())} />
            <ButtonPanel clickHandler={handleClick} />
          </Route>

          <Route exact path="/quote">
            <Quote />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
