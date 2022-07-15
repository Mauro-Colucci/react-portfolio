import React, { useEffect, useState, useRef } from 'react'
import './Contact.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
  
      let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
      
      return () => {
                  clearTimeout(timeoutId)
              }
  }, [])

const sendemail = (e)=>{
  e.preventDefault()
  emailjs
    .sendForm(
      'service_htxypaq',
      'template_094e04d',
      refForm.current,
      'K2oo6PxcgbJA_uDUw'
    )
    .then(
      ()=> {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      ()=> {
        alert('Failed to send the message, please try again.')
      }
    )
}

  return (
    <>
    <div className="container contact-page">
        <div className="text-zone">
            <h1>
            <AnimatedLetters 
            letterClass={letterClass} 
            strArray={'Contact me'.split('')} 
            idx={15}/>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sint ipsam voluptatibus dolore maxime tempore, consequatur impedit nobis tempora quod?</p>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendemail} autoComplete="off">
                    <ul>
                        <li>
                            <input type="text" name='name' placeholder='Name' required />
                            <label></label>
                        </li>
                        <li>
                            <input type="email" name='email' placeholder='Email' required />
                            <label></label>

                        </li>
                        <li>
                            <input placeholder='Subject' type='text' name='subject' required />
                            <label></label>

                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                            <label></label>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className="map-wrap">
          <div className="info-map">
            Mauro,
            <br />
            Argentina,
            <br />
            Some street, somewhere, <br />
            in Buenos Aires <br />
            <br />
            <span>colucci.mauro@gmail.com</span>
          </div>
          <MapContainer center={[-34.44098866236576, -58.74097908409169]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-34.44098866236576, -58.74097908409169]}>
              <Popup>Yo might find me here sometimes! xD</Popup>
            </Marker>
          </MapContainer>
        </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact