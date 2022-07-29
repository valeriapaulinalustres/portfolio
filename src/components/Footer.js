import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../pages/home.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='overCopyright-container'>
                <div className='linksFooter-container'>
                    <button className='cv-footer'><Link to="./cv-Valeria-Lustres-Frontend-React.pdf" target="_blank" rel="noopener noreferrer" download="cv-Valeria-Lustres-Frontend-React.pdf" className='pdfLinkFooter'>
                        <HiOutlineDocumentDownload className='icons-cv-footer'></HiOutlineDocumentDownload>CV
                    </Link></button>
                    <Link to="https://www.linkedin.com/in/valeria-paulina-lustres/" className='linkLinkedin-footer'><BsLinkedin className='icon-footer linkedin' /></Link>
                    <Link to="https://github.com/valeriapaulinalustres" className='linkGithub-footer'><BsGithub className='icon-footer' /></Link>


                    <Link to="mailto:valeriapaulinalustres@yahoo.com.ar?subject=contacto%20desde%20web" target="_blank" className='linkGithub-footer'><HiMail className="iconMail-footer" /></Link>
                    <Link to="https://wa.me/5491121714493/?text=Hola%20Valeria" target="_blank"
                        className="linkIconWa-footer"><img src="https://www.vectorlogo.zone/logos/whatsapp/whatsapp-icon.svg" alt="whatsapp" className='icon-footer'></img></Link>


                </div>
                <div className='text-footer'>
                    <p className='thanks-footer'>Thanks for visiting, have a nice day!</p>
                    <p>(+549) 11 21714493</p>
                    <p>valeriapaulinalustres@yahoo.com.ar</p>
                </div>
            </div>
            <div className='copyright-container'>
                <p className='justify-text'>Copyright</p>
                <p className='justify-text'>Portfolio Features: React, JavaScript, CSS, HTML, GSAP, react-icons, NodeJs, Git, Github, Vercel, Figma, Vector Logo Zone.</p>
            </div>

        </div>
    )
}

export default Footer