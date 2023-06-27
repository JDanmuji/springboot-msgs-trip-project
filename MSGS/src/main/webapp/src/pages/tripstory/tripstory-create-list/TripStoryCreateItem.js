import React, { useState } from "react";

import styles from "./TripStoryCreateItem.module.css";
import TripStoryCreateCfmModal1 from "./TripStoryCreateCfmModal1";
import TripStoryCreateCfmModal2 from "./TripStoryCreateCfmModal2";

const TripStoryCreateItem = (props) => {
  const { data } = props;
  const today = new Date();
  const startDay = new Date(data.tourStartDay);
  const timeDiff = startDay.getTime() - today.getTime();
  const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // ----------- 여행을 시작하지 않은 경우, 여행기 작성 불가 -----------
  const [dayChkModal, setDayChkShowModal] = useState(false);

  const dayChkHandler = () => {
    if (dDay > 0) {
        setDayChkShowModal(true);
    }
  };

  const onClose = () => {
    setDayChkShowModal(false);
    setIsWriteChkModal(false);
  };

  // ----------- 작성한 여행기가 있는지 유효성 검사 -----------
  const [isWriteChkModal, setIsWriteChkModal] = useState(false);

  const isWriteChkHandler = () => {
    // DB에서 관련 내용 조회하여 if 조건문 활용(navigate or Modal)
    setIsWriteChkModal(true);
  };



  return (
    <div className={styles["myschedule-main-wrap"]}>
      <div className={styles["myschedule-mypage-list"]}>
        <div className={styles["myschedule-mypage-photo"]}>
          <div className={styles["myschedule-d-day-text"]}>D-{dDay}</div>
          <div className={styles["myschedule-list-image"]}>
            <img src={data.img} alt="data.img" />
          </div>
        </div>
        <div className={styles["list-content-city"]}>
          <p className={styles["list-content-cityname"]}>{data.city}</p>
          <p className={styles["list-content-fullcityname"]}>
            {data.fullCityName}
          </p>
          <p className={styles["list-content-email"]}>{data.email}</p>
          <p className={styles["list-content-level"]}>{data.level}</p>
        </div>
        <div className={styles["schedule-info"]}>
          <div className={styles["schedule-info-01"]}>
            <div className={styles["schedule-info-01-001"]}>
              <p className={styles["schedule-info-01-tourname"]}>여행이름</p>
              <span>{data.tourName}</span>
            </div>
          </div>
          <div className={styles["schedule-info-02"]}>
            <div className={styles["schedule-info-02-001"]}>
              <p className={styles["schedule-info-02-tourdays"]}>여행일자</p>

              <div className={styles["tour-days"]}>
                <span name="tourStartDay">{data.tourStartDay}</span>
                <span> ~ </span>
                <span>{data.tourEndDay}</span>
              </div>
            </div>
          </div>
          <div className={styles["schedule-info-button"]}>
            <button onClick={dayChkHandler}>여행이야기 작성하기</button>
            <button onClick={isWriteChkHandler}>작성한 여행기 확인하기</button>
          </div>
        </div>
      </div>
      {dayChkModal && <TripStoryCreateCfmModal1 onClose={onClose} />}
      {isWriteChkModal && <TripStoryCreateCfmModal2 onClose={onClose} />}
    </div>
  );
};

export default TripStoryCreateItem;
