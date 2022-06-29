import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import './navBar.css'


function NavBar(props) {

  const { menu, setMenu } = props

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
        background: '#ff7396',
        borderRadius: 8,
        paddingLeft: 6,
        paddingRight: 6,
      }
      : {
        color: '#000000',
      }

  //-----------------------------

  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        y: 0,
        opacity: 0

      },
      {
        duration: 0.75,
        y: 100,
        ease: 'power3.inOut',
        stagger: 0.3,
        opacity: 1
        // {
        // amount: 2
        //},

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
        opacity: 1
        // {
        // amount: 2
        //},

      },
    )
  }, []);

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menu]);

  return (
    <div>
      <div
        className="sidebarNavigationOverlay"
        ref={el => (sidebarMenuOverlay = el)}
        onClick={() => setMenu(false)}
      ><button>X</button></div>
      <div className="menu-layer" ref={el => (menuLayer = el)}>
        <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)}>
          <NavLink to="/" className="nav-links box-home" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>HOME</NavLink>
          <NavLink to="/about" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>ABOUT</NavLink>
          <NavLink to="/cv" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>CV</NavLink>
          <NavLink to="/projects" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>PROJECTS</NavLink>
          <NavLink to="/contact" className="nav-links" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={styleLinks} onClick={() => setMenu(false)}>CONTACT</NavLink>
        </nav>
      </div>

    </div>
  )
}

export default NavBar

/*
import React, { useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import gsap from 'gsap';


const SidebarNav = props => {
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  const menuTimeline = useRef();

  const { menuState, setMenuState } = props;

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        x: '100%'
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5
        }
      }
    );
  }, []);

  useEffect(() => {
    menuState ? menuTimeline.current.play() : menuTimeline.current.reverse();
  }, [menuState]);

  useEffect(() => {
    const { history } = props;
    history.listen(() => setMenuState(false));
  });

  return (
    <>
      <div
        className="sidebarNavigationOverlay"
        ref={el => (sidebarMenuOverlay = el)}
        onClick={() => setMenuState(false)}
      ></div>
      <div className="menu-wrapper">
        <div className="menu-layer" ref={el => (menuLayer = el)}></div>
        <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <Link className="menu-link" to="/">
                Home
              </Link>
              <Link className="menu-link" to="/about">
                About
              </Link>
              <Link className="menu-link" to="/services">
                Services
              </Link>
              <Link className="menu-link" to="/gallery">
                Gallery
              </Link>
              <Link className="menu-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Find Us</div>
                <span>57, Arch Road</span>
                <span>Middleton</span>
              </li>
              <li className="link-item">
                <div className="link-title">Social Media</div>
                <div className="social-media-links">
                  <a href="www.twitter.com" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="www.facebook.com" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="www.google.com" className="social-link">
                    <i className="fab fa-google"></i>
                  </a>
                </div>
              </li>
              <li className="link-item">
                <div className="link-title">Phone</div>
                <span>000-000-0000</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default withRouter(SidebarNav);
*/


/*
 menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu, (".nav-links")],
      {
        duration: 0,
        x: '100%',
        stagger: 0.5,
      
      },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: 0.3
        // {
         // amount: 2
        //},
        
      },
     
    );
    */