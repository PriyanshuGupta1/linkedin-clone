import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
function Sidebar() {
    const recentItem =(topic)=>(
        <div className="sideBar_recentItem">
            <span className="sideBar_hash">#</span>
            <p>{topic}</p>
        </div>
    );
      return (
    <div className='sideBar'>
        <div className="sideBar_top">
            <img src="https://i.pinimg.com/736x/39/3e/05/393e057e25ddf490c2f89a42ffcb8c77--beautiful-sky-beautiful-places.jpg" alt="" />
            <Avatar className='sideBar_avatar'/>
            <h2> Priyanshu Gupta</h2>
            <h4> priyanshulrn@gmail.com</h4>
        </div>
        <div className="sideBar_stats">
            <div className="sideBar_stat">
                <p>Who Viewed You?</p>
                <p className='sideBar_statNumber'>2543</p>
            </div>
            <div className="sideBar_stat">
                <p>View on Post?</p>
                <p className='sideBar_statNumber'>2343</p>
            </div>

        </div>
        <div className="sideBar_bottom">
            <p>Recent</p>
            {recentItem("React")}
            {recentItem("Programming")}
            {recentItem("Software Engineer")}
            {recentItem("Developer")}
        </div>
    </div>
  )
}

export default Sidebar