import React, { useState } from "react";

import styleStayItem from "./TripScheduleAddStayItem.module.css";

// 숙박 데이터
const TripScheduleAddStayItem = (props) => {

  return (
    // label 영역: 클릭 시, checkbox 활성화
    <label htmlFor={"staySelect"+props.stayId}>
      <div className={styleStayItem["trip-schedule-add-stay-item"]}>
        {/* 숙박 아이템 왼쪽 정렬: 사진, 정보(이름, 주소, 타입) */}
        <div className={styleStayItem["trip-schedule-add-stay-item-left"]}>
          <div className={styleStayItem["trip-schedule-add-stay-img-div"]}>
            <img
              className={styleStayItem["trip-schedule-add-stay-img"]}
              src={props.stayImg}
              alt="stayImg{props.id}"
            />
          </div>

          {/* 숙박 정보: 이름, 주소, 타입(호텔, 펜션 등) */}
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


        {/* 체크박스 - 1개만 선택될 수 있도록 설정 */}
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
