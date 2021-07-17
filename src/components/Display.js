import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (

    <h1 className="result">{ result || '0' }</h1>

  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
