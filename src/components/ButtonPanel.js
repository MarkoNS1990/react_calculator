import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };
  return (
    <div className="button-container">
      <div className="group-1">
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button buttonName="/" clickHandler={handleClick} />
      </div>
      <div className="group-2">
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button buttonName="X" clickHandler={handleClick} />
      </div>
      <div className="group-3">
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button buttonName="-" clickHandler={handleClick} />
      </div>
      <div className="group-4">
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button buttonName="+" clickHandler={handleClick} />

      </div>
      <div className="group-5">
        <Button buttonName="0" clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button buttonName="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
