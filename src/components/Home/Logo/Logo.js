import './Logo.scss';
import LogoM from '../../../assets/images/logo-m.png'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import $ from 'jquery'
import '../../../assets/js/jquery.drawsvg.js'



const Logo = () => {

const outlineLogoRef = useRef();
const solidLogoRef = useRef();

useEffect(() => {

  const mySVG = $("svg").drawsvg({
    duration: 9000,
  });
  mySVG.drawsvg("animate");

  gsap.fromTo(
    solidLogoRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      delay: 4,
      duration: 4,
    }
  )
}, [])

  return (
    <div className='logo-container'>
        <img ref={solidLogoRef} className='solid-logo' src={LogoM} alt="S" />
        <svg
   width="171.21761mm"
   height="173.88458mm"
   viewBox="0 0 171.21761 173.88458"
   version="1.1"
>
    <g 
          className='svg-container'
          fill="none">
    <path
             ref={outlineLogoRef}

     
       d="M 126.92921,173.88458 V 97.473195 L 139.11489,51.611294 V 163.97081 l -12.18568,9.91377 h 32.10272 l 12.18568,-9.91377 h -32.10272 m -30.62106,0 -12.18567,9.91377 H 62.229888 L 74.415559,163.97081 44.041451,52.105184 v 55.470796 l 18.188437,66.3086 M 0,173.88458 V 9.9137686 L 12.185675,0 V 163.97081 L 0,173.88458 h 31.855775 l 12.185676,-9.91377 H 12.185675 m 0,0 H 44.041451 V 52.105184 L 74.415559,163.97081 H 108.49383 L 139.11489,51.611294 V 163.97081 h 32.10272 V 0 h -49.3888 L 92.19553,120.26172 62.56225,0 H 12.185675 Z" />
  </g>
</svg>
    </div>
  )
}

export default Logo