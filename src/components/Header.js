import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className="bg-primary">
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
