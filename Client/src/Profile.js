import React,{useState,useEffect} from 'react'
import Header from './Header/Header'
import Blog from './blogger-logo-icon-png-10157.png'
import Chat from './facebook-messenger-logo-png-44109.png'
import Vid from './video-icon-8038.png'
import Cam from './cam.svg'
import Audio from './sound-png-35796.png'
import CommentIcon from '@mui/icons-material/Comment';

import ShareIcon from '@mui/icons-material/Share';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
const User =localStorage.getItem("twittertoken")
export default function Profile() {
  const[res,setRes]=useState([])
  const[username,setUsername]=useState('')
  const {id} = useParams();
  const navigate = useNavigate();
  const uid = jwtDecode(User).id
  useEffect(() => {
axios.get(`http://18.142.54.38:5000/video/post/${uid}`).then(res =>setRes(res.data))

  },[]);
  return (
    <div style={{backgroundColor:"#021935",height:"10000px"}}>
       <Header />
       <div className='container' >
      <div className='row'>
        <div className='col-9'>
       <div style={{marginLeft:"30%",marginTop:"30px",backgroundColor:"white",width:"500px",height:"150px",borderRadius:"10px",boxShadow:"inherit"}}>
       <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

             <div className="item" style={{cursor:"pointer"}}>
              <img src={Cam} alt='cam' style={{marginLeft:"20px",width:"80px",color:'white',marginRight:"10px",marginTop:"30px",height:"80px"}} />
              <span style={{marginLeft:"20px",marginRight:"13px"}} className="caption">Camera</span>
             </div>
             <div className="item" style={{cursor:"pointer"}}>
                   <img src={Vid} alt='video' style={{color:'white',height:"80px",marginRight:"10px",width:"80px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Videos</span>
              </div>
              <div className="item" style={{cursor:"pointer"}}>
                   <img src={Audio} alt='video' style={{color:'white',height:"70px",width:"70px",marginRight:"",marginTop:"30px"}} />
                   <span style={{marginRight:"",marginTop:"9px"}} className="caption">Audio</span>
              </div>
              <div className="item" style={{cursor:"pointer"}}>
                   <img src={Blog} alt='video' style={{color:'white',height:"85px",width:"100px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Blog</span>
                 </div>
                   <div className="item" style={{cursor:"pointer"}}>
                   <img src={Chat} alt='video' style={{color:'white',height:"80px",width:"90px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Chat</span>
                </div>
              </div>
            </div>
            {[...res].reverse().map(d => (
          <div style={{marginLeft:"19.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img src={d.profile} style={{marginTop:"30px",marginRight:"10px",marginLeft:"20px",height:"100px"}} alt='sg'/>
          <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
         <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>{d.username} <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
          </div>
          <ReactPlayer url={d.video} controls width='500px'  alt='new' />
          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>{d.tags}</p>
          </div>
          </div>

       ))}



          </div>
          <div className='col-3' style={{marginTop:"30px",backgroundColor:"white",width:"300px",height:"500px",borderRadius:"10px",boxShadow:"inherit"}}>
          <p style={{marginTop:"10px"}}>username <span style={{float:"right",marginRight:"10px"}}>Joined Today</span></p>
          <p className='para' style={{marginTOp:"10px"}}>Posts: <span style={{float:"right",marginRight:"10px"}}>1</span></p>
          <p className='para' style={{marginTOp:"10px"}}>Followers: <span style={{float:"right",marginRight:"10px"}}>1</span></p>
          <p className='para' style={{marginTOp:"10px"}}>Activity <span style={{float:"right",marginRight:"10px"}}>____</span></p>
          <p className='para' style={{marginTOp:"10px"}}>Draft: <span style={{float:"right",marginRight:"10px"}}>1</span></p>
          <p className='para' style={{marginTOp:"10px"}}>Queue: <span style={{float:"right",marginRight:"10px"}}>1</span></p>
          <p className='para' style={{marginTOp:"20px"}}>Edit Profile <span style={{float:"right",marginRight:"10px"}}>+</span></p>
          </div>


          </div>
          </div>
    </div>
  )
}
