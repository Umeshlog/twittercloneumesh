import React from "react";
import TrandsKeyword from "./trandskeyword";
import { FaSistrix } from "react-icons/fa";
import Users from "./Users";
import User2 from "./User2";

const Trands = () => {
  return (
    <div className="trands">
      <div className="trands__search">
        <input
          type="text"
          className="trands__control"
          placeholder="Search Twitter"
        />
        <div className="trands__icon">
          <FaSistrix className="search" />
        </div>
      </div>
      <TrandsKeyword />
      {/* <Users/> */}
      {/* <User/> */}
      {/* <User2/> */}
    </div>
  );
};

export default Trands;
