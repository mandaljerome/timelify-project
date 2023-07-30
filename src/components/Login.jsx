import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { regOverlayShow } from '../store/registration'
import { authAction } from '../store/auth'

import './Login.scss'
import logo from '../assets/logo.svg'
import img from '../assets/isometric-design.png'
import error from '../assets/error.svg'

// This is only a simple login page
// wihtout a full authenticaion

const Login = () => {
   const username = useRef()
   const password = useRef()
   const dispatch = useDispatch()
   const users = useSelector((state) => {
      return state.account
   })
   const errorAuth = useSelector((state) => state.auth.authError)

   // To show to the registration form pop-up
   const showRegistrationHandler = () => {
      dispatch(regOverlayShow.open())
   }

   //Simple authentication in the Login page
   const loginHandler = (e) => {
      e.preventDefault()
      const userRef = username.current.value
      const passRef = password.current.value

      const login = users.find((user) => {
         return user.username == userRef || user.password == passRef
      })

      if (login) {
         dispatch(authAction.login())
         dispatch(authAction.removeError())
      } else {
         dispatch(authAction.error())
      }
   }

   return (
      <div className='login'>
         <div className='container'>
            <div className='login-section'>
               <img src={logo} alt='timelify-logo' className='logo' />

               <form onSubmit={loginHandler}>
                  <div className='welcome'>
                     <h3>Welcome Back!</h3>
                     <p>Sign in to continue</p>
                  </div>
                  {errorAuth && (
                     <div className='error'>
                        <img src={error} alt='' />
                        <p>Username or password is incorrect!</p>
                     </div>
                  )}
                  <input
                     type='text'
                     className='username'
                     placeholder='Username'
                     ref={username}
                     required
                  />
                  <input
                     type='password'
                     className='password'
                     placeholder='Password'
                     ref={password}
                     required
                  />
                  <div className='submit-section'>
                     <button type='submit' className='login-button'>
                        Login
                     </button>
                     <a href='#'>Forgot password?</a>
                  </div>
                  <a onClick={showRegistrationHandler} className='register'>
                     Register an account.
                  </a>
               </form>

               <div className='login-footer'>
                  <p>
                     Lorem ipsum dolor sit amet consectetur. Ut felis semper
                     arcu ut est scelerisque pulvinar nunc. Iaculis eleifend
                     viverra nec ultricies in. Mi quis vel lacus vitae mauris.
                     Nunc sit lorem sit leo pretium adipiscing eu molestie.
                  </p>
                  <div className='footer-icons'>
                     <i className='fa-brands fa-facebook-f'></i>
                     <i className='fa-brands fa-instagram'></i>
                     <i className='fa-brands fa-google'></i>
                  </div>
               </div>
            </div>

            <div className='login-isometric'>
               <img src={img} alt='' />
            </div>
         </div>
      </div>
   )
}

export default Login
