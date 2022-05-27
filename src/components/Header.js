import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector} from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';
function Header() {
  const user=useSelector(selectUser)
  
  const[style,setStyle]=useState("setStyle2")
  const changeStyle1 =()=>{
    if(style==="setStyle1")
      setStyle("setStyle2")
  }
  const changeStyle2 =()=>{
    if(style==="setStyle2")
      setStyle("setStyle1")
  }
  const dispatch=useDispatch();
  const logoutOfApp=()=>{
    auth.signOut();
    dispatch(logout())
  }
  return (
    <div className='header'>
        <div className="header_left">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1653513853~hmac=05f9f87532f8a3282e9b102ba5091f8e" alt="Linekdin" />
            <div className="header_search">
                <SearchIcon/>
                <input className={style} placeholder="Search" type="text" onClick={changeStyle1} onMouseLeave={changeStyle2}/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
            <HeaderOptions onClick={logoutOfApp} avatar={true} title='me'/>
        </div>
    </div>
  )
}
export default Header