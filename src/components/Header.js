import { useState, useEffect, useRef } from 'react';
import {TiThMenu} from 'react-icons/ti'


function Header(props) {

const {menu, setMenu} = props;

  return (
    <button className="menu-button" onClick={()=>setMenu(!menu)}><TiThMenu/></button>
  )
}

export default Header
/*
import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Header Component should hold the menu trigger button.
 * onClick of this button we need to show or hide the sidebar navigation
 * The Menu Toggle state is maintained in the App Component.
 
const Header = props => {
  const { menuState, setMenuState } = props;
  return (
    <header className="site-header">
      <div className="brand-icon">
        <Link to="/">
          <div className="icon">
            <i className="fab fa-react"></i>
          </div>
          <span>FrontendFunn</span>
        </Link>
      </div>
      <div>
        <button
          className={`menu-trigger ${menuState ? 'menu-close' : ''}`}
          onClick={() => setMenuState(!menuState)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
export default Header;
*/