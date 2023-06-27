import { addDays, differenceInCalendarDays, format } from "date-fns";
import React, { useState } from "react";

import { DateRange } from "react-date-range";
import ko from 'date-fns/locale/ko'; // 한국어
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import modalStyles from "../BusTerminalModal.module.css"; // import the CSS module
import styles from './BusCalendar.module.css';


const BusCalendar = ({onClick, state, setState, handlerState}) => {

    return (
        <div className={styles["calender-wrap"]}>
            <div className={[modalStyles["modal-head-wrap"], styles["head-wrap"]].join(" ")}>
                <h1 className={modalStyles["modal-title"]}>날짜 선택</h1>
                <span onClick={onClick}>
                  <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
            </span>
            </div>
            <div className={styles["calender-date-wrap"]}>
                <DateRange
                    editableDateInputs={true}
                    onChange={(item) => handlerState(item.selection)}
                    moveRangeOnFirstSelection={false}
                    ranges={[state]}
                    months={2} // 2달
                    minDate={addDays(new Date(), 0)} // 현재 날 이전 날짜 선택 불가
                    direction='horizontal'
                    rangeColors={['#9BCDD2']} // 선택 시, 색깔
                    locale={ko} // 한국어
                />
            </div>
        </div>
    );
};

export default BusCalendar;
