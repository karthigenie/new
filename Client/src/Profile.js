import React,{useState,useEffect} from 'react'
import Header from './Header/Header'
import Blog from './blogger-logo-icon-png-10157.png'
import Chat from './facebook-messenger-logo-png-44109.png'
import Vid from './video-icon-8038.png'
import Cam from './cam.svg'
import ReactAudioPlayer from "react-audio-player";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import Audio from './sound-png-35796.png'
import CommentIcon from '@mui/icons-material/Comment';
import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
import ShareIcon from '@mui/icons-material/Share';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player'
import axios from 'axios'
import { Modal, Button } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BsLink } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { MdAudiotrack } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { ImVideoCamera } from "react-icons/im";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from '@mui/material/MenuItem'
import { useParams,useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
const User =localStorage.getItem("twittertoken")


export default function Profile() {
  const[res,setRes]=useState([])
  const[username,setUsername]=useState('')
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState(false);
  const [imglinks, setImglinks] = useState([]);
  const [image, setImage] = useState(false);
  const [video, setVideo] = useState(false);
  const [links, setLinks] = useState([]);
  const [camera, setCamera] = useState(false);
  const {id} = useParams();
   const [tweet, setTweet] = useState("");  
  const [audio, setAudio] = useState(false);
  const [chat, setChat] = useState(false);
  const [blog, setBlog] = useState(false);  
  const [music, setMusic] = useState(false);
  const [blogs, setBlogs] = useState("");  
  const [audiolinks, setAudiolinks] = useState([]);
 
  const uid = jwtDecode(User).id
  useEffect(() => {
axios.get(`http://18.142.54.38:5000/video/post/${uid}`).then(res =>setRes(res.data))

  },[]);

  //dropdown 
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  //


  //Image handle events
  const imageShow = () => setImage(true);
  const imageClose = () => {
    setCamera(false);
    setImage(false);
  };

  const submitImage = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    const id = jwtDecode(User).id;
    event.preventDefault();
    if (imglinks.length !== 0) {
      const body = {
        username: username,
        profile: profile,
        image: imglinks,
        tags: tags,
        user_id: id,
        Format: "image",
      };
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/image/url",
          data: body,
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    } else if (imglinks.length === 0) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("profile", profile);
      formData.append("image", selectedFile);
      formData.append("tags", tags);
      formData.append("user_id", id);
      formData.append("format", "image");
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/image",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    }
  };

  //Video handle events
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setVideo(false);
    setShow(false);
  };

  const handleSubmit = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    const id = jwtDecode(User).id;
    event.preventDefault();
    console.log(links.length);
    if (links.length !== 0) {
      const body = {
        user: username,
        profile: profile,
        video: links,
        tags: tags,
        user_id: id,
        Format: "video",
      };
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/video/url",
          data: body,
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    } else if (links.length === 0) {
      const formData = new FormData();
      formData.append("user", username);
      formData.append("profile", profile);
      formData.append("video", selectedFile);
      formData.append("tags", tags);
      formData.append("user_id", id);
      formData.append("format", "video");
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/video",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    }
  };

  //Audio handle events
  const audioShow = () => setAudio(true);
  const audioClose = () => {
    setMusic(false);
    setAudio(false);
  };
  const submitAudio = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    const id = jwtDecode(User).id;
    event.preventDefault();
    if (audiolinks.length !== 0) {
      const body = {
        username: username,
        profile: profile,
        audio: audiolinks,
        tags: tags,
        user_id: id,
        Format: "audio",
      };
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/audio/url",
          data: body,
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    } else if (audiolinks.length === 0) {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("profile", profile);
      formData.append("audio", selectedFile);
      formData.append("tags", tags);
      formData.append("user_id", id);
      formData.append("format", "audio");
      try {
        await axios({
          method: "post",
          url: "http://18.142.54.38:5000/audio",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => alert("Upload Successfull"));
      } catch (error) {
        alert(error);
      }
    }
  };

  //blog handle events
  const blogShow = () => setBlog(true);
  const blogClose = () => {
    setBg(false);
    setBlog(false);
  };
  const submitBlog = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    const id = jwtDecode(User).id;
    event.preventDefault();

    const body = {
      user: username,
      profile: profile,
      blog: blogs,
      tags: tags,
      user_id: id,
      Format: "link",
    };

    try {
      await axios({
        method: "post",
        url: "http://18.142.54.38:5000/blog",
        data: body,
      }).then((res) => alert("Blog Posted Successfully"));
    } catch (error) {
      alert(error);
    }
  };

  // chat handle events
  const chatClose = () => setChat(false);
  const chatShow = () => setChat(true);

  const submitText = async (event) => {
    const username = jwtDecode(User).username;
    const profile = jwtDecode(User).profile;
    const id = jwtDecode(User).id;
    event.preventDefault();

    const body = {
      user: username,
      profile: profile,
      tweets: tweet,
      tags: tags,
      user_id: id,
      Format: "text",
    };

    try {
      await axios({
        method: "post",
        url: "http://18.142.54.38:5000/tweets",
        data: body,
      }).then((res) => alert("Tweeted Successfully"));
    } catch (error) {
      alert(error);
    }
  };
  

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleTags = (event) => {
    setTags(event.target.value);
  };
  const handleTweet = (event) => {
    setTweet(event.target.value);
  };
  const handleLinks = (event) => {
    setLinks(event.target.value);
  };
  const Input = styled("input")({
    display: "none",
  });


  return (
    <div style={{backgroundColor:"#021935",height:"100%"}}>
       <Header />
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
                    onChange={(e) => setImglinks(e.target.value)}
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

        {/* Video Modal */}
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
                    onChange={(e) => setAudiolinks(e.target.value)}
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

        {/* Chat Modal */}
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

        {/* Blog */}
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
                  onChange={(e) => setBlogs(e.target.value)}
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

       <div className='container' >
      <div className='row'>
        <div style={{marginLeft:"150px",marginTop:"30px",marginBottom:'20px',backgroundColor:"white",width:"500px",height:"130px",borderRadius:"10px",boxShadow:"inherit", display:'inline'}}>
       <div style={{display:'flex',flexDirection:'row',alignItems:'center', justifyContent:'space-around'}}>

             <div className='icon' style={{cursor:"pointer",marginTop: "10px"}}>
              <img  className="item" src={Cam} alt='cam' onClick={imageShow} style={{marginLeft:"20px",width:"80px",color:'white',marginRight:"10px",marginTop:"30px",height:"80px"}} />
              <span style={{marginLeft:"20px",marginRight:"13px"}} className="caption">Camera</span>
             </div>
             <div className='icon' style={{cursor:"pointer",marginTop: "10px"}}>
                   <img className="item" src={Vid} alt='video' onClick={handleShow} style={{color:'white',marginLeft:"20px",height:"80px",marginRight:"10px",width:"80px",marginTop:"30px"}} />
                   <span style={{marginLeft:"13px"}} className="caption">Videos</span>
              </div>
              <div className='icon' style={{cursor:"pointer",marginTop: "10px"}}>
                   <img className="item" src={Audio} alt='video' onClick={audioShow} style={{color:'white',height:"70px",width:"70px",marginRight:"",marginTop:"30px"}} />
                   <span style={{marginRight:"",marginTop:"9px"}} className="caption">Audio</span>
              </div>
              <div className='icon' style={{cursor:"pointer",marginTop: "10px"}}>
                   <img className="item" src={Blog} alt='video' onClick={blogShow} style={{color:'white',height:"85px",width:"100px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Blog</span>
                 </div>
                   <div className='icon' style={{cursor:"pointer",marginTop: "10px"}}>
                   <img className="item" src={Chat} alt='video' onClick={chatShow} style={{color:'white',height:"80px",width:"90px",marginRight:"10px",marginTop:"30px"}} />
                   <span style={{marginRight:"13px"}} className="caption">Chat</span>
                </div>
              </div>
            </div>

            
            {(res) ?
            [...res].reverse().map(d => (
              
              <div>
         
          <div style={{marginLeft:"5px",marginTop:"10px",width:"700px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",display:"flex"}}>
          <img src={d.profile} style={{marginTop:"5px",marginRight:"10px",marginLeft:"20px",height:"100px"}} alt='sg'/>
          <div style={{marginTop:"5px",backgroundColor:"white",width:"500px",minHeight:"150px",borderRadius:"10px",boxShadow:"inherit",marginBottom:"20px"}}>
           <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <p style={{marginLeft:"10px"}}>{d.username} <span style={{color:"blue",fontSize:"15px",marginLeft:"10px"}}>Follow</span>
          <button 
            style={
                {float:"right",
                  backgroundColor:"white",
                  border:'none',
                  fontSize:"20px",
                  cursor:"pointer",
                  marginRight:"10px"}}
                  sx={{ ml: "auto" }}                  
                  onClick={handleClick}
                  aria-controls={Open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={Open ? "true" : undefined}
                  ><MoreHorizIcon style={{width:'20px'}}/></button>
                  <Menu
                style={{
                  width: "300px",
                  padding: "10px",
                  marginLeft: "-100px",
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={Open}
                onClose={handleClose1}
                MenuListProps={{ "aria-labelledby": "basic-button" }}
              >
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                  }}
                >
                  Follow
                </MenuItem>
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                  }}
                >
                  Copy
                </MenuItem>
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                    padding: "20px",
                  }}
                >
                  Subscribe to Conversation
                </MenuItem>
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                    color: "red",
                  }}
                >
                  Report
                </MenuItem>
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                    color: "red",
                  }}
                >
                  Block
                </MenuItem>
                <MenuItem
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "30px",
                  }}
                >
                  Close
                </MenuItem>
              </Menu>
            </p>
          </div>
         
          {d.format === "video" && (
                      <ReactPlayer
                        url={d.video}
                        controls
                        width="500px"
                        alt="new"
                      />
                    )}
                    {d.format === "audio" && (
                      <ReactAudioPlayer src={d.audio} controls />
                    )}
                    {d.format === "text" && <p>{d.tweet}</p>}
                    {d.format === "image" && (
                      <img
                        src={d.image}
                        alt="imae"
                        style={{ minHeight: "200px", minWidth: "400px" }}
                      />
                    )}
                    {d.format === "link" && <LinkPreview url={d.blog} />}

          <div style={{height:"30px",backgroundColor:"white",borderRadius:"12px"}}>
          <FavoriteBorderIcon style={{float:"left",marginRight:"20px",marginLeft:"20px"}} />
          <CommentIcon style={{float:"left",marginRight:"20px"}} />
          <ShareIcon style={{float:"left",marginRight:"20px"}}/>
          </div>
          <p style={{marginLeft:"10px"}}>{d.tags}</p>
          </div>
          </div>  
          </div>
            
         
       ))
       : 

       <div className='empty-container'>
         <div style={{color:'white',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
           <h1 style={{fontSize:'50px'}}><PostAddTwoToneIcon style={{fontSize:'200%'}}/></h1>
         <h2>No Post Available</h2>
         <h3>Learn how to make a Post</h3>
         </div>
         </div>
          } 
                   
         
              
    </div>  
    <div className='profile-container' style={{marginTop:"30px",backgroundColor:"white",minWidth:"300px",height:"500px",borderRadius:"10px",boxShadow:"inherit",marginLeft:'auto',marginBottom:'75px'}}>
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
  )
}
