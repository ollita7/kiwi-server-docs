import React from 'react';
import logo from '../../assets/logo.png';
import './styles.scss';

function Header() {
  return (
    <>
      <nav className="navbar header">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Bootstrap" width="30"/>
            Docs
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        
      </div>
    </>
  );
}

export default Header;