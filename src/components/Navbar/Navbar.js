import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import Logo from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGear, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logo subtitle" />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
                    <FontAwesomeIcon icon={faGear} />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='portfolio-link' to='/portfolio'>
                    <FontAwesomeIcon icon={faEye} />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maurocolucci/" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Mauro-Colucci" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </li>
                <li>
                    <a href="skype:live:skypelinkhere" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faSkype} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar