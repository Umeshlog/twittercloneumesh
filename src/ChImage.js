import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";

// import { Input } from "antd";
// import "../src/component/style.css";
// import "./style.css";

class ChImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [], images: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    // const items = [...this.state.images, pictureDataURLs];
    debugger;
    console.log(pictureDataURLs);
    const pictures = [...this.state.pictures, { pictureDataURLs }];
    this.setState({
      pictures: pictures,

      // images: items,
    });
    console.log(pictureDataURLs);
    console.log(pictureFiles);
    console.log(this.state.images);
    console.log(this.state.pictures);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <ImageUploader
              singleImage={true}
              withIcon={false}
              multiple={false}
              withPreview={true}
              label=""
              buttonText="Upload Images"
              // onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576456}
              fileSizeError=" file size is too big"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ChImage;
