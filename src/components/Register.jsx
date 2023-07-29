import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { regOverlayShow } from '../store/registration'
import { accountAction } from '../store/registration'

import './Register.scss'
import success from '../assets/success.svg'

// This is the Register modal
// with simple registration
// without authentication

const Register = () => {
   const nameRef = useRef()
   const usernameRef = useRef()
   const passwordRef = useRef()
   const dispatch = useDispatch()
   const [succesReg, setsuccesReg] = useState(false)

   // To close the Regitration Modal
   const registrationCloseHandler = () => {
      dispatch(regOverlayShow.close())
      setsuccesReg(false)
   }

   // To submit in the date to the store.
   const submitHandler = (e) => {
      e.preventDefault()

      const name = nameRef.current.value
      const username = usernameRef.current.value
      const password = passwordRef.current.value

      dispatch(accountAction.newUser({ name, username, password }))
      setsuccesReg(true)
   }

   return (
      <div className='register'>
         <div className='backdrop'></div>

         <div className='register-form'>
            <form onSubmit={submitHandler}>
               <div className='register-title'>
                  <p className='header'>Account Registration</p>
                  <p className='subtitle'>Please fill in the form below.</p>
               </div>

               {succesReg && (
                  <div className='success'>
                     <img src={success} alt='' />
                     <p>Successfully registered your account!</p>
                  </div>
               )}

               <input
                  type='text'
                  placeholder='Full Name'
                  ref={nameRef}
                  required
               />
               <input
                  type='text'
                  placeholder='Username'
                  ref={usernameRef}
                  required
               />
               <input
                  type='password'
                  placeholder='Password'
                  ref={passwordRef}
                  required
               />
               <div className='button-control'>
                  <button type='submit' className='submit'>
                     Submit
                  </button>
                  <button
                     type='button'
                     className='cancel'
                     onClick={registrationCloseHandler}
                  >
                     Close
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Register
