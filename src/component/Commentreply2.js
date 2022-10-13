import React, { useState } from "react";
import Commentreply from "./Commentreply";
import {
  FaUser,
  FaUserCircle,
  FaHeart,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import Commentreply3 from "./Commentreply3";

function Commentreply2(props) {
  const [state, setState] = useState({
    val: false,
  });
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [length, setLength] = useState([]);
  // const [state, setState] = useState({
  //   reply:[]
  // });
  const secreplen = (length) => {
    // console.log("replen=",length);
    setLength(length);
  };
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
        {/* <FaUserCircle style={{ fontSize: "20px", color: "blue" }} /> */}
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

        <span
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
            paddingLeft: "28px",
            color: "blue",
          }}
          onClick={replyies}
        >
          <span style={{ color: "blue" }}>{length}</span>
          Reply
        </span>

        <span>
          <FaThumbsUp
            style={{ cursor: "pointer", color: "green" }}
            onClick={likes}
            title="Like"
          />
          {like ? 1 : ""}
        </span>
        <span>
          <FaThumbsDown
            style={{ cursor: "pointer", color: "red", marginLeft: "6px" }}
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
            <Commentreply3
              image={props.img2}
              name={props.name2}
              val={state.val}
              secreplen={secreplen}
              repcom={props.repcom}
              displayrep={props.displaycom}
            />
          </div>
        ) : (
          ""
        )}
        {/* {val ? (
          <ul className="list-unstyled row m-5">
            {state.reply.map((value, i) => {
              return (
                <Commentreply
                  key={i}
                  image={value.img}
                  name={value.name}
                />
              );
            })}
          </ul>
        ) : (
          ""
        )} */}
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

export default Commentreply2;
