import React from "react";

import styles from "./FlightSelectCard.module.css";

const FlightSelectCard = (props) => {
  return (
    <div  className={styles[props.className === 'goingFlight' ? 'width-wrapper-going' : 'width-wrapper-coming']}>
      <div className={styles["card-container"]}>
        <div className={styles[props.className === 'goingFlight' ? 'card-container-head-going' : 'card-container-head-coming']}>
          <div className={styles["card-container-head-left"]}>{props.className === 'goingFlight' ? '가는 편' : '오는 편'}</div>
          <div className={styles["card-container-head-right"]}>
            6월 15일(목)
          </div>
        </div>
        <div className={styles["card-container-detail"]}>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/icon_flight.png'}
              alt="icon_flight"
            />
          </div>
          <div className={styles["card-container-detail-info"]}>
            <div className={styles["card-container-detail-info-right"]}>
              <div className={styles["card-container-detail-info-right-1"]}>항공사 이름</div>
              <div className={styles["card-container-detail-info-right-2"]}>17:00 ICN - 19:05 GMP</div>
            </div>
            <div className={styles["card-container-detail-info-left"]}>
               01시간 55분
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSelectCard;
