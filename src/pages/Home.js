import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa'
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import './home.css';
import { TextPlugin } from 'gsap/TextPlugin.js';
import { gsap } from 'gsap';
import { useIntersection } from "react-use";





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

  //----------timeline animation introduction------------------

  const tl2 = useRef();
  const homeRef = useRef();

  const home = gsap.utils.selector(homeRef);
  // const aboutImgTwo = gsap.utils.selector(aboutImgTwoRef);
  // const aboutText = gsap.utils.selector(aboutTextRef);

  
  useEffect(() => {
 
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

      .to(home(".job-home2"), {
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

      .to(home(".job-home2"), {
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


  //-----------animation on scroll one--------------------
  const oneHomeRef = useRef();

  const intersectionHomeOne = useIntersection(oneHomeRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInHomeOne = element => {
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

  const fadeOutHomeOne = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionHomeOne && intersectionHomeOne.intersectionRatio < 0.5
    ? fadeOutHomeOne(".fadeInHomeOne")
    : fadeInHomeOne(".fadeInHomeOne");

  //---------------phrase animation----------

  const phraseHomeRef = useRef();

  const intersectionHomePhrase = useIntersection(phraseHomeRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInHomePhrase = element => {
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

  const fadeOutHomePhrase = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionHomePhrase && intersectionHomePhrase.intersectionRatio < 0.5
    ? fadeOutHomePhrase(".fadeInHomePhrase")
    : fadeInHomePhrase(".fadeInHomePhrase");



  //-----------animation on scroll section three--------------------
  const threeHomeRef = useRef();

  const tl3 = useRef();



  const intersectionHomeThree = useIntersection(threeHomeRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  });

  const fadeInHomeThree = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -40,
      ease: "power4.out",
      
      duration: 2,
      stagger: {
        amount: 5
      }
    });
    

  };


  const fadeOutHomeThree = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersectionHomeThree && intersectionHomeThree.intersectionRatio < 0.5
    ? fadeOutHomeThree(".fadeInHomeThree")
    : fadeInHomeThree(".fadeInHomeThree");




  return (
    <div className='home-container'>
      <section className='home-container-sectionOne'>
        <div className='photoButtonText-home' ref={homeRef}>
          <div className='ButtonText-home' >
            <div className='text-home'>
              <p className='im-home'>I'm</p>
              <h1></h1>
              <h2 className='job-home'>Frontend React Developer</h2>
              <h2 className='job-home2'>UX/UI Designer</h2>
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

      <section className='home-container-sectionPhrase' ref={phraseHomeRef}>
        <p className='phrase fadeInHomePhrase'>"The <span className='wo fadeInHomePhrase'>wo</span>man never knows he is capable until he tries"</p>
      </section>
      <section className='home-container-sectionTwo' ref={oneHomeRef}>
        <div className="about-left-container">
          <h2 className='aboutMe-title  fadeInHomeOne'>About me</h2>
          <p className='who-about  fadeInHomeOne'>Who am I?</p>
          <p className='aboutMe-text  fadeInHomeOne'>I am a Doctor who discoverd her passion: Frontend Development. I love studying to improve my skills. I enjoy working in a multi-culture team and solving problems. I'm very responsible and creative because innovation is the best!</p>

          <div className='gorro-texto-home fadeInHomeOne '>
            <FaGraduationCap className='icon-footer ' />
            <p className='currentlyStudying-about '>I'm currently studying English and Backend.</p>
          </div>

          <div className='job-container-about  '>
            <div className='job-about fadeInHomeOne'>
              <div className='logo-jobTitle-about'>
                <img src="./logos/techo.png" className='techo-icon'></img>
                <h3 >2022 - current</h3>
              </div>
              <p className='description-job '>I'm collaborating as Frontend, React and Backend Developer</p>
            </div>

            <div className='job-about fadeInHomeOne '>
              <div className='logo-jobTitle-about'>
                <img src="./logos/coderhouse.png" className='coder-icon'></img>
                <h3 className=''>2022 - current</h3>
              </div>
              <p className='description-job '>I'm working as Javascript tutor teacher</p>
            </div>


          </div>
        </div>

        <div className="about-right-container">
          <h2 className='certifications-title fadeInHomeOne'>My certifications</h2>
          <div className='certification-container-about'>

            <div className='certification-about fadeInHomeOne'>
              <div className='logo-title-about '>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3 >Web Development | 2021</h3>
              </div>
              <p className='description-certification '>HTML, CSS, SASS, Bootstrap</p>
            </div>

            <div className='certification-about fadeInHomeOne'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3>Javascript | 2022</h3>
              </div>
              <p className='description-certification'>JavaScript, Node Js </p>
            </div>

            <div className='certification-about fadeInHomeOne'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3>React js | 2022</h3>
              </div>
              <p className='description-certification'>React Js, Firebase, React icons, Styled components, Material UI</p>
            </div>

            <div className='certification-about fadeInHomeOne'>
              <div className='logo-title-about'>
                <img src="/logos/coder.png" alt="Coderhouse" className='icon-footer' ></img>
                <h3><a href="https://www.coderhouse.com/certificados/62977d467fc107001a771947?lang=es" target="_blank" className='noLinkJob'>Frontend React Development Career | 2022</a> </h3>
              </div>
              <p className='description-certification'>Frontend Development, React JS</p>
            </div>

            <div className='certification-about fadeInHomeOne'>
              <div className='logo-title-about'>
                <img src="/logos/efset.png" alt="EF SET" className='icon-footer' ></img>
                <h3><a href="https://www.efset.org/cert/P4i3hs" target="_blank" className='noLinkJob'>EF SET</a></h3>
              </div>
              <p className='description-certification'>B1 - Upper Intermediate </p>
            </div>

          </div>

        </div>



      </section>
      <section className='home-container-sectionThree' ref={threeHomeRef} >
        <h2 className='certifications-title fadeInHomeThree '>My Experience</h2>
        <div >
          <h3 className='left experience-text   fadeInHomeThree '>More than 10 years ago I developed my first photography website 📷,</h3>
          <h3 className='left experience-text  fadeInHomeThree'>but I am a Doctor 🩺 and I was working hard in "The End of the World" ⛰️...</h3>
          <div className='right'>
            <img src="./ushuaia.jpg" className='ushuaia fadeInHomeThree' ></img>
          </div>

          <h3 className='right experience-text  fadeInHomeThree'>...so I couldn't continue in IT development.</h3>

          <h3 className='left experience-text  fadeInHomeThree'>In 2020 I was selected to join a team to work as a Frontend Developer Trainee.</h3>
          <h3 className='left experience-text  fadeInHomeThree'>I studied hard and I got experience...</h3>
          <h3 className='right experience-text  fadeInHomeThree'>...and I finally got my <a href="https://www.coderhouse.com/certificados/62977d467fc107001a771947?lang=es" target="_blank" className='noLink'>Frontend React Development Career Certification</a>  📜 in 2022.</h3>
          <h3 className='left experience-text fadeInHomeThree '>I have designed and developed many projects. You can see 👀 some of them in <Link to="./projects" className='noLink'>"My Projects"</Link> section.</h3>
          <h3 className='right experience-text  fadeInHomeThree'>Also you can download my resume <button className='cv-footer'><Link to="./cv-Valeria-Lustres-Frontend-React.pdf" target="_blank" rel="noopener noreferrer" download="cv-Valeria-Lustres-Frontend-React.pdf" className='pdfLinkFooter'>
                        <HiOutlineDocumentDownload className='icons-cv-footer'></HiOutlineDocumentDownload>CV
                    </Link></button> to read about my working experience in detail!</h3>
          <h3 className='center experience-text fadeInHomeThree margin-top'>I believe perseveration is the key...</h3>
          <h3 className='center experience-text  fadeInHomeThree pink'>...and you have to ❤️love what you do❤️.</h3>
        </div>






      </section>
    </div>

  )
}

export default Home