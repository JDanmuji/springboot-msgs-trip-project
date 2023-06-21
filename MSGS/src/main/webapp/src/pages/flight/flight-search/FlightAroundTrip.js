import React, { useState } from "react";

import styles from "./FlightAroundTrip.module.css";
import FlightWithData from "../flight-list/FlightWithData";

const FlightAroundTrip = (props) => {
  // 일자 표현식(Default-오늘 기준)
  const today = new Date();

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dayOfWeek = weekdays[today.getDay()];

  const formattedDate = `${month}.${day}(${dayOfWeek})`;

  // 일자 표현식(오늘로부터 3일 후)
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 3); // 3일 후

  const futureMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
  const futureDay = String(futureDate.getDate()).padStart(2, "0");
  const futureDayOfWeek = weekdays[futureDate.getDay()];

  const formattedFutureDate = `${futureMonth}.${futureDay}(${futureDayOfWeek})`;

  // 일반석 등 선택 요소 반환을 위한 배열 생성
  const selectedSeats = [];

  if (props.showCheckImageN) {
    selectedSeats.push("일반석");
  }
  if (props.showCheckImageB) {
    selectedSeats.push("비즈니스석");
  }

  let seatOutput = "";
  if (selectedSeats.length === 1) {
    seatOutput = selectedSeats[0];
  } else if (selectedSeats.length > 1) {
    seatOutput = `${selectedSeats[0]} 외`;
  }

  return (
    <div className={styles["flight-around-trip"]}>
      {/* 비행기 출발 공항 */}
      <div
        onClick={props.selectFromAirportHandler}
        className={styles["from-airport"]}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icon_location.png"}
          alt="icon_location"
        />
        {props.fromAirport}
      </div>

      {/* 비행기 도착 공항 */}
      <div
        onClick={props.selectToAirportHandler}
        className={styles["to-airport"]}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icon_location.png"}
          alt="icon_location"
        />
        {props.toAirport}
      </div>

      {/* 여행 일정 선택 */}
      <div className={styles["day-going-coming"]}>
        {/* 왕복인지 편도인지에 따른 Component 전환: Default-왕복 */}
        {props.isRoundTrip ? (
          <>
            {/* 가는 날 */}
            <div className={styles["day-going"]}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                alt="icon_event_calendar"
              />
              {formattedDate}
            </div>
            {/* 오는 날 */}
            <div className={styles["day-coming"]}>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
                alt="icon_event_calendar"
              />
              {formattedFutureDate}
            </div>
          </>
        ) : (
          // 편도
          <div className={styles["day-oneway"]}>
            <img
              src={process.env.PUBLIC_URL + "/images/icon_event_calendar.png"}
              alt="icon_event_calendar"
            />
            {formattedDate}
          </div>
        )}
      </div>

      {/* 탑승객, 좌석 등급 선택 */}
      <div
        className={styles["boarding-info"]}
        onClick={props.selectBoardingInfoHandler}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/icon_person.png"}
          alt="icon_person"
        />
        {props.countAdult > 0 ? `성인 ${props.countAdult}명 ` : ``}
        {props.countInfant > 0 ? `소아 ${props.countInfant}명 ` : ``}
        {props.countChild > 0 ? `유아 ${props.countChild}명 ` : ``}ㆍ 
        {seatOutput}
      </div>
    </div>
  );
};

export default FlightAroundTrip;