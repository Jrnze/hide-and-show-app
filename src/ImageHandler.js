import React, { useState } from "react";
import "./App.css";

export default function ImageHandler() {
  const [isShown, setIsShown] = useState(true);
  const imageIsShown = () => setIsShown(true);
  const imageIsNotShown = () => setIsShown(false);
  return (
    <div className="mainDiv">
      <div className="subDiv">
        {isShown && (
          <img
            src="cat_img.jpg"
            alt="cat with sunglasses"
            className="image"
          ></img>
        )}
      </div>
      <button className="showButton" onClick={imageIsShown}>
        SHOW
      </button>
      <button className="hideButton" onClick={imageIsNotShown}>
        HIDE
      </button>
    </div>
  );
}
