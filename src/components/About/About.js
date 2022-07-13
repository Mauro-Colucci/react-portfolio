import React, { useEffect, useState } from 'react'
import {
    faCss3,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import mongoDB from '../../assets/images/mongodb-icon.svg'
import nodeJs from '../../assets/images/nodejs.svg'
import expressJs from '../../assets/images/expressjs-icon.svg'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
  
      let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      
      return () => {
                  clearTimeout(timeoutId)
              }
  }, [])
  return (
    <>
    <div className='container about-page'>
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={'About me'.split('')}
                idx={15}
                />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <img src={mongoDB} alt="Mongo DB" />
            </div>
            <div className="face2">
              <img src={nodeJs} alt="Node JS" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <img src={expressJs} alt="Express JS" />
            </div>
          </div>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
    
  )
}

export default About