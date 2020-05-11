import React from 'react';

function Header({ serviceName }) {
  return (
    <header className="header">
      <h1>{serviceName}</h1>
    </header>
  );
}

export default Header;
