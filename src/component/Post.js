import React, { useState } from "react";
import {
  FaArrowCircleUp,
  FaComment,
  FaCommentDots,
  FaHeart,
  FaLanguage,
  FaLeaf,
  FaLevelDownAlt,
  FaRegChartBar,
  FaRegCheckCircle,
  FaRegSave,
  FaSave,
  FaShareAltSquare,
  FaUser,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Comment from "./Comment";
import Share from "./Share";
import Language from "./Language";
import ImageUploader from "react-images-upload";
import Images from "./Images";
import "../App.css";

import ChImage from "../ChImage";
// import "./style.css";

const Post = (props) => {
  const perpel = "#800080";
  const green = "#008000";
  const [like, setLike] = useState({
    val: false,
    count: 0,
  });

  // const [like, setLike] = useState(false);
  const [id, setId] = useState([0]);
  const [val, setVal] = useState(false);
  const [valsh, setValsh] = useState(false);
  const [lang, setLang] = useState(false);
  const [likess, setLikess] = useState(false);
  const [lengths, setLengths] = useState([]);
  const [save, setSave] = useState(perpel);
  const [picturess, setPicturess] = useState({
    pictures: [],
  });

  const likes = () => {
    console.log(props.id);
    setLike(like.val ? false : true ); 
    

console.log("id",like.id)
    // const counts = likes.count + 1;
    // setLike({count:like.count+1})
    // setLikess(like?false:true);
    console.log("likess", likess.like1);
    {!like.val
      ? setLike({ count: like.count + 1 })
      : setLike({ count: like.count - 1 });}
    // if (like) {
    //   setLike({ count: like.count + 1 });
    // } else {
    //   setLike({ count: like.count - 1 });
    // }
    // setLengths([]);

    // setVal(false);
    setValsh(false);
    setLang(false);

    // console.log(likes.count);
  };
  const comlen = (length) => {
    console.log(length);
    setLengths(length);
  };
  const comment = () => {
    // setVal(true);
    setVal(true);
    // setVal(val ? false : true);

    // setLengths([]);
    

    setValsh(false);
    setLang(false);
  };

  const share = () => {
    setValsh(valsh ? false : true);
    
    // setLengths([]);

    // setVal(false);
    setLang(false);
  };

  const language = () => {
    setLang(lang ? false : true);
    // setLengths([]);

    // setVal(false);
    setValsh(false);
  };

  const saves = () => {
    setSave(green);
    alert("image saved");
    // setLengths([]);

    // setVal(false);
    setValsh(false);
    setLang(false);
  };
  // const onDrop = (pictureFiles, pictureDataURLs) => {
  //   setPicturess({
  //     pictures: picturess.pictures.concat(pictureFiles),
  //     img: pictureDataURLs,
  //   });

  //   console.log("imageupload=",like.imgupload);
  //   console.log("props val", props.value);
  //   console.log(pictureDataURLs);

  //   console.log(picturess.pictures);
  // };
  return (
    <>
      <div className="postss">
        <div className="postss__first">
          <div className="postss__first__img">
            <img src={props.image} alt="profileimage" />
            {console.log("Images=", props.imgage)}
          </div>

          <div className="postss__first__name">
            <strong>{props.name}</strong>
            <FaRegCheckCircle className="verify" />
            <div className="postss__first__username">
              {props.name}
              <span>6m</span>
            </div>
          </div>
        </div>

        <div className="postss__details">
          <div
            className="postss__details__msg"
            style={{ fontSize: "23px", fontWeight: "bold" }}
          >
            {props.value}
                      
            <ChImage />
          </div>

          <div className="postss__details__img"></div>
          <div className="reactions">
            <div style={{ display: "inline-block" }}>
              <FaCommentDots
                className="co"
                title="Comments"
                onClick={comment}
              />

              <span style={{ color: "black" }}> {lengths}</span>
            </div>
            <span>
              <FaHeart className="li" onClick={likes} title="Like" />
              {/* {like ? 1 : ""} */}
              <span style={{ color: "black" }}> {like.count}</span>
            </span>

            <span>
              <FaShareAltSquare className="sh" title="Share" onClick={share} />
            </span>
            <span>
              <FaLanguage
                className="la"
                onClick={language}
                title="Change Language"
              />
            </span>
          </div>
        </div>
        {valsh ? <Share /> : ""}
        {lang ? <Language /> : ""}
        {val ? (
          <Comment image={props.image2} name={props.name2} comlen={comlen} />
        ) : (
          ""
        )}
      </div>
      <div></div>
    </>
  );
};

export default Post;
