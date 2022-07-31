import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa'
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import './home.css';
import { TextPlugin } from 'gsap/TextPlugin.js';
import { gsap } from 'gsap';




function Home() {



  //---h1 animation -----
  useEffect(() => {
    //register Text Plugin
    gsap.registerPlugin(TextPlugin);

    gsap.to("h1", {
      duration: 5,
      text: {
        value: "Valeria Paulina Lustres",
        padSpace: true,
      },
      ease: "power2",
      repeat: 100,
    });
  }, [])


  //--skills animation---

  const skillsRef = useRef();
  const skills = gsap.utils.selector(skillsRef);
  const tl = useRef();




  const handleSkills = () => {


    tl.current = gsap.timeline()
      .to(skills(".opacity"), {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        delay: 0.1,
        stagger: 0.1,
        rotate: 360,
      })
    // gsap.to(skillsRef.current, { opacity:1, duration:3, stagger:0.5});

  };

  //----------timeline animation

  const tl2 = useRef();
  const homeRef = useRef();

  const home = gsap.utils.selector(homeRef);
  // const aboutImgTwo = gsap.utils.selector(aboutImgTwoRef);
  // const aboutText = gsap.utils.selector(aboutTextRef);

  useEffect(() => {
    //  gsap.to(aboutTitle.current, { y: 80, duration: 3 });
    //  gsap.registerPlugin(TextPlugin);
    /*
      gsap.to(".welcome", {
        duration: 3,
        text: {
          value: "Bienvenidos a Mi Pastelería",
          padSpace: true,
        },
        ease: "power2",
        repeat: 2,
      });
  */
    tl2.current = gsap.timeline()


      .to(home(".im-home"), {
        duration: 1.5,
        opacity: 1,
        scale: 2,
      })

      .to(home("h1"), {
        duration: 1.5,
        opacity: 1,

      }, "-=0.5")

      .to(home(".mail-home"), {
        duration: 1.5,
        rotate: 360,
        opacity: 1,
      }, "-=1.5")

      .to(home(".job-home"), {
        duration: 3,
        opacity: 1,
        scale: 1,
        translateY: 30,
      }, "-=1.5")

      .to(home(".buttonSkills-home"), {
        duration: 1.5,
        scale: 1.5,
        opacity: 1,
      }, "-=1.5")

      .to(home(".photo-home"), {
        duration: 1.5,
        opacity: 1,
      }, "-=1")

      .to(home(".cv-home"), {
        duration: 1.5,
        opacity: 1,
      }, "-=1.5")

      .to(home(".mail-home"), {
        duration: 1.5,
        backgroundColor: "#fcf6bd",
        color: "#88AB8A",
      }, "-=1")

      .to(home(".buttonSkills-home"), {
        duration: 1.5,
        rotate: 360,
        backgroundColor: "#AF8B9F",
        color: "#ffffff"
      }, "-=0.5")

      .to(home(".cv-home"), {
        duration: 1,
        backgroundColor: "#D9AEAC",
        scale: 0.5
      }, "-=2")

      .to(home(".mail-home"), {
        duration: 1,
        backgroundColor: "#BCCAA1",
        color: "#ffffff"
      }, "-=1")

      .to(home(".im-home"), {
        duration: 1.5,
        rotateX: 360,
      }, "-=1")

      .to(home(".buttonSkills-home"), {
        duration: 1.5,
        backgroundColor: "#fcf6bd",
        color: "#88AB8A"
      }, "-=0.5")

      .to(home(".cv-home"), {
        duration: 1.5,
        backgroundColor: "#D9AEAC",
        scale: 1
      }, "-=2")



      .to(home(".job-home"), {
        duration: 1.5,
        translateY: -5,
      }, "-=1")

      .to(home(".buttonSkills-home"), {
        duration: 3,
        backgroundColor: "#ffffff",
        color: "#88AB8A",
        scale: 1,
      }, "-=0.5")

      .to(home(".cv-home"), {
        duration: 2,
        backgroundColor: "#ffffff",
        color: "#88AB8A",
        rotate: 360,
      }, "-=2")

      .to(home(".mail-home"), {
        duration: 1,
        backgroundColor: "#ffffff",
        color: "#88AB8A",
        rotateX: 360,
      }, "-=1")

  }, []);





  return (
    <div className='home-container'>
      <section className='home-container-sectionOne'>
        <div className='photoButtonText-home' ref={homeRef}>
          <div className='ButtonText-home' >
            <div className='text-home'>
              <p className='im-home'>I'm</p>
              <h1></h1>
              <h2 className='job-home'>Frontend React Developer</h2>
            </div>
            <div className='buttons-home'>
              <div className='cvMailButtons-home'>
                <button className='cv-home'>
                  <Link to="./cv-Valeria-Lustres-Frontend-React.pdf" target="_blank" rel="noopener noreferrer" download="cv-Valeria-Lustres-Frontend-React.pdf" className='pdfLink'>
                    <HiOutlineDocumentDownload className='icons-home'></HiOutlineDocumentDownload>CV
                  </Link></button>
                <NavLink to="/contact"><button className='mail-home mov2'><FiMail className='icons-home'></FiMail></button></NavLink>
              </div>
              <button className='buttonSkills-home' onClick={handleSkills} >Skills</button>

            </div>
          </div>
          <div className='photo-home'>
            <img src="./cv.jpg" className='img-home' alt='Valeria Paulina Lustres'></img>
          </div>
        </div>
        <div className='skills-home' ref={skillsRef}>


          <Link to="https://www.w3.org/html/" target="_blank" rel="noreferrer" className='opacity' > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://sass-lang.com" target="_blank" rel="noreferrer" className='opacity'> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className='opacity'> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://es.reactjs.org/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react js" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://getbootstrap.com" target="_blank" rel="noreferrer" className='opacity'> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://git-scm.com/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" className="logo-home" /> </Link>


          <Link to="https://github.com/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/github/github-tile.svg" alt="github" width="40" height="40" className="logo-home" /> </Link>


          <Link to="https://firebase.google.com/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" className="logo-home" /> </Link>


          <Link to="https://www.photoshop.com/en" target="_blank" rel="noreferrer" className='opacity'> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://greensock.com/" target="_blank" rel="noreferrer" className='opacity'><img src="./logos/greensock.png" alt="greensock" width="40" height="40" className="logo-home" /></Link>

          <Link to="https://developer.mozilla.org/es/docs/Glossary/SQL" target="_blank" rel="noreferrer" className='opacity'> <img src="./logos/sql.png" alt="sql" width="60" height="40" /> </Link>

          <Link to="https://www.mysql.com/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg" alt="my sql" width="80" height="40" className="logo-home" /> </Link>

          <Link to="https://www.mongodb.com/es" target="_blank" rel="noreferrer" className='opacity'> <img src="./logos/mongodb.png" alt="Mongo db" width="100" height="30" className="logo-home" /> </Link>

          <Link to="https://www.figma.com/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://nodejs.org/es/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="node" width="90" height="40" className="logo-home" /> </Link>


          <Link to="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://wordpress.com/es/" target="_blank" rel="noreferrer" className='opacity'> <img src="https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg" alt="wordpress" width="40" height="40" className="logo-home" /> </Link>

          <Link to="https://nextjs.org/" target="_blank" rel="noreferrer" className='opacity'><img src="./logos/next.png" alt="next js" width="40" height="40" className="logo-home" /></Link>



        </div>

      </section>
      <section className='home-container-sectionTwo'>
        <div className="about-left-container">
          <h2 className='aboutMe-title'>About me</h2>
          <p className='who-about'>Who am I?</p>
          <p className='aboutMe-text'>passionate, doctor, team working, multiculture, soft skillsfd jksdakjf sadfsdfsd afsdf sad fsd fsad fas df sdf sadf sda fsd fsdfdsfasdjkfhksajdh fjdshkfhsadkjhf kjashdkjfh sdkjhfuiewh uifsf jsdb kjsdkj hkudshkf hdsjkfhiu shfsdhf iusdh fiusdfisdiuhdsiusdhfuis hf dsiuh fsdh jak</p>

          <div>
            <FaGraduationCap className='icon-footer' />
            <p className='currentlyStudying-about'>I'm currently studying English and Backend.</p>
          </div>

          <div className='job-container-about'>
            <div className='job-about'>
              <div className='logo-jobTitle-about'>
                <img src="./logos/techo.png" className='techo-icon'></img>
                <h3>2022 - current</h3>
              </div>
              <p className='description-job'>I'm collaborating as Frontend, React and Backend Developer</p>
            </div>

            <div className='job-about'>
              <div className='logo-jobTitle-about'>
                <img src="./logos/coderhouse.png" className='coder-icon'></img>
                <h3 >2022 - current</h3>
              </div>
              <p className='description-job'>I'm working as Javascript tutor teacher</p>
            </div>


          </div>
        </div>

        <div className="about-right-container">
          <h2 className='certifications-title'>My certifications</h2>
          <div className='certification-container-about'>

            <div className='certification-about'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3>Web Development | 2021</h3>
              </div>
              <p className='description-certification'>HTML, CSS, SASS, Bootstrap</p>
            </div>

            <div className='certification-about'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3>Javascript | 2022</h3>
              </div>
              <p className='description-certification'>JavaScript, Node Js </p>
            </div>

            <div className='certification-about'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3>React js | 2022</h3>
              </div>
              <p className='description-certification'>React Js, Firebase, React icons, Styled components, Material UI</p>
            </div>

            <div className='certification-about'>
              <div className='logo-title-about'>
                <img src="/logos/efset.png" alt="EF SET" className='icon-footer' ></img>
                <h3>EF SET</h3>
              </div>
              <p className='description-certification'>B1 - Upper Intermediate </p>
            </div>

          </div>

        </div>



      </section>
    </div>

  )
}

export default Home