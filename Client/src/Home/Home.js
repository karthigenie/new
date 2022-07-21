import React, { useState,useEffect } from 'react'
import Header from '../Header/Header'
import CommentIcon from '@mui/icons-material/Comment';
import Blog from '../blogger-logo-icon-png-10157.png'
import Chat from '../facebook-messenger-logo-png-44109.png'
import Vid from '../video-icon-8038.png'
import Cam from '../cam.svg'
import ShareIcon from '@mui/icons-material/Share';
import Audio from '../sound-png-35796.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player'
import axios from 'axios';
import TextField from "@mui/material/TextField";
import ReactAudioPlayer from 'react-audio-player';
import { ImVideoCamera } from "react-icons/im";
import { BsCameraFill } from "react-icons/bs";
import { MdAudiotrack } from "react-icons/md";
import { BsLink } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import { AiOutlineSend } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import {Modal,Button} from 'react-bootstrap'
import './Home.css'
import { useInfiniteQuery } from 'react-query';
import jwtDecode from 'jwt-decode';
import InfiniteScroller from "../Scroll/Scroll";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
const User =localStorage.getItem("twittertoken")
const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(
    `http://18.142.54.38:5000/video/get?page=${pageParam}&limit=5`
  );
  const results = await response.json();
  return { results, nextPage: pageParam + 1, totalPages: 10 };
};
export default function Home() {
  const[selectedFile,setSelectedFile]=useState(null)
  const[res,setRes]=useState([])
  const[id,setId]=useState(1)
  const [bg, setBg] = useState(false);
  const [show, setShow] = useState(false);
  const[tags,setTags]=useState([]);
  const[tweet,setTweet]=useState('');
  const [video, setVideo] = useState(false);
  const [image, setImage] = useState(false);
  const [audio, setAudio] = useState(false);
  const [chat, setChat] = useState(false);
  const [blog, setBlog] = useState(false);
  const [camera, setCamera] = useState(false);
  const [music, setMusic] = useState(false);
  const [blogs, setBlogs] = useState('');
  const [links, setLinks] = useState([]);
  const [audiolinks, setAudiolinks] = useState([]);
  const [imglinks, setImglinks] = useState([]);
  const handleClose = () => {
    setVideo(false);
    setShow(false)};
  const handleShow = () => setShow(true);

  const imageClose = () => setImage(false);
  const imageShow = () => setImage(true);
  const blogClose = () => {
    setBg(false);
    setBlog(false);
  };
  const audioClose = () => setAudio(false);
  const audioShow = () => setAudio(true);
  const blogShow = () => setBlog(true);
  const chatClose = () => setChat(false);
  const chatShow = () => setChat(true);
  const navigate = useNavigate();
  useEffect(() => {
 
    if(!User){
      navigate('/')
  }

 /*    axios.get(`http://18.142.54.38:5000/get?page=${id}`).then(res => setRes(res.data)) */

  },[]);

  const handleSubmit = async (event) => {
    const username = jwtDecode(User).username
    const profile = jwtDecode(User).profile
    const id = jwtDecode(User).id
    event.preventDefault()
    console.log(links.length)
    if(links.length !==0){
    const body={
      user:username,
      profile:profile,
      video:links,
      tags:tags,
      user_id:id,
      format:"video"
    }
    try {
      await axios({
       method: "post",
       url: "http://18.142.54.38:5000/video/url",
       data: body,
     }).then(res => alert("Upload Successfull"));
   } catch(error) {
     alert(error)
   }

  } 
  if(links.length === 0){
    const formData = new FormData();
    formData.append("user",username)
    formData.append("profile",profile)
    formData.append("video", selectedFile);
    formData.append('tags',tags)
    formData.append('user_id',id)
    formData.append('format',"video")
    
       await axios.post('http://18.142.54.38:5000/video',formData).then(res => alert("Upload Successfull")).catch(error => alert(error))
    
  }
  /* else if(links.length === 0){
    const formData = new FormData();
    formData.append("user",username)
    formData.append("profile",profile)
    formData.append("video", selectedFile);
    formData.append('tags',tags)
    formData.append('user_id',id)
    formData.append('format',"video")
    
       await axios.post('http://18.142.54.38:5000/video',formData).then((res => alert("Upload Successfull")).catch(error => alert(error))
    
  } */
  }
  const submitAudio = async (event) => {
    const username = jwtDecode(User).username
    const profile = jwtDecode(User).profile
    const id = jwtDecode(User).id
    event.preventDefault();
    if(audiolinks.length !==0){
      const body={
        username:username,
        profile:profile,
        audio:audiolinks,
        tags:tags,
        user_id:id,
        format:"audio"
      }
      try {
        await axios({
         method: "post",
         url: "http://18.142.54.38:5000/audio/url",
         data: body,
       }).then(res => alert("Upload Successfull"));
     } catch(error) {
       alert(error)
     }
  
    } else if(audiolinks.length === 0){
    const formData = new FormData();
    formData.append("username",username)
    formData.append("profile",profile)
    formData.append("audio", selectedFile);
    formData.append('tags',tags)
    formData.append('user_id',id)
    formData.append('format',"audio")
    await axios.post('http://18.142.54.38:5000/audio',formData).then(res => alert("Upload Successfull")).catch(error => alert(error))
  }
  }
  const submitImage = async (event) => {
    const username = jwtDecode(User).username
    const profile = jwtDecode(User).profile
    const id = jwtDecode(User).id
    event.preventDefault();
    if(imglinks.length !==0){
      const body={
        username:username,
        profile:profile,
        image:imglinks,
        tags:tags,
        user_id:id,
        format:"image"
      }
      try {
        await axios({
         method: "post",
         url: "http://18.142.54.38:5000/image/url",
         data: body,
       }).then(res => alert("Upload Successfull"));
     } catch(error) {
       alert(error)
     }
  
    } else if(imglinks.length === 0){
    const formData = new FormData();
    console.log(selectedFile)
    formData.append("username",username)
    formData.append("profile",profile)
    formData.append("image", selectedFile);
    formData.append('tags',tags)
    formData.append('user_id',id)
    formData.append('format',"image")
    console.log(formData)
    await axios.post('http://18.142.54.38:5000/image',formData).then(res => alert("Upload Successfull")).catch(error => alert(error))
  }
  }
  const submitText = async (event) => {
    const username = jwtDecode(User).username
    const profile = jwtDecode(User).profile
    const id = jwtDecode(User).id
    event.preventDefault()
 
    const body={
      user:username,
      profile:profile,
      tweets:tweet,
      tags:tags,
      user_id:id,
      Format:"text"
    }

    try {
       await axios({
        method: "post",
        url: "http://18.142.54.38:5000/tweets",
        data: body,
        
      }).then(res => alert("Tweeted Successfully"));
    } catch(error) {
      alert(error)
    }
  }
  const submitBlog = async (event) => {
    const username = jwtDecode(User).username
    const profile = jwtDecode(User).profile
    const id = jwtDecode(User).id
    event.preventDefault()
 
    const body={
      user:username,
      profile:profile,
      blog:blogs,
      tags:tags,
      user_id:id,
      format:"link"
    }

    try {
       await axios({
        method: "post",
        url: "http://18.142.54.38:5000/blog",
        data: body,
        
      }).then(res => alert("Blog Posted Successfully"));
    } catch(error) {
      alert(error)
    }
  }

  const handleProfile = (id,event) => {
    console.log("hello",id)
    navigate(`/profile/${id}`)
  }
  const handleFileSelect = (event) => {
    console.log(event.target.files)
    setSelectedFile(event.target.files[0])
  }
  const handleTags =(event)=>{
    setTags(event.target.value)
  }
  const handleTweet =(event)=>{
    setTweet(event.target.value)
  }
  const handleLinks = (event) => {
    setLinks(event.target.value);
  };
  const Input = styled("input")({
    display: "none",
  });

  const {
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  });
 
 
  return (
    <div style={{backgroundColor:"#021935",minHeight:"100vh"}}>
   <Header />
       
    <div >
    <Modal className="modal-container" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Video Upload</Modal.Title>
          </Modal.Header>

          <form onSubmit={handleSubmit}>
          <div className="i-video-link">
              <div className="i-contant">
          {!video ? (
                <label htmlFor="icon-button-file">
                  <Input
                    onChange={handleFileSelect}
                    accept="video/*"
                    id="icon-button-file"
                    type="file"
                  />
                  <IconButton
                    className="icon-button"
                    color="primary"
                    aria-label="upload video"
                    component="span"
                  >
                    <ImVideoCamera className="icon" />
                  </IconButton>
                  <p>Upload Video</p>
                </label>
              ) : null}
              </div>
              {!video ? <div className="vl"></div> : null}
              <div className="i-contant">
                {video ? (
                  <input
                    className="video-input"
                    type="url"
                    onChange={handleLinks}
                    accept="url/*"
                    placeholder="Type or Paste Link"
                    InputProps={{ disableUnderline: true }}
                  />
                ) : null}
                {!video ? (
                  <div className="link-video-icon">
                    <IconButton
                      onClick={() => setVideo(!video)}
                      className="icon-button"
                      color="primary"
                      aria-label="upload video"
                      component="span"
                    >
                      <BsLink className="icon" />
                    </IconButton>
                    <p className="video-link-lable">Add Video From Web</p>
                  </div>
                ) : null}
              </div>

              </div>
            <input
              className="modal-tag"
              type="string"
              placeholder="#add tags"
              onChange={handleTags}
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />

            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={handleClose}>
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                post
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        {/* Image */}
        <Modal className="modal-container" show={image} onHide={imageClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Upload Image</Modal.Title>
          </Modal.Header>

          <form onSubmit={submitImage}>
          <div className="i-video-link">
              <div className="i-contant">
              {!camera ? (
                <label htmlFor="icon-button-file">
                  <Input
                    onChange={handleFileSelect}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                  />
                  <IconButton
                    className="icon-button"
                    color="primary"
                    aria-label="Upload Image"
                    component="span"
                  >
                    <BsCameraFill className="icon" />
                  </IconButton>
                  <p>Upload Image</p>
                </label>
                  ) : null}
                  </div>
                  {!camera ? <div className="vl"></div> : null}
              <div className="i-contant">
                {camera ? (
                  <input
                    className="video-input"
                    type="url"
                    accept="url/*"
                    onChange={(e)=> setImglinks(e.target.value)}
                    placeholder="Type or Paste Link"
                    InputProps={{ disableUnderline: true }}
                  />
                ) : null}
                {!camera ? (
                  <div className="link-video-icon">
                    <IconButton
                      onClick={() => setCamera(!camera)}
                      className="icon-button-link"
                      color="primary"
                      aria-label="upload video"
                      component="span"
                    >
                      <BsLink className="icon" />
                    </IconButton>
                    <p className="video-link-lable">Add Image From Web</p>
                  </div>
                ) : null}
             
              </div>
                  </div>
            <input
              className="modal-tag"
              type="string"
              placeholder="#add tags"
              onChange={handleTags}
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />

            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={imageClose}>
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                post
              </Button>
            </Modal.Footer>
          </form>
        </Modal>

        {/* Audio */}
        
        <Modal className="modal-container" show={audio} onHide={audioClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Upload Audio</Modal.Title>
          </Modal.Header>

          <form onSubmit={submitAudio}>
          <div className="i-video-link">
              <div className="i-contant">
              {!music ? (
                <label htmlFor="icon-button-file">
                  <Input
                    onChange={handleFileSelect}
                    accept="audio/*"
                    id="icon-button-file"
                    type="file"
                  />
                  <IconButton
                    className="icon-button"
                    color="primary"
                    aria-label="Upload Image"
                    component="span"
                  >
                    <MdAudiotrack className="icon" />
                  </IconButton>
                  <p>Upload Audio</p>
                </label>
                ) : null}
                  </div>
                  {!music ? <div className="vl"></div> : null}
              <div className="i-contant">
                {music ? (
                  <input
                    className="video-input"
                    type="url"
                    accept="url/*"
                    onChange={(e)=> setAudiolinks(e.target.value)}
                    placeholder="Type or Paste Link"
                    InputProps={{ disableUnderline: true }}
                  />
                ) : null}
                {!music ? (
                  <div className="link-video-icon">
                    <IconButton
                      onClick={() => setMusic(!music)}
                      className="icon-button-link"
                      color="primary"
                      aria-label="upload video"
                      component="span"
                    >
                      <BsLink className="icon" />
                    </IconButton>
                    <p className="video-link-lable">Add Audio From Web</p>
                  </div>
                ) : null}
              </div>
                  </div>
            <input
              className="modal-tag"
              type="string"
              placeholder="#add tags"
              onChange={handleTags}
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />

            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={audioClose}>
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                post
              </Button>
            </Modal.Footer>
          </form>
        </Modal>

        <Modal className="modal-container" show={chat} onHide={chatClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Chat</Modal.Title>
          </Modal.Header>

          <form onSubmit={submitText}>
            <Modal.Body>
              <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="icon-button-file">
                  <TextField
                    className="message"
                    id="standard-basic"
                    variant="standard"
                    placeholder="Message"
                    onChange={handleTweet}
                    InputProps={{ disableUnderline: true }}
                  />
                </label>
              </Stack>
            </Modal.Body>
            <input
              className="modal-tag"
              type="string"
              placeholder="#add tags"
              onChange={handleTags}
              style={{ borderRadius: "6px", marginTop: "10px" }}
            />

            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={chatClose}>
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                Send
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        <Modal className="modal-container" show={blog} onHide={blogClose}>
          <Modal.Header closeButton>
            <Modal.Title className="title">Blog</Modal.Title>
          </Modal.Header>

          <form onSubmit={submitBlog}>
            {/* <Modal.Body>
              <Stack direction="row" alignItems="center" spacing={2}> */}
            <label htmlFor="icon-button-file">
              {bg ? (
                <input
                  className="Blog-input"
                  type="url"
                  accept="url/*"
                  onChange={(e)=> setBlogs(e.target.value)}
                  placeholder="Type or Paste Link"
                  InputProps={{ disableUnderline: true }}
                />
              ) : null}

              {!bg ? (
                <div className="link-video-icon">
                  <IconButton
                    onClick={() => setBg(!bg)}
                    className="blog-icon-button-link"
                    color="primary"
                    aria-label="upload video"
                    component="span"
                  >
                    <BsLink className="icon" />
                  </IconButton>
                  <p className="Blog-link-lable">Add Blog From Web</p>
                </div>
              ) : null}

              {/* <input
                    className="blog-input"
                    type="url"
                    accept="url/*"
                    placeholder="Type or Paste Link"
                    InputProps={{ disableUnderline: true }}
                  /> */}
            </label>
            {/* </Stack>
            </Modal.Body> */}
            {bg ? (
              <input
                className="modal-tag"
                type="string"
                placeholder="#add tags"
                onChange={handleTags}
                style={{ borderRadius: "6px", marginTop: "10px" }}
              />
            ) : null}

            <Modal.Footer className="footer-button">
              <Button color="red" variant="secondary" onClick={blogClose}>
                <AiOutlineArrowLeft />
              </Button>
              <Button type="submit" value="Upload File">
                Post
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
    
       <div style={{marginLeft:"30%",marginTop:"30px",backgroundColor:"white",width:"500px",height:"150px",borderRadius:"10px",boxShadow:"inherit"}}>

       <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>

             <div className="item" style={{cursor:"pointer"}}>
              <img src={Cam} alt='cam'  onClick={imageShow} style={{marginLeft:"20px",width:"80px",color:'white',marginRight:"10px",marginTop:"30px",height:"80px"}} />
              <span style={{marginLeft:"20px",marginRight:"13px"}} className="caption">Camera</span>
             </div>
             <div className="item" style={{cursor:"pointer"}}>
                   <img src={Vid} alt='video' onClick={handleShow} style={{color:'white',height:"80px",marginRight:"10px",width:"80px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Videos</span>
              </div>
              <div className="item" style={{cursor:"pointer"}}>
                   <img src={Audio} alt='video'  onClick={audioShow} style={{color:'white',height:"70px",width:"70px",marginRight:"",marginTop:"30px"}} />
                   <span style={{marginRight:"",marginTop:"9px"}} className="caption">Audio</span>
              </div>
              <div className="item" style={{cursor:"pointer"}}>
                   <img src={Blog} alt='video' onClick={blogShow} style={{color:'white',height:"85px",width:"100px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Blog</span>
                 </div>
                   <div className="item" style={{cursor:"pointer"}}>
                   <img src={Chat} alt='video'  onClick={chatShow} style={{color:'white',height:"80px",width:"90px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Chat</span>
                </div>
              </div>
             

       </div>
   
      {/*  {[...res].reverse().map(d => (
         <div style={{marginLeft:"22.8%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
      <a onClick={(e)=> handleProfile(d.user_id,e)} id={d.user_id}>  <img src={d.profile} style={{marginTop:"30px",marginRight:"10px",marginLeft:"20px",height:"100px"}} alt='sg'/></a>
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
          <p style={{marginLeft:"10px"}}>Tags: {d.tags}</p>
          </div>
          </div> 
         

       ))}
 */}
   {!isLoading ?
<InfiniteScroller hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map((page) =>
          page.results.map((d) => 
            <div style={{marginLeft:"22.8%",marginTop:"30px",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
         <a onClick={(e)=> handleProfile(d.user_id,e)} id={d.user_id}>  <img src={d.profile} style={{marginTop:"30px",marginRight:"10px",marginLeft:"20px",height:"100px"}} alt='sg'/></a>
             <div style={{marginTop:"30px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"50px"}}>
            <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
             <p style={{marginLeft:"10px"}}>{d.username} <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span><button style={{float:"right",backgroundColor:"white",border:'none',fontSize:"20px",cursor:"pointer",marginRight:"10px"}}>...</button></p>
             </div>
            {d.format ==="video" && 
             <ReactPlayer url={d.video} controls width='500px'  alt='new' />
            }
            {d.format ==="audio" && 
            <ReactAudioPlayer
            src={d.audio}
            controls
          />
            }
            {d.format ==="text" && 
             <p>{d.tweet}</p>
            }
            {d.format ==="image" && 
             <img src={d.image} alt='imae' style={{minHeight:"200px",minWidth:"400px"}} />
            }
          
            {d.format ==="link" && 
             <LinkPreview url={d.blog} className='linkk' /> 
            }
            

             <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
             <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
             <CommentIcon style={{float:"left",marginRight:"20px"}} />
             <ShareIcon style={{float:"left",marginRight:"20px"}}/>
             </div>
             <p style={{marginLeft:"10px"}}>Tags: {d.tags}</p>
             </div>
             </div> 
            
   
       
   )
        )}
      </InfiniteScroller>
: <p style={{color:"white"}}>Data Fetching Please Wait</p>}
          
</div>
    </div>
  )
}
