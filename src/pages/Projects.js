import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useIntersection } from "react-use";
import './projects.css';
import { HiPlus } from 'react-icons/hi';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi'

function Projects() {

  const [modalEcommerce, setModalEcommerce] = useState(false);
  const [modalPastry, setModalPastry] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(false);
  const [modalMalvina, setModalMalvina] = useState(false);

  //----card container animations-------
  const projectCardsRef = useRef();
  const projectCards = gsap.utils.selector(projectCardsRef);
  const tlProjects = useRef();



  useEffect(() => {
    tlProjects.current = gsap.timeline()
      .to(projectCards(".projectBox"), {
        duration: 3,
        opacity: 1,
        scale: 1,
        delay: 3,
        stagger: 1,
        translateY: -30,
      })
  }, [])

  //------section animation on scroll------------

  const sectionFreelanceRef = useRef(null);

  const intersection = useIntersection(sectionFreelanceRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInFreelance = element => {
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

  const fadeOutFreelance = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.5
    ? fadeOutFreelance(".fadeInFreelance")
    : fadeInFreelance(".fadeInFreelance");








  //----each card animations------
  const onEnterImg = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.3 });

  };

  const onLeaveImg = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1, });

  };

  const onEnterBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#AF8B9F", color: "#ffffff", duration: 0.5, border: "3px solid #BCCAA1" });

  };

  const onLeaveBtn = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#ffffff", color: "#BCCAA1", duration: 0.5, border: "3px solid #BCCAA1" });

  };






  return (
    <div className='projects-container'>

      <section className='projects-section'>
        <h2 className='projects-title'>My projects</h2>
        <div className='projectsBox-container' ref={projectCardsRef} >

          <div className='projectBox'>
            <div className='img-project-container'>
              <Link to="https://ecommerce-react-lustres.vercel.app/">
                <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" width="130%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </Link>
            </div>
            <div className='projectName-container'>
              <h2>Ecommerce</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalEcommerce(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalEcommerce && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalEcommerce(false)}>X</button>
                <h4>MY PASTRY</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>It's a gardening ecommerce which consumes information from Firebase. You can filter the products by category, see the details and add to the shopping cart, or if you prefer, it can be saved to the wish list for later. </p>
                <p className='window-features'>Features:</p>
                <ul className='window-list'>
                  <li>React js</li>
                  <li>Firebase</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>GSAP</li>
                  <li>React Icons</li>
                  <li>Bootstrap</li>
                  <li>Responsive Design</li>
                  <li>SEO</li>
                  <li>Local Storage</li>
                  <li>Toastify</li>
                </ul>
              </div>

            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <Link to="http://pasteleria.vercel.app/">
                <img src="https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?k=20&m=182895267&s=612x612&w=0&h=9q-t8Dn3OfyFfoVHjADTtyMzjjYyR7Vm_F1e7FO7iQE=" width="120%"className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </Link>
            </div>
            <div className='projectName-container'>
              <h2>Animated website</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalPastry(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalPastry && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalPastry(false)}>X</button>
                <h4>MY PASTRY</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>It's a pastry site developed with a lot of animations. It works with useRef, useEffect and useIntersection.</p>
                <p className='window-features'>Features:</p>
                <ul className='window-list'>
                  <li>React js</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>CSS</li>
                  <li>GSAP</li>
                  <li>React Icons</li>
                  <li>Bootstrap</li>
                  <li>Responsive Design</li>
                  <li>SEO</li>
                </ul>
              </div>

            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <Link to="https://valeria-paulina-photography.000webhostapp.com/">
                <img src="./favorita-nena-atardecer.jpg" width="120%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </Link>
            </div>
            <div className='projectName-container'>
              <h2>Photography website</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalPhoto(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalPhoto && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalPhoto(false)}>X</button>
                <h4>VALERIA PAULINA PHOTOGRAPHY</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>Self photography website.</p>
                <p className='window-features'>Features:</p>
                <ul className='window-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>SASS</li>
                  <li>Ecommerce</li>
                  <li>Iframes</li>
                  <li>Responsive Design</li>
                  <li>Animations</li>
                  <li>SEO</li>
                </ul>
              </div>

            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <Link to="https://malvina.vercel.app/">
                <img src="https://media.istockphoto.com/photos/smiling-surfer-using-smartphone-picture-id642333286?k=20&m=642333286&s=612x612&w=0&h=SGgCQWqYkcH8w-FWbj4tz313yIoqIQ3rqmsr7KTdgWY=" width="120%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </Link>
            </div>
            <div className='projectName-container'>
              <h2>Menswear website (React)</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalMalvina(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalMalvina && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalMalvina(false)}>X</button>
                <h4>MALVINA</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>Malvina is a casual menswear brand which was born in Uruguay during COVID pandemic. </p>
                <p className='window-features'>Features:</p>
                <ul className='window-list'>
                  <li>React Js</li>
                  <li>CSS</li>
                  <li>Firebase</li>
                  <li>Bootstrap</li>
                  <li>React-icons</li>
                  <li>GSAP</li>
                  <li>Iframes</li>
                  <li>Responsive Design</li>
                  <li>SEO</li>
                </ul>
              </div>

            </div>
          </div>}

        </div>

      </section>
      <section className='freelance-section' ref={sectionFreelanceRef}>
        <div className='fadeInFreelance freelance-textMail-container'>
          <p className='freelance-text fadeInFreelance' >Would you like to have a website for your brand?</p>
          <p className='freelance-text2 fadeInFreelance' >Let's feel free to contact me for a budget!</p>

          <Link to="/contact" >
            <button className='mail-projects fadeInFreelance'>
              <FiMail className='icons-home'></FiMail>
            </button>
          </Link>
        </div>


      </section>

    </div>
  )
}

export default Projects