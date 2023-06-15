import React from "react";
import styles from "./MySchedule.module.css";

const MySchedule = (props) => {
    const { data } = props;
    const today = new Date();
    const startDay = new Date(data.tourStartDay);
    const timeDiff = startDay.getTime() - today.getTime();
    const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return (
        <div className={styles["myschedule-main-wrap"]}>
            <div className={styles["myschedule-mypage-list"]}>
                <div className={styles["myschedule-mypage-photo"]}>
                    <div className={styles["myschedule-d-day-text"]}>D-{dDay}</div>
                    <div className={styles["myschedule-list-image"]}>
                        <img src={data.img} />
                    </div>
                </div>
                <div className={styles["list-content-city"]}>
                    <p className={styles["list-content-cityname"]}>{data.city}</p>
                    <p className={styles["list-content-fullcityname"]}>{data.fullCityName}</p>
                    <p className={styles["list-content-email"]}>{data.email}</p>
                    <p className={styles["list-content-level"]}>{data.level}</p>
                </div>
                <div className={styles["schedule-info"]}>
                    <div className={styles["schedule-info-01"]}>
                        <div className={styles["schedule-info-01-001"]}>
                            <p className={styles["schedule-info-01-tourname"]}>여행이름</p>
                            <span>{data.tourName}</span>

                            <a href="">
                                <img src="/public/images/free-icon-edit-860814.png" />
                            </a>
                        </div>
                        <p className={styles["schedule-info-01-lastupdate"]}>최종수정</p>

                        <span>{data.lastUpdateDay}</span>
                    </div>
                    <div className={styles["schedule-info-02"]}>
                        <div className={styles["schedule-info-02-001"]}>
                            <p className={styles["schedule-info-02-tourdays"]}>여행일자</p>

                            <div className={styles["tour-days"]}>
                                <span name="tourStartDay">{data.tourStartDay}</span>
                                <span> ~ </span>
                                <span>{data.tourEndDay}</span>
                            </div>

                            <p className={styles["schedule-info-02-location"]}>선택장소</p>

                            <span>{data.selectedLocation}</span>
                        </div>
                    </div>
                    <div className={styles["schedule-info-button"]}>
                        <button>일정 수정</button>
                        <button>일정표</button>
                        <button>일정 공유</button>
                        <button>삭제</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySchedule;
