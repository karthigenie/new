import React, { useState } from "react";
import Header from "../Header/Header";
import CommentIcon from "@mui/icons-material/Comment";
import ReactPlayer from "react-player";
import ShareIcon from "@mui/icons-material/Share";
import "bootstrap/dist/css/bootstrap.min.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
//import { Button } from '@mui/material';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { common, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./trending.css";
import LikeCounter from "../LikeCounter/LikeCounter";

export default function Trending() {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

  return (
    <div className="trenditem" style={{ maxHeight: "fit-content" }}>
      <Header />

      {/* <Modal className="popupModal" show={show} onHide={handleClose}>
        <div className="popup-item">
          <button className="popuplist">July 20th 16:20Pm</button>
          <button className="popuplist">Follow</button>
          <button className="popuplist">Copy link</button>
          <button className="popuplist">Subscribe to Conversation</button>
          <button className="popuplist" style={{ color: "red" }}>
            Report
          </button>
          <button className="popuplist" style={{ color: "red" }}>
            Block
          </button>
          <button className="popuplist">Close</button>
        </div>
      </Modal> */}

      <div
        style={{
          width: "60%",
          backgroundColor: "#021935",
          height: "50px",
          marginLeft: "5%",
          marginTop: "3%",
          display: "flex",
          borderBottom: "0.5px gray solid",
        }}
      >
        <h3
          style={{
            marginRight: "20px",
            marginTop: "10px",
            marginLeft: "10px",
            color: "white",
          }}
        >
          Trending
        </h3>
        {/*   <h3 style={{marginRight:"20px",marginTop:"10px"}}>For You</h3> */}
      </div>
      {/* -------------------------- */}

      <div
        className="trending-cards"
        style={{
          display: "flex",
          backgroundColor: "#021935",
          marginLeft: "100px",
        }}
      >
        <div className="trending-card">
          <p style={{ marginLeft: "10px", color: "white" }}>#Programming</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="https://c0.wallpaperflare.com/preview/672/984/942/laptop-computer-keyboard-technology.jpg"
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
            <img
              src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
          <Button style={{ backgroundColor: "blue" }} variant="contained">
            Follow
          </Button>
        </div>

        <div className="trending-card">
          <p style={{ marginLeft: "10px", color: "white" }}>#Testing</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="https://media.istockphoto.com/photos/test-pushing-keyboard-with-finger-3d-illustration-picture-id952729630?k=20&m=952729630&s=612x612&w=0&h=J84TjX6pxZigsUI5rKMVAYgZxJPKgstXOCkov6vavsM="
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
            <img
              src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/f21b9a3fc627.jpg"
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
          <Button style={{ backgroundColor: "blue" }} variant="contained">
            Follow
          </Button>
        </div>

        <div className="trending-card">
          <p style={{ marginLeft: "10px", color: "white" }}>#Automation</p>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src="https://dkk4qeqny48s0.cloudfront.net/wp-content/uploads/2019/03/automation_testing_blog.jpg"
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
            <img
              src="https://testnbug.com/wp-content/uploads/2015/01/Automation-Testing.png"
              alt=""
              style={{
                objectFit: "cover",
                width: "60px",
                marginBottom: "9px",
                marginRight: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
          <Button style={{ backgroundColor: "blue" }} variant="contained">
            Follow
          </Button>
        </div>
      </div>

      {/* ---------------Card Content------------- */}

      <div
        className="card-container"
        style={{
          marginLeft: "5%",
          marginTop: "30px",
          width: "100%",
          minHeight: "150px",
          borderRadius: "10px",
          boxShadow: "inherit",
          display: "flex",
        }}
      >
        {/* card-1 */}
        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg"
        />

        <Card
          className="card"
          style={{ height: "min-content", maxWidth: "380px" }}
        >
          <div className="card-header">
            <div className="card-details">
              <h5>IDiscover</h5>
              <Button color="primary" style={{ color: "blue" }}>
                Follow
              </Button>
              <button
                style={{
                  width: "0",
                  padding: "0",
                  marginLeft: "130px",
                  border: "none",
                  background: "none",
                }}
                sx={{ ml: "auto" }}
                onClick={handleClick}
                aria-controls={Open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Open ? "true" : undefined}
              >
                <MoreVertIcon style={{ width: "20px" }} />
              </button>
              {/* Popup Menu */}
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
            </div>
          </div>

          <div>
            <img
              src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
              style={{
                minWidth: "380px",
                minHeight: "300px",
                padding: "0%",
                marginRight: "0",
                marginLeft: "0",
              }}
              alt="new"
            />
          </div>

          <Typography className="tags" variant="body2" color="text.secondary">
            #Home
          </Typography>
          <CardActions
            className="footer"
            disableSpacing
            style={{
              height: "35px",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <span className="detail-icon">
              <LikeCounter />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <ShareIcon />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <ChatBubbleOutlineIcon />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <RepeatIcon />
            </span>
          </CardActions>
        </Card>

        {/* ----------------- */}

        <Avatar
          className="avatar"
          alt="Remy Sharp"
          src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Beautiful-Superb-Whatsapp-Dp-Profile-Images-for-hd.jpg"
        />

        <Card
          className="card"
          style={{ height: "min-content", maxWidth: "380px" }}
        >
          <div className="card-header">
            <div className="card-details">
              <h5>IDiscover</h5>
              <Button color="primary" style={{ color: "blue" }}>
                Follow
              </Button>
              <button
                style={{
                  width: "0",
                  padding: "0",
                  marginLeft: "130px",
                  border: "none",
                  background: "none",
                }}
                sx={{ ml: "auto" }}
                onClick={handleClick}
                aria-controls={Open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={Open ? "true" : undefined}
              >
                <MoreVertIcon style={{ width: "20px" }} />
              </button>
              {/* Popup Menu */}
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
            </div>
          </div>

          <div>
            <img
              src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
              style={{
                minWidth: "380px",
                minHeight: "300px",
                padding: "0%",
                marginRight: "0",
                marginLeft: "0",
              }}
              alt="new"
            />
          </div>

          <Typography className="tags" variant="body2" color="text.secondary">
            #Home
          </Typography>
          <CardActions
            className="footer"
            disableSpacing
            style={{
              height: "35px",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <span className="detail-icon">
              <LikeCounter />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <ShareIcon />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <ChatBubbleOutlineIcon />
            </span>
            <span className="detail-icon" style={{ cursor: "pointer" }}>
              <RepeatIcon />
            </span>
          </CardActions>
        </Card>

        {/* <div
          style={{
            marginTop: "30px",
            backgroundColor: "white",
            width: "500px",
            height: "400px",
            borderRadius: "10px",
            boxShadow: "inherit",
          }}
        >
          <div
            style={{
              height: "30px",
              backgroundColor: "white",
              borderRadius: "12px",
            }}
          >
            <p style={{ marginLeft: "10px" }}>
              Karthi{" "}
              <span
                style={{ color: "blue", fontSize: "15px", marginLeft: "10px" }}
              >
                Follow
              </span>
              <button
                style={{
                  float: "right",
                  backgroundColor: "white",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                ...
              </button>
            </p>
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
            style={{ minWidth: "500px", minHeight: "300px" }}
            alt="new"
          />
          <div
            style={{
              height: "30px",
              backgroundColor: "white",
              borderRadius: "12px",
            }}
          >
            <FavoriteBorderIcon
              style={{ float: "left", marginRight: "20px", marginLeft: "20px" }}
            />
            <CommentIcon style={{ float: "left", marginRight: "20px" }} />
            <ShareIcon style={{ float: "left", marginRight: "20px" }} />
          </div>
          <p style={{ marginLeft: "10px" }}>#Home</p>
        </div> */}

        {/* <Card sx={{ maxWidth: 400, marginLeft: "15px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="RajShankar"
          />

          <CardContent>
            <iframe
              width="350"
              height="300"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              src="https://www.youtube.com/embed/Ke90Tje7VS0"
            ></iframe>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Typography variant="body2" color="text.secondary">
              #React #Learning
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 400, marginLeft: "15px" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                N
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Nishanth"
          />

          <CardContent>
            <iframe
              width="350"
              height="300"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              src="https://www.youtube.com/embed/7CqJlxBYj-M"
            ></iframe>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Typography variant="body2" color="text.secondary">
              #MERN #Learning
            </Typography>
          </CardContent>
        </Card> */}

        {/* <div
          style={{
            width: "500px",
            minHeight: "150px",
            borderRadius: "10px",
            boxShadow: "inherit",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              marginTop: "30px",
              backgroundColor: "white",
              width: "500px",
              minHeight: "150px",
              borderRadius: "10px",
              boxShadow: "inherit",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                height: "30px",
                backgroundColor: "white",
                borderRadius: "12px",
              }}
            >
              <p style={{ marginLeft: "10px" }}>
                Karthi{" "}
                <span
                  style={{
                    color: "blue",
                    fontSize: "15px",
                    marginLeft: "10px",
                  }}
                >
                  Follow
                </span>
                <button
                  style={{
                    float: "right",
                    backgroundColor: "white",
                    border: "none",
                    fontSize: "20px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  ...
                </button>
              </p>
            </div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Tn6-PIqc4UM"
              width="500px"
              style={{ Width: "500px", minHeight: "300px" }}
              alt="new"
            />
            <div
              style={{
                height: "30px",
                backgroundColor: "white",
                borderRadius: "12px",
              }}
            >
              <FavoriteBorderIcon
                style={{
                  float: "left",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              />
              <CommentIcon style={{ float: "left", marginRight: "20px" }} />
              <ShareIcon style={{ float: "left", marginRight: "20px" }} />
            </div>
            <p style={{ marginLeft: "10px" }}>#React #Learning</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
