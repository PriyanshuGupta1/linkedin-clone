import React,{useState,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post'
// import {} onSnapshot,collection} from "firebase/firestore";
import { db} from "../firebase.js";
import firebase from 'firebase/compat/app';
function Feed() {
  const[input,setInput]=useState('')
  const [posts,setPosts]=useState([]);
  // //connecting to firebase
  useEffect(()=>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
    setPosts(
      snapshot.docs.map((doc)=>({
        id:doc.id,
        data:doc.data(),
      }))
    ));
  },[]);
  // useEffect hook ,it fire up the code when feed component loads it also allow u to fire of when component rerenders if we dont pass 2nd argument
  // here e is the event/
  const sendPost = e =>
  {
    e.preventDefault();
    // Preventing the default behaviour
    db.collection('posts').add({
      name:'Priyanshu Gupta',
      description:'this is test',
      message: input,
      photoUrl: ' ',
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  }
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e=>setInput(e.target.value)}type="text" />
                    <button type='Submit' onClick={sendPost} >Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
              <InputOption Icon={ImageIcon}title='Photos' color='#70B5F9'/>
              <InputOption Icon={YouTubeIcon}title='Video' color='green'/>
              <InputOption Icon={EventNoteIcon}title='Event' color='#C0CBCD'/>
              <InputOption Icon={CalendarViewDayIcon}title='Write Article' color='#7FC15E'/>
            </div>
        </div>
        {posts.map(({id,data:{name,description,message,photoUrl}}) =>(
          <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          />
        ))}
    </div>
  )
}

export default Feed