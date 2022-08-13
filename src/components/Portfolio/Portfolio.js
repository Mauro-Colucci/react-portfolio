import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './Portfolio.scss'
import AnimatedLetters from '../AnimatedLetters'
import {getDocs, collection} from 'firebase/firestore';
import {db} from '../../firebase'

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
  }, []);

  const renderPortfolio = (portfolio) => {
    return(  
      <>
       {
          portfolio.map(({cover,title,description,url,git},idx)=>{
            return (
              <div className='image-box' key={idx}>
                <img src={cover} alt="portfolio" className='portfolio-image' />
                <div className="content">
                  <p className="title">{title}</p>
                  <h4 className="description">{description}</h4>
                  <div className="flex-cont">
                    <button className="btn" onClick={()=>window.open(url)}>Demo</button>        <button className="btn git" onClick={()=>window.open(git)}>Code</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </> 
    )
  }

  useEffect(()=> {
      //moved async f inside useeffect
      const getPortfolio = async() => {
      const querySnapshot = await getDocs(collection(db,'portfolio'));
      //foreach? I don't think I need map here
      setPortfolio(querySnapshot.docs.map((doc)=> doc.data()))
    }

    getPortfolio()
  },[])

 


  return (
    <>
    <div className='container portfolio-page' id='port-test'>
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores officia deleniti quas quia facilis tenetur, reprehenderit nemo et quidem!</p>
      </div>
      <div className='images-container'>
        {renderPortfolio(portfolio)}
      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Portfolio