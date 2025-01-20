import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {

      // An error happened.
      navigate("/error");
    });
  }


  useEffect(()=> {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName, photoURL} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName , photoURL : photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () => unsubscribe();
},[dispatch, navigate]);
  return (
    <div className='absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48' src={LOGO} alt="logo"/>
      
      {user && (<div className='flex items-center'> 
        <img className='h-5' src={user.photoURL} alt='usericon'/>
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
     )}
    </div>
)
}

export default Header



