import React from 'react'

const Images = (props) => {
    return (
      <div>
        {console.log("Image compo",props.imgage)}
        <img src={props.imgage} alt="profileimage" />
      </div>
    );
}

export default Images
