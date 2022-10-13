import React, { useState } from "react";
import CreateTweet from "./CreateTweet";

const Users = () => {
  const [val, setVal] = useState(false);
  const clicked = () => {
    setVal(val ? false : true);
    console.log("clicked");
  };
  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h3>Trands For You</h3>
        </div>
        <div className="user" onClick={clicked}>
          <div className="postss__first__img">
            <img src="/images/logo.png" alt="profileimage" />
          </div>
          {/* <div className="country">Trand In India</div>  */}
          {/* <strong className="country">Trand In India</strong> */}
          <span className="keyword__name">
            <strong>#Rupesh Patel</strong>
          </span>
          {/* <span>#ShivrajSingh</span> */}
          <div className="keyword__tweet">4566k</div>
          <br />
        </div>

        <div>
          <div className="postss__first__img">
            <img src="/images/cricket.png" alt="profileimage" />
          </div>
          {/* <strong className="country">Trand In India</strong> */}
          <div className="keyword__name">
            <strong>#Virat Kohali</strong>
          </div>
          <div className="keyword__tweet">5000k</div>
          <br />
        </div>

        <div>
          <div className="postss__first__img">
            <img src="/images/mernstack.jpg" alt="profileimage" />
          </div>
          {/* <strong className="country">Trand In India</strong> */}
          <div className="keyword__name">
            <strong>#Umesh patel</strong>
          </div>
          <div className="keyword__tweet">6566k</div>
          <br />
        </div>

        <div>
          <div className="postss__first__img">
            <img src="/images/Screenshot (14).png" alt="profileimage" />
          </div>
          {/* <strong className="country">Trand In India</strong> */}
          <div className="keyword__name">
            <strong>#Claver Programmer</strong>
          </div>
          <div className="keyword__tweet">50M</div>
        </div>
        <div>
          <div className="postss__first__img">
            <img src="/images/Untitled.jpg" alt="profileimage" />
          </div>
          {/* <strong className="country">Trand In India</strong> */}
          <div className="keyword__name">
            <strong>#Machhali Paalan</strong>
          </div>
          <div className="keyword__tweet">70M</div>
        </div>
        {/* <div className="country">Trand In India</div> */}

        {/* <div className="country">Trand In India</div> */}

        {/* <div className="country">Trand In India</div> */}

        {/* <div className="country">Trand In India</div> */}
        {val ? <CreateTweet /> : ""}
      </div>
    </div>
  );
};

export default Users;
