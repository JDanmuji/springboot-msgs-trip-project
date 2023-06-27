import React from 'react';

import modalStyles from "./BusTerminalModal.module.css"
import styles from "./SelectPersonInfo.module.css"
import Counter from "./modal-item/Counter";
import SeatOption from "./modal-item/SeatOption";

const SelectPersonInfo = (props) => {
    return (
        <div className={styles["width-wrapper"]}>
            <div className={[modalStyles["modal-head-wrap"], styles["info-head-wrap"]].join(" ")}>
                <h1 className={modalStyles["modal-title"]}>인원 & 좌석 선택</h1>
                <span onClick={props.onClick}>
                      <img src={process.env.PUBLIC_URL + '/images/icon_close.png'} alt="icon_close" />
                </span>
            </div>
            <div className={styles["width-wrapper-inner"]}>
                {/* 인원 선택 */}
                <div className={styles["width-wrapper-inner-left"]}>
                    <Counter
                        counter={props.counters.adult}
                        ageLabel="성인"
                        ageInfo="만 12세 이상"
                        updateCounter={(diff) => props.updateCounter('adult', diff)}
                    />
                    <Counter
                        counter={props.counters.infant}
                        ageLabel="소아"
                        ageInfo="만 12세 미만"
                        updateCounter={(diff) => props.updateCounter('infant', diff)}
                    />
                    <Counter
                        counter={props.counters.child}
                        ageLabel="유아"
                        ageInfo="만 12세 미만"
                        updateCounter={(diff) => props.updateCounter('child', diff)}
                    />
                </div>

                {/* 좌석 선택 */}
                <div className={styles["width-wrapper-inner-right"]}>
                    <SeatOption
                        label={props.seatLabel.all}
                        isSelected={props.selectedSeatType === "all"}
                        onSelectionChange={() => props.updateSelectedSeatType("all")}
                    />
                    {/* 일반 */}
                    <SeatOption
                        label={props.seatLabel.general}
                        isSelected={props.selectedSeatType === "general"}
                        onSelectionChange={() => props.updateSelectedSeatType("general")}
                    />
                    {/* 우등 */}
                    <SeatOption
                        label={props.seatLabel.honor}
                        isSelected={props.selectedSeatType === "honor"}
                        onSelectionChange={() => props.updateSelectedSeatType("honor")}
                    />
                    <SeatOption
                        label={props.seatLabel.premium}
                        isSelected={props.selectedSeatType === "premium"}
                        onSelectionChange={() => props.updateSelectedSeatType("premium")}
                    />

                </div>
            </div>
        </div>
    );
};

export default SelectPersonInfo;