import React from "react";
import styles from "./TimeListItem.module.css";
import moment from "moment";

const TimeListItem = ({data, selectTimeHandler}) => {
    const depTime = moment(data.depPlandTime, 'YYYYMMDDHHmm');
    const arrTime = moment(data.arrPlandTime, 'YYYYMMDDHHmm');
    const duration = moment.duration(arrTime.diff(depTime));

    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');

    const durationFormatted = `${paddedHours}시간 ${paddedMinutes}분`;

    return (
        <div className={styles["card-container"]} onClick={() => selectTimeHandler(data)}>
            <div className={styles["time-schedule-wrap"]}>
                <div className={styles["bus-enterprise"]}>
                    <img src={process.env.PUBLIC_URL + "/images/bus/bus_dyexpress_s_on.png"}/>
                </div>
                <div className={styles["bus-time-wrap"]}>
                    <span className={styles["bus-time"]}>
                        {depTime.format("HH:mm")}
                    </span>
                    <span className={styles["bus-fromTo-img-wrap"]}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/bus/ico_fromto_line.png"}
                            className={styles["bus-fromTo-img"]}
                        />
                    </span>
                    <span className={styles["bus-time"]}>
                        {arrTime.format("HH:mm")}
                    </span>
                    <div className={styles["bus-time-required"]}>
                        {durationFormatted}
                    </div>
                </div>
            </div>
            <div className={styles["bus-charge-container"]}>
                <div className={styles["bus-grade"]}>
                    {data.gradeNm}
                </div>
                <div className={styles["bus-charge"]}>
                    {data.charge.toLocaleString()}원
                </div>
            </div>
        </div>
    );
};

export default TimeListItem;
