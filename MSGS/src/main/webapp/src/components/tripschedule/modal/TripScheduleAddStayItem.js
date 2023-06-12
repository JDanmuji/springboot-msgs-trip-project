import React, { useState } from "react";

import styleStayItem from "./TripScheduleAddStayItem.module.css";

const TripScheduleAddStayItem = (props) => {

  return (
    <label htmlFor={"staySelect"+props.stayId}>
      <div className={styleStayItem["trip-schedule-add-stay-item"]}>
        <div className={styleStayItem["trip-schedule-add-stay-item-left"]}>
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
        </div>
        <div
          className={styleStayItem["trip-schedule-add-stay-item-checkbox-div"]}
        >
          <input
            className={styleStayItem["trip-schedule-add-stay-item-checkbox"]}
            type="checkbox"
            name="staySelect"
            id={"staySelect"+props.stayId}
            onChange={(e) => props.checkOnlyOne(e.target)}
          />
        </div>
      </div>
    </label>
  );
};

export default TripScheduleAddStayItem;
