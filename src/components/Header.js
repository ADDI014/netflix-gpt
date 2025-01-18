import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {

      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"/>
      <div className='flex items-center'> 
        <img className='h-5' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt='usericon'/>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header



