import React from "react";

import style3 from "./TripStoryItemThumbnail.module.css";

const TripStoryItemThumbnail = (props) => {
    const getThumbnailClass = (length) => {
        if (length === 0) {
            return "trip-story-item-thumbnail-zero";
        } else if (length === 1) {
            return "trip-story-item-thumbnail-one";
        } else if (length === 2) {
            return "trip-story-item-thumbnail-two";
        } else if (length === 3) {
            return "trip-story-item-thumbnail-three";
        } else if (length === 4) {
            return "trip-story-item-thumbnail-four";
        } else {
            return "trip-story-item-thumbnail-five";
        }
    };

    const thumbnailClass = getThumbnailClass(props.tripImg.length);

    return (
        <div
            className={`${style3["trip-story-item-thumb"]} ${style3[thumbnailClass]}`}
        >
            {props.tripImg.map((image, index) => {
                if (index < 5) {
                    return (
                        <img
                            // className={style3[thumbnailClass]}
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
