import React ,{forwardRef }from 'react'
import { Avatar } from '@mui/material'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
const Post=forwardRef(({name,description,message,photoUrl},ref) =>{
    // const [follow,setFollow]=useState('+Follow')
    // const setToFollow =()=>{
    //     if(follow==='Un')
    //         setFollow('Following')
    //     else 
    //         setFollow('Unfollowed') 
    // }

    return (
    <div ref={ref} className='Post'> 
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            {/* <div className='post_Follow' >
                <button className='btn-follow' onClick={setToFollow} value={follow} ></button>
            </div> */}
        </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color="gray"/>
            <InputOption Icon={ChatIcon} title='Comment' color="gray"/>
            <InputOption Icon={ShareIcon} title='Share' color="gray"/>
            <InputOption Icon={SendIcon} title='Send' color="gray"/>
            </div>
    </div>
  )
})

export default Post