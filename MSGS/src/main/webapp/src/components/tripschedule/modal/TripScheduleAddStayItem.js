import React from "react";

import styleStayItem from "./TripScheduleAddStayItem.module.css";

const TripScheduleAddStayItem = (props) => {
  return (
    <label for="staySelect">
      <div className={styleStayItem["trip-schedule-add-stay-item"]}>
        <div className={styleStayItem["trip-schedule-add-stay-img-div"]}>
          <img
            className={styleStayItem["trip-schedule-add-stay-img"]}
            src={props.stayImg}
            alt="stayImg{props.id}"
          />
        </div>
        <div className={styleStayItem["trip-schedule-add-stay-item-info"]}>
          <div className={styleStayItem["trip-schedule-add-stay-item-name"]}>
            {props.stayName}
          </div>
          <div
            className={styleStayItem["trip-schedule-add-stay-item-loc-type"]}
          >
            <p>{props.stayLocation}</p>
            <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
            <p>{props.stayType}</p>
          </div>
        </div>
        <div className={styleStayItem["trip-schedule-add-stay-item-checkbox-div"]}>
          <input className={styleStayItem["trip-schedule-add-stay-item-checkbox"]} type="checkbox" id="staySelect" />
        </div>
      </div>
    </label>
  );
};

export default TripScheduleAddStayItem;
