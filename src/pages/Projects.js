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
  const [modalStatus, setModalStatus] = useState(false);
  const [modalCrud, setModalCrud] = useState(false);
  const [modalEpi, setModalEpi] = useState(false);
  const [modalDulceEspera, setModalDulceEspera] = useState(false);
  const [modalEcommercePupils, setModalEcommercePupils] = useState(false);

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
              <a href="https://ecommerce-react-lustres.vercel.app/" target="_blank">
                <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" width="130%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Ecommerce - React js | Firebase</h2>
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
                <p className='window-features'>Features and technologies used:</p>
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
                  <li>UX/UI Design</li>
                </ul>
              </div>

            </div>
          </div>}



          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://pasteleria.vercel.app/" target="_blank">
                <img src="https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?k=20&m=182895267&s=612x612&w=0&h=9q-t8Dn3OfyFfoVHjADTtyMzjjYyR7Vm_F1e7FO7iQE=" width="120%"className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Animated website - React Js | GSAP</h2>
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
                <p className='window-description'>It's a pastry site desingned and developed with a lot of animations. It works with useRef, useEffect and useIntersection.</p>
                <p className='window-features'>Features and technologies used:</p>
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
                  <li>UX/UI Design</li>
                  <li>Figma</li>
                </ul>
              </div>

            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://valeria-paulina-photography-lustres.vercel.app/" target="_blank">
                <img src="./favorita-nena-atardecer.jpg" width="120%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Photography website - HTML | SASS | JS</h2>
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
                <p className='window-features'>Features and technologies used:</p>
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
                  <li>UX/UI Design</li>
                </ul>
              </div>

            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="https://malvina.vercel.app/" target="_blank">
                <img src="https://media.istockphoto.com/photos/smiling-surfer-using-smartphone-picture-id642333286?k=20&m=642333286&s=612x612&w=0&h=SGgCQWqYkcH8w-FWbj4tz313yIoqIQ3rqmsr7KTdgWY=" width="120%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Menswear website - React js | Firebase</h2>
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
                <p className='red'>I am changing the database this days, so you won't be able to see any products in this site.</p>
                <p className='window-features'>Features and technologies used:</p>
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
                  <li>UX/UI Design</li>
                  <li>Figma</li>
                </ul>
              </div>

            </div>
          </div>}

          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://status-page-api.vercel.app/" target="_blank">
                <img src="/status.jpg" width="160%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Status page - React Js | API REST</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalStatus(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalStatus && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalStatus(false)}>X</button>
                <h4>Status Page</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>This projects is a status page developed in React, which takes updated information every 15 minutes from an API REST.</p>
                <p className='window-features'>Features and technologies used:</p>
                <ul className='window-list'>
                  <li>React Js</li>
                  <li>CSS</li>
                  <li>API REST</li>
                </ul>
              </div>
            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://users-list-iota.vercel.app/"  target="_blank">
                <img src="/crud.jpg" width="160%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>CRUD app - React Js | API REST</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalCrud(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalCrud && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalCrud(false)}>X</button>
                <h4>Status Page</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>This project is a CRUD app which brings information from JSONPlaceHolder (API REST). You can create, read, update and delete users from a list.</p>
                <p className='window-features'>Features and technologies used:</p>
                <ul className='window-list'>
                  <li>React Js</li>
                  <li>CSS</li>
                  <li>API REST: JSONPlaceHolder</li>
                  <li>GSAP</li>
                </ul>
              </div>
            </div>
          </div>}


          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://epi-six.vercel.app/"  target="_blank">
                <img src="/epi.jpg" width="160%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Epidemiology app - React Js</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalEpi(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalEpi && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalEpi(false)}>X</button>
                <h4>Epi app</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>This is an app developed to get epidemiology updated information in dashboards, by uploading a .csv file.</p>
                <p className='window-features'>Features and technologies used:</p>
                <ul className='window-list'>
                  <li>React Js</li>
                  <li>CSS</li>
                  <li>GSAP</li>
                  <li>Click <a href="https://www.figma.com/file/GSgULa4mYThyumKxtsipJf/Epi?node-id=0%3A1">here</a> to visit my Figma design UX/UI</li>
                </ul>
              </div>
            </div>
          </div>}

          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://dulce-espera.vercel.app/"  target="_blank">
                <img src="/pregnancy-desktop.jpg" width="100%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Dulce Espera App - React + Typescript</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalDulceEspera(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalDulceEspera && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalDulceEspera(false)}>X</button>
                <h4>Dulce Espera App</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>This is a drug finder and its relationship with pregnancy. Information obtained from the FDA</p>
                <p className='window-features'>Features and technologies used:</p>
                <ul className='window-list'>
                  <li>React Js</li>
                  <li>CSS</li>
                  <li>Typescript</li>
                  <li>FDA Open Api</li>
                </ul>
              </div>
            </div>
          </div>}

          <div className='projectBox'>
            <div className='img-project-container'>
              <a href="http://ecommerce-javascript.vercel.app/"  target="_blank">
                <img src="/ecommerce.jpg" width="180%" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
              </a>
            </div>
            <div className='projectName-container'>
              <h2>Ecommerce for students - Javascript</h2>
              <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModalEcommercePupils(true)}><HiPlus className='plus' /></button>
            </div>
          </div>
          {modalEcommercePupils && <div className='modal'>
            <div className='window'>
              <div className='window-header'>
                <button className='x-projects' onClick={() => setModalEcommercePupils(false)}>X</button>
                <h4>Ecommerce Javascript Vanilla</h4>
              </div>
              <div className='window-text'>
                <p className='window-description'>This is an easy ecommerce in Javascript Vanilla for my students</p>
                <p className='window-features'>Features and technologies used:</p>
                <ul className='window-list'>
                  <li>Javascript</li>
                  <li>CSS</li>
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