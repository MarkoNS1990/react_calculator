import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, clickHandler }) {
  const operators = ['+', '-', '/', 'X', '='];
  return (
    <>
      <button style={operators.includes(buttonName) ? { backgroundColor: 'orange' } : { backgroundColor: '' }} type="button" onClick={() => clickHandler(buttonName)} className={buttonName === '0' ? 'zero' : 'my-button'}>{buttonName}</button>
    </>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
