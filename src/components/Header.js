import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch} from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
function Header() {
  
  
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
            <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png" alt="Linekdin" />
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