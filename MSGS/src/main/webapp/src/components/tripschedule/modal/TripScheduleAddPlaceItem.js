import React from 'react';

import stylePlaceItem from "./TripScheduleAddPlaceItem.module.css";

// 장소 데이터 불러오기
const TripScheduleAddPlaceItem = (props) => {
    return (

      // label 구역 내 클릭 시, checkbox 선택
        <label htmlFor="staySelect" >
        <div className={stylePlaceItem["trip-schedule-add-place-item"]}>
          <div className={stylePlaceItem["trip-schedule-add-place-img-div"]}>
            <img
              className={stylePlaceItem["trip-schedule-add-place-img"]}
              src={props.placeImg}
              alt="stayImg{props.id}"
            />
          </div>
          <div className={stylePlaceItem["trip-schedule-add-place-item-info"]}>
            <div className={stylePlaceItem["trip-schedule-add-place-item-name"]}>
              {props.placeName}
            </div>
            <div
              className={stylePlaceItem["trip-schedule-add-place-item-loc-type"]}
            >
              <p>{props.placeLocation}</p>
              <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
              <p>{props.placeType}</p>
            </div>
          </div>
          <div className={stylePlaceItem["trip-schedule-add-place-item-checkbox-div"]}>
            <input className={stylePlaceItem["trip-schedule-add-place-item-checkbox"]} type="checkbox" id="staySelect" onClick={props.countCheckedHandler} />
            <p className={stylePlaceItem["trip-schedule-add-place-item-checkbox-p"]}></p>
          </div>
        </div>
      </label>
      );
};

export default TripScheduleAddPlaceItem;