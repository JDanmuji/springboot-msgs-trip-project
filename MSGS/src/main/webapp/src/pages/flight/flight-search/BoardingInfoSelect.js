import React, { useState } from "react";

import styles from "./BoardingInfoSelect.module.css";

const BoardingInfoSelect = (props) => {
  return (
    <div className={styles["width-wrapper"]}>
      <div className={styles["width-wrapper-inner"]}>
        {/* 인원 선택 */}
        <div className={styles["width-wrapper-inner-left"]}>
          {/* 성인 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={props.subAdultHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                성인 {props.countAdult}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 이상
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={props.addAdultHandler}
            >
              +
            </div>
          </div>

          {/* 소아 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={props.subInfantHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                소아 {props.countInfant}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 미만
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={props.addInfantHandler}
            >
              +
            </div>
          </div>

          {/* 유아 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={props.subChildHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                유아 {props.countChild}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 미만
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={props.addChildHandler}
            >
              +
            </div>
          </div>
        </div>

        {/* 좌석 선택 */}
        <div className={styles["width-wrapper-inner-right"]}>
          <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={props.CheckImgHandlerN}
          >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
              일반석
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
              비즈니스석
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
      <div className={styles["boarding-info-select-complete-btn"]} onClick={props.selectedBoardingInfoHandler}>선택 완료</div>
    </div>
  );
};

export default BoardingInfoSelect;
