import React from 'react';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = () => {
    clickHandler(buttonName);
  };
  return (
    <>
      <div className="group-1">
        <Button buttonName="AC" clickHandler={clickHandler} />
        <Button buttonName="+/-" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
      </div>
      <div className="group-2">
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button buttonName="X" clickHandler={clickHandler} />
      </div>
      <div className="group-3">
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button buttonName="-" clickHandler={clickHandler} />
      </div>
      <div className="group-4">
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button buttonName="+" clickHandler={clickHandler} />
        <div className="group-5">
          <Button buttonName="0" clickHandler={clickHandler} />
          <Button buttonName="." clickHandler={clickHandler} />
          <Button buttonName="=" clickHandler={clickHandler} />
        </div>
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
