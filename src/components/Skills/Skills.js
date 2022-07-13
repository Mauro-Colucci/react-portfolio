import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './Skills.scss'
import skillsData from '../../data/skills.json'


const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: '#fff',
      outlineThickness: 0.5,
      outlineColour: '#FE0853',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      pinchZoom: true,
      fadeIn: 3000,
      initial: [0.1, -0.1],
      depth: 1.4,
    };
    try {
      TagCanvas.Start('myCanvas', 'taglist', tagCanvasOptions);
    } catch (err) {
      console.log('Canvas error.');
      console.log(err);
    }
  }, []);
     
  useEffect(() => {

    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, []);

const renderSkills = (skill) => {
  return (
    <ul>
      {skill.map(({tech,url}, i)=>(
        <li key={i}>
          <a href={url} target="_blank" rel='noreferrer'>{tech}</a>
        </li>
        ))
      }
    </ul>
  )
}

return (
  <>
  <div className='container skills-page'>
      <div className="text-zone">
          <h1>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills & '.split('')}
              idx={15}
              />
               <span className='mob-line'>
                  <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'Experience'.split('')}
                  idx={20}
                  />
               </span>
          </h1>
          <p>Lorem ipsum dolor <span className="tech-tag">HTML5</span> sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et blanditiis! Voluptatum doloremque reiciendis distinctio ullam natus facilis atque totam!</p>
      </div>

      <div className="skills-charts">
            <canvas width="500" height="500" id="myCanvas">
            </canvas>
            <div id='taglist'>
            {renderSkills(skillsData.skills)}
            </div>
        </div>
  </div>
  <Loader type='pacman'/>
  </>
  
)
}

export default Skills