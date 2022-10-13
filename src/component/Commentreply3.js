import React, { Component } from "react";

import Comments from "./Comments";

import {
  FaUser,
  FaUserCircle,
  FaHeart,
  FaThumbsUp,
  FaThumbsDown,
  FaAngleDoubleDown,
  FaAngleDown,
  FaAlgolia,
  FaAngleUp,
  FaArrowCircleUp,
  FaArrowCircleDown,
} from "react-icons/fa";
import Commentreply4 from "./Commendreply4";

class Commentreply3 extends Component {
  state = {
    items: [],
    text: "",
    val: true,
    arrow: true,
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  onkeydown = (event) => {
    if (event.key === "Enter") {
      console.log("key");
      event.preventDefault();
      // event.stopPropgation();
      this.handleAdd();
    }
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      // const items = [...this.state.items, this.state.text];
      console.log("comment reply 22=", this.props.image, this.props.name);
      const items = [
        ...this.state.items,
        {
          id: this.state.items.length,
          val: this.state.text,
          img: this.props.image,
          name: this.props.name,
        },
      ];
      this.setState({ items: items, text: "" });
      this.props.secreplen(this.state.items.length + 1);
      this.setState({ arrow: true });
      // this.setState({ val: false });
    }
  };

  handleDelete = (id) => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items];
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i !== id;
    });
    console.log("Newitems", items);
    this.setState({ items: items });
  };
  handleAllDelete = () => {
    this.setState({ items: [] });
  };
  arrow = () => {
    this.setState({ arrow: false });

    console.log(this.state.arrow);
  };
  arrow2 = () => {
    this.setState({ arrow: true });
    console.log(this.state.arrow);
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            {/* <h2 className="text-center"> Comments write here </h2> */}
            <div className="container-fluid">
              <div className="row" style={{ display: "inline-block" }}>
                <div className="col-9" style={{ display: "inline-block" }}>
                  {this.state.val ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write a comment"
                      value={this.state.text}
                      onChange={this.handleChange}
                      onKeyPress={this.onkeydown}
                      style={{ border: "0", borderBottom: "1px solid black" }}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="col-2"
                  style={{ display: "inline-block", marginLeft: "10px" }}
                >
                  {this.state.val ? (
                    <button
                      className="btn btn-warning px-5 fw-bold"
                      onClick={this.handleAdd}
                      style={{
                        paddingLeft: "4px",
                        paddingRight: "4px",
                        backgroundColor: "Highlight",
                        cursor: "pointer",
                      }}
                    >
                      Add
                    </button>
                  ) : (
                    ""
                  )}
                  {/* {this.state.arrow ? (
                    <>
                      <FaArrowCircleUp
                        className="arrowrep"
                        onClick={this.arrow}
                      />
                      <span style={{ fontWeight: "900" }}>Hide</span>
                    </>
                  ) : (
                    <>
                      <FaArrowCircleDown
                        className="arrow2rep"
                        onClick={this.arrow2}
                      />
                      <span style={{ fontWeight: "900" }}>Show</span>
                    </>
                  )} */}
                </div>
              </div>
              {console.log(this.state.items.img, this.state.items.name)}
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {this.state.items.reverse().map((value, i) => {
                    return (
                      <Commentreply4
                        // repcom={this.state.arrow}
                        key={value.id}
                        id={i}
                        img={value.img}
                        name={value.name}
                        img2={this.props.image}
                        name2={this.props.name}
                        value={value.val}
                        sendData={this.handleDelete}
                        repcom={this.props.repcom}
                        displaycom={this.props.displayrep}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Commentreply3;
