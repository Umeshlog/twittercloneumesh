import React, { useState } from "react";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboard,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
import CreateTweet from "./CreateTweet";
import Post from "./Post";
import Twitts from "./Twitts";
const User2 = () => {
  const [val1, setVal1] = useState({
    val:false,
    img:"",
    name:"",
    foolowes:"",
  
    
  });
  const vall1 = () => {
  console.log("clicked");
  setVal1({
    id:1,
    val: true,
    img: "/images/logo.png",
    name: "Rupesh Patel",
    follow: "200k",
   
  });
  // setVal1(val1.like ? false : true);
  console.log("like",val1.like1);
 
};
  const vall2 = () => {
  console.log("clicked");
  setVal1({
    id:2,
    val: true,
    img: "/images/cricket.png",
    name: "Virat Kohli",
    follow: "300M",
   
  });
  // setVal1(val1.like ? false : true);
  console.log("like", val1.like);

 
};
  const vall3 = () => {
  console.log("clicked");
  setVal1({
    id:3,
    val: true,
    img: "/images/mernstack.jpg",
    name: "Umesh Patel",
    follow: "500M",
    
  });
  // setVal1(val1.like ? false : true);
  console.log("like", val1.like);

 
};
  const vall4 = () => {
  console.log("clicked");
  setVal1({
    id:4,
    val: true,
    img: "/images/Screenshot (12).png",
    name: "Bhole Fans",
    follow: "400k",

    
  });
  // setVal1(val1.like ? false : true);
  console.log("like", val1.like);

 
};
  const vall5 = () => {
  console.log("clicked");
  setVal1({
    id:5,
    val: true,
    img: "/images/Screenshot (14).png",
    name: "Harry potter",
    follow: "10M",

    
  });
  // setVal1(val1.like ? false : true);
  console.log("like",val1.like);

 
};
  const vall6 = () => {
  console.log("clicked");
  setVal1({
    id:6,
    val: true,
    img: "/images/Untitled.jpg",
    name: "Fish",
    follow: "60M",
  
  });
  // setVal1(val1.like ? false : true);
  console.log("like", val1.like);

 
};
  // const [val2, setVal2] = useState(false);
  // const [val3, setVal3] = useState(false);
  // const [val4, setVal4] = useState(false);
  // const [val5, setVal5] = useState(false);
  // const [val6, setVal6] = useState(false);
  // const [val7, setVal7] = useState(false);

  // const vall1 = () => {
  //   console.log("clicked");
  //   setVal1(val1 ? false : true);
  //   setVal2(false);
  //   setVal3(false);
  //   setVal4(false);
  //   setVal5(false);
  //   setVal6(false);
  //   setVal7(false);
  // };
  // const vall2 = () => {
  //   console.log("clicked");
  //   setVal2(val2 ? false : true);
  //   setVal1(false);
  //   setVal3(false);
  //   setVal4(false);
  //   setVal5(false);
  //   setVal6(false);
  //   setVal7(false);
  // };
  // const vall3 = () => {
  //   console.log("clicked");
  //   setVal3(val3 ? false : true);
  //   setVal2(false);
  //   setVal1(false);
  //   setVal4(false);
  //   setVal5(false);
  //   setVal6(false);
  // };
  // const vall4 = () => {
  //   console.log("clicked");
  //   setVal4(val4 ? false : true);
  //   setVal2(false);
  //   setVal3(false);
  //   setVal1(false);
  //   setVal5(false);
  //   setVal6(false);
  // };
  // const vall5 = () => {
  //   console.log("clicked");
  //   setVal5(val5 ? false : true);
  //   setVal2(false);
  //   setVal3(false);
  //   setVal4(false);
  //   setVal1(false);
  //   setVal6(false);
  // };
  // const vall6 = () => {
  //   console.log("clicked");
  //   setVal6(val6 ? false : true);
  //   setVal2(false);
  //   setVal3(false);
  //   setVal4(false);
  //   setVal5(false);
  //   setVal1(false);
  // };
 const dcliked = () => {
   setVal1(val1.val ? false : true);
  //  setVal2(val2 ? false : true);
  //  setVal3(val3 ? false : true);
  //  setVal4(val4 ? false : true);
  //  setVal5(val5 ? false : true);
  //  setVal6(val6 ? false : true);
 };
  return (
    <>
      <div className="Sidebar">
        <ul>
          <li>
            <span>
              <FaTwitter className="icons logo" />
              <span style={{ marginLeft: "23px" }} onClick={dcliked}>
                {" "}
                All Users
              </span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall1}>
              <div className="postss__first__img">
                <img src="/images/logo.png" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Rupesh Patel</span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall2}>
              <div className="postss__first__img">
                <img src="/images/cricket.png" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Virat Kohli</span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall3}>
              <div className="postss__first__img">
                <img src="/images/mernstack.jpg" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Umesh Patel</span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall4}>
              <div className="postss__first__img">
                <img src="/images/Screenshot (12).png" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Bhole Fans</span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall5}>
              <div className="postss__first__img">
                <img src="/images/Screenshot (14).png" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Harry Potter</span>
            </span>
          </li>
          <li>
            <span onDoubleClick={dcliked} onClick={vall6}>
              <div className="postss__first__img">
                <img src="/images/Untitled.jpg" alt="profileimage" />
              </div>
              <span style={{ marginLeft: "20px" }}>Asia Fish</span>
            </span>
          </li>

          <div className="sidebar-btn">
            <span href="">Profile</span>
          </div>
        </ul>
      </div>
      {val1.val ? (
        <Twitts
        id={val1.id}
          img={val1.img}
          name={val1.name}
          follow={val1.follow}
  
        />
      ) : (
        ""
      )}
      {/* {val1 ? (
        <Twitts img="/images/logo.png" name="Rupesh Patel" follow="200K" />
      ) : (
        ""
      )}
      {val2 ? (
        <Twitts img="/images/cricket.png" name="Virat Kohali" follow="300M" />
      ) : (
        ""
      )}
      {val3 ? (
        <Twitts img="/images/mernstack.jpg" name="Umesh Patel" follow="500M" />
      ) : (
        ""
      )}
      {val4 ? (
        <Twitts
          img="/images/Screenshot (12).png"
          name="Bhole Fans"
          follow="50M"
        />
      ) : (
        ""
      )}
      {val5 ? (
        <Twitts
          img="/images/Screenshot (14).png"
          name="Harry Poter"
          follow="400K"
        />
      ) : (
        ""
      )}
      {val6 ? (
        <Twitts img="/images/Untitled.jpg" name="Asia Fish" follow="600k" />
      ) : (
        ""
      )} */}

      {/* {val1 && (
        <>
          <Twitts img="/images/logo.png" name="Rupesh Patel" follow="200K" />
        </>
      )}
      {val2 && (
        <>
          <Twitts img="/images/cricket.png" name="Virat Kohali" follow="300M" />
        </>
      )}
      {val3 && (
        <Twitts img="/images/mernstack.jpg" name="Umesh Patel" follow="500M" />
      )}
      {val4 && (
        <Twitts
          img="/images/Screenshot (12).png"
          name="Bhole Fans"
          follow="50M"
        />
      )}
      {val5 && (
        <Twitts
          img="/images/Screenshot (14).png"
          name="Harry Poter"
          follow="400K"
        />
      )}
      {val6 && (
        <Twitts img="/images/Untitled.jpg" name="Asia Fish" follow="600k" />
      )} */}
    </>
  );
};

export default User2;
