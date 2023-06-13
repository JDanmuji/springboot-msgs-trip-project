import React from "react";

import style3 from "./TripStoryItemThumbnail.module.css";

const TripStoryItemThumbnail = (props) => {
  let thumbnailContainer = "";
  const getThumbnailClass = (length) => {
    if (length === 0) {
      thumbnailContainer += "trip-story-item-thumbnail-container-zero";
      return "trip-story-item-thumbnail-zero";
    } else if (length === 1) {
      return "trip-story-item-thumbnail-one";
    } else if (length === 2) {
      thumbnailContainer += "trip-story-item-thumbnail-container-two";
      return "trip-story-item-thumbnail-two";
    } else if (length === 3) {
      thumbnailContainer += "trip-story-item-thumbnail-container-three";
      return "trip-story-item-thumbnail-three";
    } else if (length === 4) {
      thumbnailContainer += "trip-story-item-thumbnail-container-four";
      return "trip-story-item-thumbnail-four";
    } else {
      thumbnailContainer += "trip-story-item-thumbnail-container-five";
      return "trip-story-item-thumbnail-five";
    }
  };

  const thumbnailClass = getThumbnailClass(props.tripImg.length);

  return (
    <div className={style3[thumbnailContainer]}>
      {props.tripImg.map((image, index) => {
        if (index < 5) {
          return (
            <img
              className={style3[thumbnailClass]}
              key={index}
              src={image}
              alt={`tripImg-${index}`}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TripStoryItemThumbnail;
