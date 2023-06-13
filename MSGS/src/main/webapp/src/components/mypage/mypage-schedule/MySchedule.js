import React from "react";
import styles from "./MySchedule.module.css";

const MySchedule = (props) => {
    const { data } = props;
    console.log(data);

    const listCount = () => {
        return listCount(data.length);
    };
    console.log(listCount);

    return (
        <div className={styles["myschedule-main-wrap"]}>
            {data.map((item, index) => {
                return (
                    <div className={styles["myschedule-mypage-list"]} key={index}>
                        <div className={styles["myschedule-mypage-photo"]}>
                            <div className={styles["myschedule-d-day-text"]}>D-1</div>
                            <div className={styles["myschedule-list-image"]}>
                                <img src={item.img} />
                            </div>
                        </div>
                        <div className={styles["list-content-city"]}>
                            <p className={styles["list-content-cityname"]}>{item.city}</p>
                            <p className={styles["list-content-fullcityname"]}>{item.fullCityName}</p>
                            <p className={styles["list-content-email"]}>{item.email}</p>
                            <p className={styles["list-content-level"]}>{item.level}</p>
                        </div>
                        <div className={styles["schedule-info"]}>
                            <div className={styles["schedule-info-01"]}>
                                <div className={styles["schedule-info-01-001"]}>
                                    <p className={styles["schedule-info-01-tourname"]}>여행이름</p>
                                    <span>{item.tourName}</span>

                                    <a href="">
                                        <img src="/public/images/free-icon-edit-860814.png" />
                                    </a>
                                </div>
                                <p className={styles["schedule-info-01-lastupdate"]}>최종수정</p>

                                <span>{item.lastUpdateDay}</span>
                            </div>
                            <div className={styles["schedule-info-02"]}>
                                <div className={styles["schedule-info-02-001"]}>
                                    <p className={styles["schedule-info-02-tourdays"]}>여행일자</p>

                                    <div className={styles["tour-days"]}>
                                        <span name="tourStartDay">{item.tourStartDay}</span>
                                        <span> ~ </span>
                                        <span>{item.tourEndDay}</span>
                                    </div>

                                    <p className={styles["schedule-info-02-location"]}>선택장소</p>

                                    <span>{item.selectedLocation}</span>
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
                );
            })}
        </div>
    );
};

export default MySchedule;
