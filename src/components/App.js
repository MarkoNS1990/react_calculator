import React, { useState } from 'react';
import '../styles/App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

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

    <>
      <Display result={(next && next.toString()) || (total && total.toString())} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}

export default App;
