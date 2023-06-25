import React from "react";

import style3 from "./RestaurantItemThumbnail.module.css";

const RestaurantItemThumbnail = (props) => {
    const { restaurantImg } = props; // 이미지 식당
    const { length } = props; // length

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

    const thumbnailClass = getThumbnailClass(length);

    return (
        <div
            className={`${style3["trip-story-item-thumb"]} ${style3[thumbnailClass]}`}
        >
            
               
                        <img
                            // className={style3[thumbnailClass]}
                            src={restaurantImg}
                            alt={`restaurantImg`}
                        />
                    
        </div>
    );
};

export default RestaurantItemThumbnail;
