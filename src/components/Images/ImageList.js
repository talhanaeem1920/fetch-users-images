import ImageCard from "./ImageCard";
import "../../stylesheets/ImageList.scss";
import React from "react";

const ImageList = (props) => {
  return (
    <div className="ImageList">
      {props.pics &&
        props.pics.map((n, i) => (
          <ImageCard
            url={n.urls.regular}
            key={i}
            description={n.alt_description}
          />
        ))}
    </div>
  );
};

export default ImageList;
