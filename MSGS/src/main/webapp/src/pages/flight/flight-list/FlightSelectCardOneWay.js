import React from "react";

import styles from "./FlightSelectCardOneWay.module.css";

const FlightSelectCardOneWay = (props) => {
  const clickItem = props.clickItem;
  console.log("clickItem", clickItem);

  const clickItem2 = props.clickItem2;
  console.log("clickItem2", clickItem2);

  const formatTime = (time) => {
    const strTime = String(time);
    const year = strTime.substring(0, 4);
    const month = strTime.substring(4, 6);
    const day = strTime.substring(6, 8);
    return `${year}.${month}.${day}`;
  };

  const calculateDuration = (depTime, arrTime) => {
    if (typeof depTime !== "string") {
      depTime = String(depTime);
    }
    if (typeof arrTime !== "string") {
      arrTime = String(arrTime);
    }
    const depYear = depTime.substring(0, 4);
    const depMonth = depTime.substring(4, 6);
    const depDay = depTime.substring(6, 8);
    const depHour = depTime.substring(8, 10);
    const depMinute = depTime.substring(10, 12);

    const arrYear = arrTime.substring(0, 4);
    const arrMonth = arrTime.substring(4, 6);
    const arrDay = arrTime.substring(6, 8);
    const arrHour = arrTime.substring(8, 10);
    const arrMinute = arrTime.substring(10, 12);

    const depDateTime = new Date(
      `${depYear}-${depMonth}-${depDay}T${depHour}:${depMinute}:00`
    );
    const arrDateTime = new Date(
      `${arrYear}-${arrMonth}-${arrDay}T${arrHour}:${arrMinute}:00`
    );

    const durationMs = arrDateTime.getTime() - depDateTime.getTime();
    const durationMinutes = Math.floor(durationMs / (1000 * 60));
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;
    return `${hours}시간 ${minutes}분`;
  };

  if (!clickItem) {
    return (
      <div
        className={
          styles[
            props.className === "goingFlight"
              ? "width-wrapper-going"
              : ""
          ]
        }
      >
        <div className={styles["card-container"]}>
          <div
            className={
              styles[
                props.className === "goingFlight"
                  ? "card-container-head-going"
                  : ""
              ]
            }
          >
            <div className={styles["card-container-head-left"]}>
              {props.className === "goingFlight" ? "가는 편" : ""}
            </div>
          </div>
          <div className={styles["card-container-detail"]}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_flight.png"}
                alt="icon_flight"
              />
            </div>
            <div className={styles["card-container-detail-info"]}>
              <div className={styles["card-container-detail-info-right-2"]}>
                {props.className === "goingFlight"
                  ? "가는 편 선택"
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (clickItem) {
    // 가는 편 선택
    return (
      <div className={styles["width-wrapper-going"]}>
        <div className={styles["card-container"]}>
          <div className={styles["card-container-head-going"]}>
            <div className={styles["card-container-head-left"]}>가는 편</div>
            <div className={styles["card-container-head-right"]}>
              {formatTime(clickItem.depPlandTime)}
            </div>
          </div>
          <div className={styles["card-container-detail"]}>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/icon_flight.png"}
                alt="icon_flight"
              />
            </div>
            <div className={styles["card-container-detail-info"]}>
              <div className={styles["card-container-detail-info-right"]}>
                <div className={styles["card-container-detail-info-right-1"]}>
                  {props.className === "goingFlight" ? clickItem.airlineNm : ""}
                </div>
                <div className={styles["card-container-detail-info-right-2"]}>
                  {props.className === "goingFlight"
                    ? clickItem.vihicleId
                    : "오는 편 선택"}
                </div>
              </div>
              <div className={styles["card-container-detail-info-left"]}>
                {props.className === "goingFlight"
                  ? calculateDuration(clickItem.depPlandTime, clickItem.arrPlandTime)
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  
};

export default FlightSelectCardOneWay;
