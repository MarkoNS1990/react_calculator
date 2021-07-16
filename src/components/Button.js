import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName, clickHandler }) {
  return (
    <>
      <button type="button" onClick={() => clickHandler(buttonName)}>{buttonName}</button>
    </>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
