import React from "react";
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
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "./trending.css";
export default function Trending() {
  return (
    <div className="trenditem">
      <Header />

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

      <div
        className="trending-cards"
        style={{ display: "flex", backgroundColor: "#021935" }}
      >
        <div
          className="trending-card"
          style={{
            width: "150px",
            marginTop: "30px",
            height: "100px",
            backgroundColor: "white",
            marginLeft: "5%",
            borderRadius: "12px",
          }}
        >
          <p style={{ marginLeft: "10px", color: "white" }}>#Programming</p>
          <Button variant="contained">Follow</Button>
          {/* <button
            style={{
              backgroundColor: "lightblue",
              borderRadius: "12px",
              marginLeft: "40px",
            }}
          >
            Follow
          </button> */}
        </div>
        <div
          className="trending-card"
          style={{
            width: "150px",
            marginTop: "30px",
            height: "100px",
            backgroundColor: "white",
            marginLeft: "4%",
            borderRadius: "12px",
          }}
        >
          <p style={{ marginLeft: "10px", color: "white" }}>#Testing</p>
          <Button variant="contained">Follow</Button>
          {/* <button
            style={{
              backgroundColor: "lightblue",
              borderRadius: "12px",
              marginLeft: "40px",
            }}
          >
            Follow
          </button> */}
        </div>
        <div
          className="trending-card"
          style={{
            width: "150px",
            marginTop: "30px",
            height: "100px",
            backgroundColor: "white",
            marginLeft: "4%",
            borderRadius: "12px",
          }}
        >
          <p style={{ marginLeft: "10px", color: "white" }}>#Automation</p>
          <Button variant="contained">Follow</Button>
          {/* <button
            style={{
              backgroundColor: "lightblue",
              borderRadius: "12px",
              marginLeft: "40px",
            }}
          >
            Follow
          </button> */}
        </div>
        <div
          className="trending-card"
          style={{
            width: "150px",
            marginTop: "30px",
            height: "100px",
            backgroundColor: "white",
            marginLeft: "4%",
            borderRadius: "12px",
          }}
        >
          <p style={{ marginLeft: "10px", color: "white" }}>#MachineLearning</p>
          <Button variant="contained">Follow</Button>
          {/* <button
            style={{
              backgroundColor: "lightblue",
              borderRadius: "12px",
              marginLeft: "40px",
            }}
          >
            Follow
          </button> */}
        </div>
        <div
          className="trending-card"
          style={{
            width: "150px",
            marginTop: "30px",
            height: "100px",
            backgroundColor: "white",
            marginLeft: "4%",
            borderRadius: "12px",
          }}
        >
          <p style={{ marginLeft: "10px", color: "white" }}>#ComputerVision</p>
          <Button variant="contained">Follow</Button>
          {/* <button
            style={{
              backgroundColor: "lightblue",
              borderRadius: "12px",
              marginLeft: "40px",
            }}
          >
            Follow
          </button> */}
        </div>

      </div>

      {/* card content */}

      <div
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
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                K
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Karthi"
          />

          <CardContent>
            <img
              src="https://thumbs.dreamstime.com/b/conceptual-image-family-love-togetherness-safety-top-view-four-placing-hands-one-other-178302995.jpg"
              style={{ minWidth: "350px", minHeight: "300px" }}
              alt="new"
            />

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <Typography variant="body2" color="text.secondary">
              #Home
            </Typography>
          </CardContent>
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

        <Card sx={{ maxWidth: 400, marginLeft: "15px" }}>
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
        </Card>

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

