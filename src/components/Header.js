import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1653478594~hmac=38edcb42a47c836e68898777a454b7fa" alt="Linekdin" />
            <div className="header_search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Business"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
            <HeaderOptions avatar={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} title='me'/> 
        </div>
    </div>
  )
}
export default Header