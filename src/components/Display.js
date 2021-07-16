import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <>
      <p>{ result }</p>
    </>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
