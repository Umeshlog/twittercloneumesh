import React, { Component } from "react";
import Comments from "./Comments";
import { FaArrowCircleDown, FaArrowCircleUp,FaAngleDown,FaAngleUp } from "react-icons/fa";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Comment extends Component {
  state = {
    items: [],
    text: "",
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
      this.setState({ arrow: true });
    if (this.state.text !== "") {
      // const items = [...this.state.items, this.state.text];
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
      this.props.comlen(this.state.items.length + 1);

      // const items = [
      //   ...this.state.items,
      //   {
      //     id: this.state.items.length,
      //     val: this.state.text,
      //     img: this.props.image,
      //     name: this.props.name,
      //   },
      // ];
      // this.setState({ items: items, text: "" });
    }
  };

  arrow = () => {
    this.setState({ arrow: false });
  
    console.log(this.state.arrow);
  };
  arrow2 = () => {
    this.setState({ arrow: true });
    console.log(this.state.arrow);
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
    this.props.comlen(this.state.items.length - 1);
  };
  handleAllDelete = () => {
    this.setState({ items: [] });
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Comments write here </h2>
            <div className="container-fluid">
              <div className="row" style={{ display: "flex" }}>
                <div className="col-9" style={{ display: "inline-block" }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write a comment"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.onkeydown}
                    style={{ border: "0", borderBottom: "1px solid black" }}
                  />
                </div>
                <div
                  className="col-2"
                  style={{ display: "inline-block", marginLeft: "10px" }}
                >
                  <button
                    className="btn btn-warning px-5 fw-bold"
                    onClick={this.handleAdd}
                    style={{
                      paddingLeft: "4px",
                      paddingRight: "4px",
                      backgroundColor: "yellowgreen",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                  {/* <FaArrowCircleUp className="arrow" onClick={this.arrow} />
                  <FaArrowCircleDown className="arrow2" onClick={this.arrow2} /> */}
                  {this.state.arrow ? (
                    <div>
                      <FaArrowCircleUp className="arrow" onClick={this.arrow} />
                      <span style={{ fontWeight: "900" }}>Hide</span>
                    </div>
                  ) : (
                    <div>
                      <FaArrowCircleDown
                        className="arrow2"
                        onClick={this.arrow2}
                      />
                      <span style={{ fontWeight: "900" }}>Show</span>
                    </div>
                  )}
                  {/* {this.state.arrow ? (
                    <>
                      <div style={{ display: "flex" }}>
                        <div>
                          <FaAngleUp
                            style={{
                              display: "block",
                              marginLeft: "425px",
                              cursor: "pointer",
                            }}
                            onClick={this.arrow}
                          />
                          <FaAngleDown
                            style={{
                              display: "block",
                              marginLeft: "425px",
                              cursor: "pointer",
                            }}
                            onClick={this.arrow}
                          />
                        </div>
                        <span style={{ fontWeight: "900" }}>Hide</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "flex" }}>
                        <div>
                          <FaAngleUp
                            style={{
                              display: "block",
                              marginLeft: "425px",
                              cursor: "pointer",
                            }}
                            onClick={this.arrow2}
                          />
                          <FaAngleDown
                            style={{
                              display: "block",
                              marginLeft: "425px",
                              cursor: "pointer",
                            }}
                            onClick={this.arrow2}
                          />
                        </div>
                        <span style={{ fontWeight: "900" }}>Show</span>
                      </div>
                    </>
                  )} */}
                </div>
              </div>
              <div className="conatiner">
                <ul className="list-unstyled row m-5">
                  {console.log(
                    "commentsreply ki val=",
                    this.props.image,
                    this.props.name
                  )}
                  {this.state.items.map((value, i) => {
                    return (
                      <>
                        <Comments
                          displaycom={this.state.arrow}
                          key={value.id}
                          id={i}
                          img2={this.props.image}
                          name2={this.props.name}
                          img={value.img}
                          name={value.name}
                          value={value.val}
                          length={value.length}
                          sendData={this.handleDelete}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* <ul className="list-unstyled row m-5">
                  <Plan p={this.state.items} sendData={this.handleDelete} />
                </ul> */}
                {/* <button
                  className="btn btn-danger px-5 fw-bold"
                  onClick={this.handleAllDelete}
                >
                  Remove All
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
