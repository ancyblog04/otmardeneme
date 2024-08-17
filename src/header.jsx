import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Ana Sayfa</a></li>
          <li><a href="#">Hakkımızda</a></li>
          <li><a href="#">Hizmetlerim</a></li>
          <li><a href="#">İletişim</a></li>
        </ul>
      </nav>
      <div className="hs">
        <a href="#"><i className="fi fi-rr-phone-call"></i> HIZLI SİPARİŞ</a>
      </div>
    </div>
  );
}

export default Header;
