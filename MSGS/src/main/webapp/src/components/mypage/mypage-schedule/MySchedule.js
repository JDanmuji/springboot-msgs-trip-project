import React from "react";
import styles from "./MySchedule.module.css";

const MySchedule = (props) => {
    const { data } = props;
    const today = new Date();
    const startDay = new Date(data.tourStartDay);
    const timeDiff = startDay.getTime() - today.getTime();
    const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;

    return (
        <div className={styles["myschedule-mypage-item"]}>
            {/* 도시 사진 */}
            <div className={styles["myschedule-mypage-photo"]}>
                <div className={styles["myschedule-d-day-text"]}>
                    <span>
                        D{dDay < 0 ? dDay : dDay === 0 ? "-day" : `+${dDay}`}
                    </span>
                </div>
                <div className={styles["myschedule-list-image"]}>
                    <img src={data.img} alt="selectedCityImg" />
                </div>
            </div>

            {/* 도시 이름 */}
            <div className={styles["city-wrap"]}>
                <p className={styles["list-content-fullcityname"]}>
                    {data.fullCityName} 여행
                </p>
                <p className={styles["list-content-cityname"]}>{data.city}</p>
            </div>

            {/* 기타 정보 */}
            <ul className={styles["schedule-info-list"]}>
                <li className={styles["schedule-info-item"]}>
                    <span className={styles["schedule-info-title"]}>
                        선택장소
                    </span>
                    <span className={styles["schedule-info-value"]}>
                        {data.selectedLocation}
                    </span>
                </li>

                <li className={styles["schedule-info-item"]}>
                    <span className={styles["schedule-info-title"]}>
                        여행일자
                    </span>
                    <span className={styles["schedule-info-value"]}>
                        {data.tourStartDay} - {data.tourEndDay}
                    </span>
                </li>

                <li className={styles["schedule-info-item"]}>
                    <span className={styles["schedule-info-title"]}>
                        최종수정
                    </span>
                    <span className={styles["schedule-info-value"]}>
                        {data.lastUpdateDay}
                    </span>
                </li>
            </ul>

            <div className={styles["schedule-info-button"]}>
                <button>일정 상세</button>
                <button>일정 수정</button>
                <button>삭제</button>
                {/* <button>일정표</button>
                        <button>일정 공유</button> */}
            </div>
        </div>
    );
};

export default MySchedule;
