import React, { useState, Component } from "react";
import Post from "./Post";
import {
  FaCalendarCheck,
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
} from "react-icons/fa";
import ImageUploader from "react-images-upload";
import User2 from "./User2";
import CreateTweet2 from "./CreateTweet2";
import Twitts from "./Twitts";
class CreateTweet extends Component {
  state = {
    items: [],
    text: "",

    img: null,
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  };

  // onDrop = (pictureFiles, pictureDataURLs) => {
  //   this.setState({
  //     pictures: this.state.pictures.concat(pictureFiles),
  //     img: pictureDataURLs,
  //   });
  //   console.log(pictureDataURLs);

  //   console.log(this.state.img);
  // };
  onkeydown = (event) => {
    if (event.key === "Enter") {
      console.log("key");

      event.preventDefault();
      // event.stopPropgation();
      this.handleAdd();
    }
  };
  handleAdd = (e) => {
    console.log("button cliked");
    if (this.state.text !== "") {
      const items = [
        ...this.state.items,
        {
          id: this.state.items.length,
          val: this.state.text,
          img: this.props.imgs,
          name: this.props.names,
        },
      ];

      this.setState({ items: items, text: " " });

      console.log("itme2 ki value=", this.state.items);
    }
  };

  render() {
    return (
      <div className="create">
        <div className="create__first">
          <div className="create__img">
            {/* <img src="/images/logo.png" alt="logo" /> */}
            <img src={this.props.imgs} alt="logo" />
          </div>
          <h4 style={{ marginLeft: "17px" }}>{this.props.names}</h4>
          <div className="create__input">
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              please write tweets =
            </span>
            {/* <input
              type="text"
              className="create__control"
              value={this.state.text}
              onChange={this.handleChange}
              onKeyPress={this.onkeydown}
              placeholder="what's Happning"
            /> */}
            <input
              type="text"
              className="form-control"
              placeholder="what's Happning"
              value={this.state.text}
              onChange={this.handleChange}
              onKeyPress={this.onkeydown}
              style={{
                border: "0",
                borderBottom: "1px solid black",
                marginLeft: "5px",
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "25px" }}>
          <span
            style={{
              color: "white",
              borderRadius: "20px",
              fontSize: "15px",
              padding: "5px",
              backgroundColor: "blue",
            }}
          >
            Followers
          </span>
          <span
            style={{
              color: "gray",
              borderRadius: "20px",
              fontSize: "15px",
              padding: "5px",
              fontWeight: "bold",
            }}
          >
            {this.props.followers}
          </span>
        </div>
        <div className="create__second">
          <div className="create__icon">
            <FaRegImage className="ic" />
            <FaRegListAlt className="ic" />
            <FaRegSmile className="ic" />
            <FaCalendarCheck className="ic" />
          </div>
          <div className="create_btn">
            <button onClick={this.handleAdd}>Post</button>
          </div>
        </div>

        <div>
          <ul className="list-unstyled row m-5">
            {this.state.items.reverse().map((value, i) => {
              return (
                <Post
                id={this.props.id}
                  key={value.id}
                  name2={this.props.names}
                  image2={this.props.imgs}
                  name={value.name}
                  image={value.img}
                  value={value.val}
                  length={value.length}
                  sendData={this.handleDelete}
                  
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreateTweet;
