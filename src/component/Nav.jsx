import React, { useState } from 'react';
import './Nav.css';

const Nav = ({ count }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const toggleButton = () => {
    if (isAdded) {
      setCartCount(cartCount - 1);
    } else {
      setCartCount(cartCount + 1);
    }
    setIsAdded(!isAdded);
  };

  return (
    <div>
      <div className='container navBar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><a className="dropdown-item" href="#">Popular Items</a></li>
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex">
                <button onClick={toggleButton} className="btn" type="button">🛒 Cart: {count}</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className='navDown'>
        <h1 className='heading1'>Shop in style</h1>
        <p className='heading2'>With this shop homepage template</p>
      </div>
    </div>
  );
}

export default Nav;
