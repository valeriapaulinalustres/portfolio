import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { AiOutlineClose } from 'react-icons/ai';
import { ImHome } from 'react-icons/im';
import { FiMail } from 'react-icons/fi';
import { CgWebsite } from 'react-icons/cg';
import './navBar.css'


function NavBar(props) {

  const { menu, setMenu } = props

  //-----------------links hover and navlink style----------------------
  const mouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#ce2f56" });
  };
  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#000000" });
  };

  const styleLinks = ({ isActive }) =>
    isActive
      ? {
        color: '#fff',
        background: '#8babac',
        borderRadius: 8,
        paddingLeft: 6,
        paddingRight: 6,
      }
      : {
        color: '#000000',
      }

  //-----------------------------NavBar animation------------------

  let linksContainer = useRef(null);
  let x = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [x, menuLayer, linksContainer],
      {
        duration: 0,
        y: 0,
        opacity: 0,
      },
      {
        duration: 0.75,
        y: 50,
        ease: 'power3.inOut',
        stagger: 0.3,
        opacity: 1,
      },

    );
    menuTimeline.current.fromTo(".nav-links",
      {
        duration: 0,
        y: 0,
        opacity: 0
      },
      {
        duration: 0.75,
        y: 100,
        ease: 'elastic',
        stagger: 0.3,
        opacity: 1,
      },
    )
  }, []);

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menu]);


  return (
    <div className='navbar-container'>
      <div
        className="x"
        ref={el => (x = el)}
        onClick={() => setMenu(false)}
      >
        <button className='xButton'>
          <AiOutlineClose />
        </button>
      </div>
      <div className="menu-layer" ref={el => (menuLayer = el)}>.</div>
      <nav className="linksContainer" ref={el => (linksContainer = el)}>
        <NavLink
          to="/"
          className="nav-links box-home rosa"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          style={styleLinks}
          onClick={() => setMenu(false)}>
          <ImHome className='navBar-icons' />
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-links lila"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          style={styleLinks}
          onClick={() => setMenu(false)}>
          <CgWebsite className='navBar-icons' />
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-links verde"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          style={styleLinks}
          onClick={() => setMenu(false)}>
          <FiMail className='navBar-icons' />
        </NavLink>
      </nav>
    </div>
  )
}

export default NavBar
