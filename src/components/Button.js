import React from 'react';
import PropTypes from 'prop-types';

function Button({ buttonName }) {
  return (
    <>
      { buttonName }
    </>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
