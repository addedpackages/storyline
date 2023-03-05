import React from 'react';
import './navigation.css';

import logo from './logo.png';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo-container">
        <img src={logo} style={{width: "100px"}}alt="Logo" className="logo" />
      </div>
      <div className="nav-links-container">
        <div className="nav-link">Industries</div>
        <div className="nav-link">Connect Data</div>
        <div className="nav-link">A.I. + NLG</div>
        <div className="nav-link">Customization</div>
        <div className="nav-link">Founders</div>

      </div>
    </nav>
  );
};

export default Navigation;
