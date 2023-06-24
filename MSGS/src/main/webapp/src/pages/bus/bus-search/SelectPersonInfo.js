import React from 'react';

import modalStyles from "./BusTerminalModal.module.css"
import styles from "./SelectPersonInfo.module.css"
import Counter from "./Counter";

const SelectPersonInfo = (props) => {
    return (
        <div className={styles["width-wrapper"]}>
            <div className={[modalStyles["modal-head-wrap"], styles["info-head-wrap"]].join(" ")}>
                <h1 className={modalStyles["modal-title"]}>인원 & 좌석 선택</h1>
                <span onClick={props.selectPersonModal}>
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
                    <div
                        className={styles["width-wrapper-inner-right-inner"]}
                        onClick={props.CheckImgHandlerN}
                    >
                        <div className={styles["width-wrapper-inner-right-inner-text"]}>
                            전체
                        </div>
                        {props.showCheckImageN && (
                            <img
                                className={styles["width-wrapper-inner-right-inner-img"]}
                                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                                alt="icon_check"
                            />
                        )}
                    </div>

                    <div
                        className={styles["width-wrapper-inner-right-inner"]}
                        onClick={props.CheckImgHandlerN}
                    >
                        <div className={styles["width-wrapper-inner-right-inner-text"]}>
                            일반
                        </div>
                        {props.showCheckImageN && (
                            <img
                                className={styles["width-wrapper-inner-right-inner-img"]}
                                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                                alt="icon_check"
                            />
                        )}
                    </div>
                    <div
                        className={styles["width-wrapper-inner-right-inner"]}
                        onClick={props.CheckImgHandlerB}
                    >
                        <div className={styles["width-wrapper-inner-right-inner-text"]}>
                            우등
                        </div>
                        {props.showCheckImageB && (
                            <img
                                className={styles["width-wrapper-inner-right-inner-img"]}
                                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                                alt="icon_check"
                            />
                        )}
                    </div>

                    <div
                        className={styles["width-wrapper-inner-right-inner"]}
                        onClick={props.CheckImgHandlerB}
                    >
                        <div className={styles["width-wrapper-inner-right-inner-text"]}>
                            프리미엄
                        </div>
                        {props.showCheckImageB && (
                            <img
                                className={styles["width-wrapper-inner-right-inner-img"]}
                                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                                alt="icon_check"
                            />
                        )}
                    </div>
                </div>
            </div>
            {/*<div className={styles["boarding-info-select-complete-btn"]} onClick={props.selectedBoardingInfoHandler}>선택 완료</div>*/}
        </div>
    );
};

export default SelectPersonInfo;