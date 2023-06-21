import React from "react";
import styles from "./FlightItem.module.css";

const FlightItem = ({ item }) => {
  const { airlineNm } = item; // 항공사명 값 추출
  const { vihicleId } = item; // 항공편명
  const { depPlandTime } = item; // 출발시간
  const { arrPlandTime } = item; // 도착시간

  // 출발시간과 도착시간을 원하는 형식으로 변환
  const formatTime = (time) => {
    const strTime = String(time);
    const year = strTime.substring(0, 4);
    const month = strTime.substring(4, 6);
    const day = strTime.substring(6, 8);
    const hour = strTime.substring(8, 10);
    const minute = strTime.substring(10, 12);
    return `${year}-${month}-${day} ${hour}:${minute}`;
  };

  const formattedDepTime = formatTime(depPlandTime);
  const formattedArrTime = formatTime(arrPlandTime);

  return (
    <div className={styles["width-wrapper-going"]}>
      <div className={styles["card-container"]}>
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
                {formattedDepTime} - {formattedArrTime}
              </div>
              <div className={styles["card-container-detail-info-right-2"]}>
                {vihicleId}-{airlineNm}
              </div>
            </div>
            <div className={styles["card-container-detail-info-left"]}>
              57,900원
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;