import React from 'react';
import styles from "./BusTimeList.module.css";
import moment from "moment";

import BusSelectCard from "./modal-item/BusSelectCard";
import TimeListItem from "./modal-item/TimeListItem";

const BusTimeList = (props) => {
    const now = moment();

    return (
        <div className={styles["bus-time-wrap"]}>
            {
                props.selectTime.fromTime && (
                    <>
                        <div className={styles["bus-selected-card"]}>
                            <BusSelectCard
                                headTitle="가는 편"
                                date={props.state.startDate}
                                data={props.selectTime.fromTime}
                                close={() => {
                                    props.setSelectTime({
                                        fromTime: null,
                                        toTime: null
                                    })
                                }}
                            />
                            <BusSelectCard
                                headTitle="오는 편"
                                date={props.state.endDate}
                                data={props.selectTime.toTime}
                                close={() => {
                                    props.setSelectTime({
                                        ...props.selectTime,
                                        toTime: null
                                    })
                                }}
                            />
                        </div>
                    </>
                )
            }


            <div className={styles["list-header-wrap"]}>
                <div className={styles["list-title"]}>
                    가는 편 선택
                </div>
                <div className={styles["list-sub-title-wrap"]}>
                    <span className={styles["list-sub-title"]}>
                        {!props.selectTime.fromTime ? props.fromBusTerminal : props.toBusTerminal}
                    </span>
                    <span className={styles["list-sub-title-img"]}></span>
                    <span className={styles["list-sub-title"]}>
                        {!props.selectTime.fromTime ? props.toBusTerminal : props.fromBusTerminal}
                    </span>
                </div>
            </div>

            <div className={styles["time-list-wrap"]}>
                {
                    props.timeList.map((data,index) => {
                        const depTime = moment(data.depPlandTime, 'YYYYMMDDHHmm');
                        const isPast = now.isAfter(depTime);
                        return (
                           !isPast &&
                           <TimeListItem
                                key={index}
                                data={data}
                                selectTimeHandler={
                                    props.selectTime.fromTime === null  ?
                                        (data) => props.selectTimeHandler("from", data) :
                                            (data) => props.selectTimeHandler("to", data)
                                }
                            />
                        )

                    })
                }
            </div>

        </div>
    );
};

export default BusTimeList;