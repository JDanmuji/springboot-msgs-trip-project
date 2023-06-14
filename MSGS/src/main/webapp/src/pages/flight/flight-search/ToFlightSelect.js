import React from "react";

import items from "../flight-data/AirportData";

import styles from "./ToFlightSelect.module.css";

// 공항편 불러오기
const ToFlightSelect = (props) => {
  return (
    <div className={styles["width-wrapper"]}>

      {/* 검색창 */}
      <div className={styles["flight-select-box"]}>
        <input type="text" placeholder="도시, 공항명 검색" />

        {/* 입력된 검색어 삭제 */}
        <span>
          <img
            src={process.env.PUBLIC_URL + '/images/icon_close.png'}
            alt="icon_close"
          />
        </span>
      </div>

      {/* 공항 데이터 출력 */}
      {items.map((data) => (
        <div className={styles["airport-select-items"]} key={data.id} onClick={props.selectedToAirportHandler}>
          <div className={styles["airport-select-box"]} >
            <div className={styles["airport-select-box-location"]}>
              {data.location}
            </div>
            <div className={styles["airport-select-box-eng"]}>{data.eng}</div>
            <div className={styles["airport-select-box-bar"]}>│</div>
            <div className={styles["airport-select-box-kor"]}>{data.kor}</div>
          </div>
          <div className={styles["airport-select-box-line"]}></div>
        </div>
      ))}
    </div>
  );
};

export default ToFlightSelect;
