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

  console.log("========================props.tripImg===========", props.tripImg);

  const thumbnailClass = getThumbnailClass(props.tripImg.length);

  return (
    // <div
    //   className={`${style3["trip-story-item-thumb"]} ${style3[thumbnailClass]}`}
    // >
    //   {props.tripImg.length === 0 ? (
    //     <img
    //       src={`${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`}
    //       alt="msgs_logo_margin.png"
    //     />
    //   ) : (
    //     props.tripImg.map((image, index) => {
    //       if (index < 5) {
    //         return (
    //           <img
    //             // className={style3[thumbnailClass]}
    //             key={index}
    //             src={image}
    //             onError={props.imgErrorHandler}
    //             alt={`tripImg-${index}`}
    //           />
    //         );
    //       }
    //       return null;
    //     })
    //   )}
    // </div>
    
        <div>
          {props.tripImg.length === 0 ? (
            <div className={style3["trip-story-item-thumbnail-zero"]}>
              <img
                src={`${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`}
                alt="msgs_logo_margin.png"
              />
            </div>
          ) : (
            <div className={`${style3["trip-story-item-thumb"]} ${style3[thumbnailClass]}`}>
              {props.tripImg.map((image, index) => {
                if (index < 5) {
                  return (
                    <img
                      key={index}
                      src={image}
                      onError={props.imgErrorHandler}
                      alt={`tripImg-${index}`}
                    />
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      );
    };

export default TripStoryItemThumbnail;
