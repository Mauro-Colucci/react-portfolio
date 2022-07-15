import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'
import Logo from '../../assets/images/logo-m.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faGear, faEye, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngellist, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const iconLinks = [
        {
            id: 1,
            ico: faHome,
            classy: 'home-link',
            where: '/',

        },
        {
            id: 2,
            ico: faUser,
            classy: 'about-link',
            where: '/about',

        },
        {
            id: 3,
            ico: faGear,
            classy: 'skills-link',
            where: '/skills',

        },
        {
            id: 4,
            ico: faEye,
            classy: 'portfolio-link',
            where: '/portfolio',

        },
        {
            id: 5,
            ico: faEnvelope,
            classy: 'contact-link',
            where: '/contact',

        }
    ]

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logo subtitle" />
            </Link>
            <nav className='desktop-nav'>
                {iconLinks.map(({ id, ico, classy, where }) => (
                    <NavLink key={id} exact='true' activeclassname='active' className={classy} to={where}>
                    <FontAwesomeIcon icon={ico} />
                    </NavLink>
                ))}
            </nav>
            {nav && (
                <nav className='mobile-nav'>
                    {iconLinks.map(({ id, ico, classy, where }) => (
                        <NavLink onClick={() => setNav(!nav)} key={id} exact='true' activeclassname='active' className={classy} to={where}>
                        <FontAwesomeIcon icon={ico} />
                        </NavLink>
                    ))}
                </nav>
                
            )}

            <div onClick={() => setNav(!nav)} className='nav-controls'>
                {nav ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
            </div>
            
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
                    <a href="https://angel.co/u/mauro-colucci" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faAngellist} />
                    </a>
                </li>
                <li>
                    <a href="mailto:colucci.mauro@gmail.com" target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar