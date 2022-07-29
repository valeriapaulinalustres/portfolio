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
const sectionOneContactRef = useRef(null);

const intersection = useIntersection(sectionOneContactRef, {
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





  useEffect(() => {
    //-----title animation------
    gsap.to(contactTitleRef.current, { y: 80, duration: 5, delay:1, });
  }, [])

  return (
    <div className='contact-container'>
      <section className='title-contact' ref={contactTitleRef}>
        <h2>Contact</h2>
        <h3>Let's work together</h3>

      </section>

      <section ref={sectionOneContactRef}>
        <div className='contact-card '>
        <div className='titleLink-contact '>
          <p className='contact-card-title fadeInContactOne'>My country</p>
        <img src='/logos/argentine-flag.png' alt='Argentine flag' className='icon-footer fadeInContactOne'></img>
</div>
          <p className='contact-card-text fadeInContactOne'>Argentine</p>
        </div>

        <div className='contact-card fadeInContactOne'>
          <div className='titleLink-contact '>
            <p className='contact-card-title'>Mail me:</p>
            <Link to="mailto:valeriapaulinalustres@yahoo.com.ar?subject=contacto%20desde%20web" target="_blank" className='linkGithub-footer'><HiMail className="iconMail-footer" /></Link>
          </div>
          <p className='contact-card-text'>valeriapaulinalustres@yahoo.com.ar</p>
        </div>

        <div className='contact-card fadeInContactOne'>
          <div className='titleLink-contact'>
            <p className='contact-card-title'>Send me a message</p>
            <Link to="https://wa.me/5491121714493/?text=Hola%20Valeria" target="_blank"
              className="linkIconWa-footer"><img src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" alt="whatsapp" className='icon-footer'></img></Link>
          </div>
          <p className='contact-card-text'>(+549) 11 21714493</p>
        </div>

        <div className='contact-card fadeInContactOne'>
          <div className='titleLink-contact'>
            <p className='contact-card-title'>Visit my Linkedin</p>
            <Link to="https://www.linkedin.com/in/valeria-paulina-lustres/" className='linkLinkedin-footer'><BsLinkedin className='icon-footer linkedin' /></Link>
          </div>
          <p className='contact-card-text'>https://www.linkedin.com/in/valeria-paulina-lustres/</p>
        </div>

        <div className='contact-card fadeInContactOne'>
          <div className='titleLink-contact'>
            <p className='contact-card-title'>Watch my code</p>
            <Link to="https://github.com/valeriapaulinalustres" className='linkGithub-footer'><BsGithub className='icon-footer' /></Link>
          </div>
          <p className='contact-card-text'>https://github.com/valeriapaulinalustres</p>
        </div>

        <div className='contact-card fadeInContactOne'>

          <p className='contact-card-title'>Download my Resume</p>
          <button className='cv-footer'><Link to="./cv-Valeria-Lustres-Frontend-React.pdf" target="_blank" rel="noopener noreferrer" download="cv-Valeria-Lustres-Frontend-React.pdf" className='pdfLinkFooter'>
            <HiOutlineDocumentDownload className='icons-cv-footer'></HiOutlineDocumentDownload>CV
          </Link></button>


        </div>

      </section>




    </div>
  )
}

export default Contact