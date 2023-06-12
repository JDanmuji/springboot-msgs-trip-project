import React, { useState } from "react";

import TripScheduleAddPlaceItem from "./TripScheduleAddPlaceItem";

import items from "../modal-data/TripScheduleAddStayData";

import styleModalPlace from "./TripScheduleAddPlace.module.css";

const TripScheduleAddPlace = () => {
  const [countChecked, setCountChecked] = useState(0);

  const countCheckedHandler = (e) => {
    setCountChecked((prevState) => prevState + 1);
    console.log(countChecked);
    console.log(e);
    console.log(e.target);
    console.log(e.target.closest);
  };

  return (
    <div className={styleModalPlace["trip-schedule-add-place"]}>
      <div className={styleModalPlace["trip-schedule-add-place-item"]}>
        {items.map((data) => (
          <TripScheduleAddPlaceItem
            key={data.id}
            placeId={data.id}
            placeImg={data.stayImg}
            placeName={data.stayName}
            placeLocation={data.stayLocation}
            placeType={data.stayType}
            countCheckedHandler={countCheckedHandler}
          />
        ))}
      </div>
      <div
        className={styleModalPlace["trip-schedule-add-place-item-selected"]}
      ></div>
    </div>
  );
};

export default TripScheduleAddPlace;
