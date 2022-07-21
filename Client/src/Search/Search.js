import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player'
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header'
export default function Search() {
    const {tags} = useParams();
    const[res,setRes]=useState('')
    useEffect(() => {
axios.get(`http://18.142.54.38:5000/video/${tags}`).then(res => setRes(res.data)).catch(err => alert(err))

    },[tags]);
  return (
    <div style={{backgroundColor:"#021935"}}>
        <Header />
        <div>
            <h3 style={{marginLeft:"30%",color:"white"}}>the Search result for {tags} </h3>
       {[...res].reverse().map(d => (
         
          <div style={{marginLeft:"24.1%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
        
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
    </div>
  )
}
