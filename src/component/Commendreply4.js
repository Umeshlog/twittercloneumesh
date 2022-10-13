import React, { useState } from "react";
import Commentreply from "./Commentreply";
import {
  FaUser,
  FaUserCircle,
  FaHeart,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

function Commentreply4(props) {
  const [state, setState] = useState({
    val: false,
  });
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  // const [state, setState] = useState({
  //   reply:[]
  // });

  const replyies = () => {
    console.log("button cliked");
    setState({ val: true });
    // setState({
    //   reply: [
    //     ...state.reply,
    //     {
    //       id: state.reply.length,
    //       img: props.img2,
    //       name: props.name2,
    //     },
    //   ],
    // });
  };
  const likes = () => {
    // const counts = likes.count + 1;
    setLike(like ? false : true);
  };
  const dislikes = () => {
    // const counts = likes.count + 1;
    setDislike(dislike ? false : true);
  };
  const arr = props.p;
  return (
    <div>
      {console.log(props.img, props.name, props.value)}
      <div
        style={{
          position: props.repcom && props.displaycom ? "" : " absolute",
          visibility: props.repcom && props.displaycom ? "visible" : "hidden",
        }}
      >
        <img
          src={props.img}
          alt="profileimage"
          className="postss__first__img2"
        />

        <span
          style={{
            fontSize: "20px",
            fontWeight: "600",
            paddingLeft: "4px",
          }}
        >
          {props.name}
        </span>

        <span
          onClick={() => {
            props.sendData(props.id);
          }}
          style={{ paddingLeft: "15px", cursor: "pointer" }}
        >
          x
        </span>
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: "17px",
              cursor: "pointer",
              paddingTop: "4px",
              paddingLeft: "28px",
            }}
            className="shadow p-2 my-2 col-sm-9"
          >
            {props.value}
          </span>
        </div>

        {/* <span
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            paddingLeft: "28px",
          }}
          onClick={replyies}
        >
          <span></span>
          Reply
        </span> */}

        <span>
          <FaThumbsUp
            style={{ cursor: "pointer", color: "blue" }}
            onClick={likes}
            title="Like"
          />
          {like ? 1 : ""}
        </span>
        <span>
          <FaThumbsDown
            style={{ cursor: "pointer", color: "blue", marginLeft: "6px" }}
            onClick={dislikes}
            title="Like"
          />
          {dislike ? 1 : ""}
        </span>

        {state.val ? (
          <div style={{ marginLeft: "40px" }}>
            {/* <Comment /> */}
        {/* <Commentreply image={props.img} name={props.name}/> */}
            {console.log("comments reply=", props.img2, props.name2)}
            <Commentreply
              image={props.img2}
              name={props.name2}
              val={state.val}
              displayrep={props.displaycom}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      {/* {
   arr.map((value, i) => {
    return (<React.Fragment key={i}>
     <li className="shadow p-2 my-2 col-sm-9">{value}</li>
     <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={() => { props.sendData(i) }}>X</button>
    </React.Fragment>)
   })
  } */}
    </div>
  );
}

export default Commentreply4;
