import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import TypingEffect from 'react-typing-effect'

export default function MyComponent(props) {
  const [typeContact, setTypeContact] = useState('')
  const [displayContactForm, setDisplayContactForm] = useState(true)
  const [displayContactSuccess, setDisplayContactSuccess] = useState(false)
  const [executeBtn, setExecuteBtn] = useState(false)
  const [Submit, setSubmit] = useState(false)
  const [typingAnimation, setTypingAnimation] = useState(true)

  // form to be typed (animation)
  const contact = `
  <h1 class="contact-form__title">Contact</h1>
  <div class="contact-form__code">
    <div class="contact-form__code__block__1">
      fetch(/ayushjain, {

        <div class="contact-form__code__block__2 ">
          method: 'post',
        </div>

        <div class="contact-form__code__block__2 ">

          body: JSON.stringify({

          <div class="contact-form__code__block__3 ">
            <div>
              <label for="name">name</label>: "<input required type="text" id="name" name="entry.1704399793" />",
            </div>

            <div>
              <label for="email">email</label>: "<input required type="email"  id="email" name="entry.1173248319" />",
            </div>

            <div>
              <label for="subject">subject</label>: "<input required id="subject" name="entry.1293319689" />",
            </div>

            <div class="contact-form__code__message-field" id="message-box">
              <label for="message">message</label>: "<textarea  required id="message" name="entry.1052997958" ></textarea>"
            </div>

          </div>
            <div class=">})</div>
          </div>
        
        <div class=">});</div>
    </div>
  </div>
  `

  // submit animation
  const submitForm = (e) => {
    setTimeout(() => {
      setDisplayContactForm(false)
      setDisplayContactSuccess(true)
    }, 2000);
    setSubmit(true)
  }

  // stop contact form typing animation
  const stopTyping = () => {
    setTypingAnimation(false);
    setExecuteBtn(true)
  }


  // typing animation
  useEffect(() => {
    let i = 0
    const intervalId = setInterval(() => {
      setTypeContact(contact.slice(0, i))
      i++
      if (i > contact.length) {
        setExecuteBtn(true)
        clearInterval(intervalId)
      }
    }, 5)
    return () => clearInterval(intervalId)
  }, [contact])


  return (
    <>
      <iframe name='dummyframe' id='dummyframe' style={{ display: 'none' }} />

      {/* contact form */}
      <div onClick={stopTyping} className='contact-form' style={displayContactForm ? { display: 'flex' } : { display: 'none' }}>

        <form onSubmit={submitForm} action='https://docs.google.com/forms/d/e/1FAIpQLScY_H0KpEoQ5jvG2CTyXHaKv0WPuNxOI7vVnUltsp7Uwk9hXg/formResponse' target='dummyframe'>

          <div dangerouslySetInnerHTML={{ __html: typingAnimation ? typeContact : contact }} />

          <div className="btn-container" style={executeBtn ? { display: 'block' } : { display: 'none' }}>
            <button style={!Submit ? { display: 'block' } : { display: 'none' }} type="submit">Execute</button>

            <div style={Submit ? { display: 'block' } : { display: 'none' }} id='progress-bar-container' >
              <div id='progress-bar'></div>
            </div>
          </div>
        </form>
      </div >


      {/* submit animation */}
      <div className='contact-form' style={displayContactSuccess ? { display: 'block' } : { display: 'none' }}>
        <div>
          <h1 class='contact-form__title'>Contact</h1>
        </div>
        <div className="submit-message">

          {displayContactSuccess ? (
            <div>
              <TypingEffect style={{ color: 'white' }} text={['{ success: true }']} eraseDelay={999999999} /></div>)
            : ('')
          }

        </div>
      </div>
    </>
  )
}
