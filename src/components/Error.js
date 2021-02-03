import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
  <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 mt-2">
    <div className="alert alert-danger text-center p-2">{message}</div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
