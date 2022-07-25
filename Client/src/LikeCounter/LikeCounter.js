import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import "./likecounter.css";
import { IconButton } from "@mui/material";

const LikeCounter = () => {
  // const [like, setLike] = useState(false);
  //   const [dislike, setDislike] = useState(0);
  return (
    <div
      className="like"
      style={{
        width: "10px",
        padding: "5px",
        marginTop: "5px",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            className="checkbox"
            icon={<AiOutlineHeart />}
            checkedIcon={<AiFillHeart />}
            name="checkedH"
          />
        }
      />
    </div>
  );
};

export default LikeCounter;
