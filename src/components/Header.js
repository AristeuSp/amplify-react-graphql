import React from 'react';

const Header = ({ title }) => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#282c34', color: 'white' }}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;