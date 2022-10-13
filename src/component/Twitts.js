import React, { useState } from "react";
import CreateTweet from "./CreateTweet";
import Post from "./Post";
import { FaThemeco, FaThemeisle } from "react-icons/fa";
import CreateTweet2 from "./CreateTweet2";

const bgc = "black";
const cl = "white";

const Twitts = (props) => {
  const [thm, setThm] = useState({
    bg: "white",
    color: "black",
  });
  const [val, setVal] = useState(false);


  const theme = () => {
    setVal(true);
    setVal(val ? false:true)
  };
  const closetheme = () => {
    setVal(false);
  };
  // const theme = () => {
  //   setThm({ bg: "black", color: "white" });
  // };
  const theme2 = () => {
    setThm({ bg: "white", color: "black" });
  };
  // const theme3 = () => {
  //   setThm({ bg: "#9932cc", color: "white" });
  // };

  return (
    <>
      <div
        className="posts"
        style={{ backgroundColor: thm.bg, color: thm.color }}
      >
        <div
          className="posts__home"
          style={{ backgroundColor: thm.bg, color: thm.color }}
        >
          Homes
          {console.log("Home value", props.items)}
          <span style={{ paddingLeft: "350px" }}>Change The Theme</span>
          <FaThemeisle />
          <FaThemeco
            className="theme"
            onClick={theme}
            title="Change The Theme"
            onDoubleClick={theme2}
          />
          {val ? (
            <div style={{ marginLeft: "483px" }}>
              <button
                style={{
                  backgroundColor: "black",
                  padding: "10px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThm({ bg: "black", color: "white" });
                }}
              ></button>
              <button
                style={{
                  backgroundColor: "darkviolet",
                  padding: "10px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThm({ bg: "darkviolet", color: "white" });
                }}
              ></button>
              <button
                style={{
                  backgroundColor: "orange",
                  padding: "10px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThm({ bg: "orange", color: "black" });
                }}
              ></button>
              <button
                style={{
                  backgroundColor: "yellow",
                  padding: "10px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThm({ bg: "yellow", color: "black" });
                }}
              ></button>
              <button
                style={{
                  backgroundColor: "dimgrey",
                  padding: "10px",
                  margin: "3px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThm({ bg: "dimgrey", color: "white" });
                }}
              ></button>
            </div>
          ) : (
            ""
          )}
        </div>
        <CreateTweet
        id={props.id}
          imgs={props.img}
          names={props.name}
          followers={props.follow}
         
        />
      </div>
      <br />
    </>
  );
};

export default Twitts;
