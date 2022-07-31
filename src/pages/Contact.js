import React from 'react';
import './contact.css';
import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useIntersection } from "react-use";




function Contact() {


  const contactTitleRef = useRef();
  const oneContactRef = useRef(null);

  //-----------animation on scroll one--------------------

  const intersection = useIntersection(oneContactRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInContactOne = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };

  const fadeOutContactOne = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOutContactOne(".fadeInContactOne")
    : fadeInContactOne(".fadeInContactOne");


  //-----------animation on scroll two--------------------
  const twoContactRef = useRef(null);
  const intersectionTwo = useIntersection(twoContactRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  });

  const fadeInContactTwo = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };

  const fadeOutContactTwo = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionTwo && intersectionTwo.intersectionRatio < 0.6
    ? fadeOutContactTwo(".fadeInContactTwo")
    : fadeInContactTwo(".fadeInContactTwo");


  //-----------animation on scroll three--------------------
  const threeContactRef = useRef(null);
  const intersectionThree = useIntersection(threeContactRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInContactThree = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      ease: "power4.out",
      duration: 3,
      stagger: {
        amount: 0.6
      }
    });
  };

  const fadeOutContactThree = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionThree && intersectionThree.intersectionRatio < 0.5
    ? fadeOutContactThree(".fadeInContactThree")
    : fadeInContactThree(".fadeInContactThree");






  useEffect(() => {
    //-----title animation------
    gsap.to(contactTitleRef.current, { y: 80, duration: 5, delay: 1, });
  }, [])



  return (
    <div className='contact-container'>
      <section className='title-contact' ref={contactTitleRef}>
        <h2 className='contact-contactTitle'>Contact</h2>
        <h3 className='workTogether-contact'>Let's work together!</h3>
      </section>

      <section className='first-section-contact sections' ref={oneContactRef}>
        <div className='contact-card ' >
          <div className='titleLink-contact '>
            <p className='contact-card-title fadeInContactOne'>Mail me:</p>
            <Link to="mailto:valeriapaulinalustres@yahoo.com.ar?subject=contacto%20desde%20web" target="_blank" className='linkGithub-footer fadeInContactOne'><HiMail className="iconMail-footer" /></Link>
          </div>
          <p className='contact-card-text fadeInContactOne'>valeriapaulinalustres@yahoo.com.ar</p>
        </div>

        <div className='contact-card   ' >
          <div className='titleLink-contact'>
            <p className='contact-card-title fadeInContactOne'>Send me a message:</p>
            <Link to="https://wa.me/5491121714493/?text=Hola%20Valeria" target="_blank"
              className="linkIconWa-footer fadeInContactOne"><img src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" alt="whatsapp" className='icon-footer'></img></Link>
          </div>
          <p className='contact-card-text fadeInContactOne'>(+549) 11 21714493</p>
        </div>
      </section>

      <section className='second-section-contact' ref={twoContactRef}>
        <div className='contact-card   '>
          <div className='titleLink-contact '>
            <p className='contact-card-title fadeInContactTwo'>Visit my Linkedin:</p>
            <Link to="https://www.linkedin.com/in/valeria-paulina-lustres/" className='linkLinkedin-footer fadeInContactTwo'><BsLinkedin className='icon-footer linkedin' /></Link>
          </div>
          <p className='contact-card-text fadeInContactTwo'>https://www.linkedin.com/in/valeria-paulina-lustres/</p>
        </div>

        <div className='contact-card  '>
          <div className='titleLink-contact '>
            <p className='contact-card-title fadeInContactTwo'>Watch my code:</p>
            <Link to="https://github.com/valeriapaulinalustres" className='linkGithub-footer fadeInContactTwo'><BsGithub className='icon-footer' /></Link>
          </div>
          <p className='contact-card-text fadeInContactTwo'>https://github.com/valeriapaulinalustres</p>
        </div>
      </section>

      <section className='third-section-contact' ref={threeContactRef}>
        <div className='contact-card  ' >
          <div className='titleLink-contact  '>
            <p className='contact-card-title fadeInContactThree'>My country:</p>
            <img src='/logos/argentine-flag.png' alt='Argentine flag' className='icon-footer fadeInContactThree'></img>
          </div>
          <p className='contact-card-text fadeInContactThree'>Argentine</p>
        </div>

        <div className='contact-card '>
          <p className='contact-card-title fadeInContactThree'>Download my Resume:</p>
          <button className='cv-footer fadeInContactThree'><Link to="./cv-Valeria-Lustres-Frontend-React.pdf" target="_blank" rel="noopener noreferrer" download="cv-Valeria-Lustres-Frontend-React.pdf" className='pdfLinkFooter'>
            <HiOutlineDocumentDownload className='icons-cv-footer'></HiOutlineDocumentDownload>CV
          </Link></button>
        </div>
      </section>

    </div>
  )
}

export default Contact