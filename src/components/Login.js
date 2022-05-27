import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
// import { Alert } from '@mui/material';
// import ActionAlerts from './Alert.js'
import './Login.css'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch=useDispatch();
    const loginToApp=(e)=>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
            .then(userAuth =>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoURL:userAuth.user.photoURL
                }))
            })
            .catch((error )=>alert(error))
        }        
    const register =() =>
    {
        if(!name)
        {
            return alert("Please enter full name");
        }
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((userAuth) =>{
                userAuth.user
                .updateProfile({
                    displayName:name,
                    photoURL:profilePic,
                })
        .then(()=>{
            dispatch(login({ 
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName: name,
                photoURL:profilePic,    
            }))
        })
    }).catch((error) =>
            alert(error));
    };
 
  return (
    <div className='Login'>
          <img src="https://tccl.libnet.info/images/events/tccl/linkedin.png" alt="" />
          <p>Make the most of your professional life</p>
          <form className='Login'>
              <input  value={name} onChange={e =>setName(e.target.value)} type="text" placeholder='Enter user ID'/>
              <input value={profilePic} onChange={e =>setProfilePic(e.target.value)}  type="text" placeholder='Profile picture URL(optional)' />
              <input value={email} onChange={e =>setEmail(e.target.value)} type="Email" placeholder='Email' />
              <input  onChange={e =>setPassword(e.target.value)} placeholder='Enter Password Here' type="password" />
              <button type="submit" className ="login_Button" onClick={loginToApp}>Sign In</button>
        </form>
      <p>Not a member?{" "}</p><span className='login_register' onClick={register}>Register Now</span>
    </div>
  )
}

export default Login