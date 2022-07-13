import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-m.png'
import './Home.scss'
import Loader from 'react-loaders'
import Logo from './Logo/Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  return (
   <>
    <div className='container home-page'>
      <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>,</span>
            <br/>
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>

            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass} strArray={'auro'.split('')} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={'web developer.'.split('')} idx={22}/>
          </h1>
          <h2>Full-stack software engineer</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo/>
    </div>
    <Loader type='pacman'/>
   </>
  )
}

export default Home