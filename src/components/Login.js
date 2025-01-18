import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //validate the form data
    // checkValidData(email , password);
    // console.log(email.current.value); 
    // console.log(password.current.value);

    const message =  checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });

    }
    else{
      //sign In Logic
  signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);

  });
    }
  }


  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_small.jpg" alt="Netflix" />
      </div>


      <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-8 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
        <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>
        )}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/>
        <input ref={password} type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-2 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
     
    </div>
  )
}

export default Login
