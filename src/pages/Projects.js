import React from 'react';
import { useState } from 'react';
import './projects.css';
import { HiPlus } from 'react-icons/hi';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

function Projects() {

  const [modal, setModal] = useState(false)

  //cheff photos:
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
    gsap.to(currentTarget, { backgroundColor: "#ffffff", color: "#BCCAA1", duration: 0.5, border:"3px solid #BCCAA1" });

  };




  return (
    <div className='projects-container'>

      <h2 className='projects-title'>My projects</h2>
      <div className='projectsBox-container'>

        <div className='projectBox'>
          <div className='img-project-container'>
            <Link to="https://ecommerce-react-lustres.vercel.app/">
              <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
            </Link>
          </div>
          <div className='projectName-container'>
            <h2>Frontend React Developer</h2>
            <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModal(true)}><HiPlus className='plus' /></button>
          </div>
        </div>
        {modal && <div className='modal'><div className='window'><button className='x-projects' onClick={()=>setModal(false)}>X</button><p>Features: React, hooks</p></div> </div>}


        <div className='projectBox'>
          <div className='img-project-container'>
            <Link to="https://ecommerce-react-lustres.vercel.app/">
              <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
            </Link>
          </div>
          <div className='projectName-container'>
            <h2>Frontend React Developer</h2>
            <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModal(true)}><HiPlus className='plus' /></button>
          </div>
        </div>
        {modal && <div className='modal'><div className='window'><button className='x-projects' onClick={()=>setModal(false)}>X</button><p>Features: React, hooks</p></div> </div>}


        <div className='projectBox'>
          <div className='img-project-container'>
            <Link to="https://ecommerce-react-lustres.vercel.app/">
              <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
            </Link>
          </div>
          <div className='projectName-container'>
            <h2>Frontend React Developer</h2>
            <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModal(true)}><HiPlus className='plus' /></button>
          </div>
        </div>
        {modal && <div className='modal'><div className='window'><button className='x-projects' onClick={()=>setModal(false)}>X</button><p>Features: React, hooks</p></div> </div>}


        <div className='projectBox'>
          <div className='img-project-container'>
            <Link to="https://ecommerce-react-lustres.vercel.app/">
              <img src="https://cdn.pixabay.com/photo/2015/02/10/21/28/flower-631765__340.jpg" className='img-projects' onMouseEnter={onEnterImg} onMouseLeave={onLeaveImg}></img>
            </Link>
          </div>
          <div className='projectName-container'>
            <h2>Frontend React Developer</h2>
            <button className='project-button' onMouseEnter={onEnterBtn} onMouseLeave={onLeaveBtn} onClick={() => setModal(true)}><HiPlus className='plus' /></button>
          </div>
        </div>
        {modal && <div className='modal'><div className='window'><button className='x-projects' onClick={()=>setModal(false)}>X</button><p>Features: React, hooks</p></div> </div>}

      </div>

    </div>
  )
}

export default Projects