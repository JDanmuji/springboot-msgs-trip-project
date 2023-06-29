import React from "react";

import styles from "./BusSelectCard.module.css";
import moment from "moment";
import "moment/locale/ko";
import {format} from "date-fns";
import {ko} from "date-fns/locale";

moment.locale("ko");

const BusSelectCard = ({headTitle, date, data, close}) => {
    console.log(data)
    let depTime;
    let arrTime;
    let durationFormatted;
    if(data) {
        depTime = moment(data.depPlandTime, 'YYYYMMDDHHmm');
        arrTime = moment(data.arrPlandTime, 'YYYYMMDDHHmm');

        const duration = moment.duration(arrTime.diff(depTime));

        const hours = Math.floor(duration.asHours());
        const minutes = duration.minutes();
        const paddedHours = String(hours).padStart(2, '0');
        const paddedMinutes = String(minutes).padStart(2, '0');

        durationFormatted = `${paddedHours}시간 ${paddedMinutes}분`;
    }

    return (
        <div className={
            !data ? styles["bus-card-wrap"] : `${styles["bus-card-wrap"]} ${styles["bus-card-checked-wrap"]}`
        }>
            <div className={styles["card-header-wrap"]}>
                <div className={styles["card-head-left"]}>
                    {headTitle}
                </div>
                <div className={styles["card-head-right"]}>
                    {format(date, "MM.dd(EE)",{ locale: ko })}
                </div>

                {/* select time 취소 버튼 */}
                {
                    data && (
                        <div className={styles["card-head-img-wrap"]} onClick={close}>
                            <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
                        </div>)
                }
            </div>
            {
                data ? (
                    <div className={styles["card-detail"]}>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/images/bus/bus_dyexpress_s_on.png"} alt=""/>
                        </div>
                        <div className={styles["card-detail-info"]}>
                            <div className={styles["card-detail-info-left"]}>
                                {depTime.format("HH:mm")} - {arrTime.format("HH:mm")}
                            </div>
                            <div className={styles["card-detail-info-right"]}>
                                {durationFormatted}
                            </div>
                        </div>
                        <div className={styles["card-charge-wrap"]}>
                            <span className={styles["card-charge-grade"]}>
                                {data.gradeNm}
                            </span>
                            <span className={styles["card-charge"]}>
                                {data.charge.toLocaleString()}원
                            </span>
                        </div>
                    </div>
                ) : (
                <div className={styles["empty-card"]}>
                    아래 목록에서 오는 편을 선택하세요
                </div>
                )
            }
        </div>
    );
};

export default BusSelectCard;

