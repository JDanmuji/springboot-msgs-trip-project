import React, { useState } from "react";

import styles from "./BoardingInfoSelect.module.css";

const BoardingInfoSelect = () => {
  const [countAdult, setCountAdult] = useState(0);
  const [countInfant, setCountInfant] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [showCheckImageN, setShowCheckImageN] = useState(false);
  const [showCheckImageP, setShowCheckImageP] = useState(false);
  const [showCheckImageB, setShowCheckImageB] = useState(false);
  const [showCheckImageF, setShowCheckImageF] = useState(false);

  const addAdultHandler = () => {
    setCountAdult((prevCount) => prevCount + 1);
  };
  const subAdultHandler = () => {
    setCountAdult((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
  };
  const addInfantHandler = () => {
    setCountInfant((prevCount) => prevCount + 1);
  };
  const subInfantHandler = () => {
    setCountInfant((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
  };
  const addChildHandler = () => {
    setCountChild((prevCount) => prevCount + 1);
  };
  const subChildHandler = () => {
    setCountChild((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
  };

  const CheckImgHandlerN = () => {
    setShowCheckImageN((prevShowImageN) => !prevShowImageN);
  };
  const CheckImgHandlerP = () => {
    setShowCheckImageP((prevShowImageP) => !prevShowImageP);
  };
  const CheckImgHandlerB = () => {
    setShowCheckImageB((prevShowImageB) => !prevShowImageB);
  };
  const CheckImgHandlerF = () => {
    setShowCheckImageF((prevShowImageF) => !prevShowImageF);
  };

  return (
    <div className={styles["width-wrapper"]}>
      <div className={styles["width-wrapper-inner"]}>
        {/* 인원 선택 */}
        <div className={styles["width-wrapper-inner-left"]}>
          {/* 성인 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={subAdultHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                성인 {countAdult}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 이상
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={addAdultHandler}
            >
              +
            </div>
          </div>

          {/* 소아 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={subInfantHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                소아 {countInfant}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 미만
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={addInfantHandler}
            >
              +
            </div>
          </div>

          {/* 유아 */}
          <div className={styles["boarding-info-num"]}>
            <div
              className={styles["boarding-info-num-left"]}
              onClick={subChildHandler}
            >
              -
            </div>
            <div className={styles["boarding-info-num-center"]}>
              <div className={styles["boarding-info-num-center-top"]}>
                유아 {countChild}명
              </div>
              <div className={styles["boarding-info-num-center-bottom"]}>
                만 12세 미만
              </div>
            </div>
            <div
              className={styles["boarding-info-num-right"]}
              onClick={addChildHandler}
            >
              +
            </div>
          </div>
        </div>

        {/* 좌석 선택 */}
        <div className={styles["width-wrapper-inner-right"]}>
          <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={CheckImgHandlerN}
          >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
              일반석
            </div>
            {showCheckImageN && (
              <img
                className={styles["width-wrapper-inner-right-inner-img"]}
                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                alt="icon_check"
              />
            )}
          </div>

          <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={CheckImgHandlerP}
          >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
              프리미엄 일반석
            </div>
            {showCheckImageP && (
              <img
                className={styles["width-wrapper-inner-right-inner-img"]}
                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                alt="icon_check"
              />
            )}
          </div>

          <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={CheckImgHandlerB}
          >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
              비즈니스석
            </div>
            {showCheckImageB && (
              <img
                className={styles["width-wrapper-inner-right-inner-img"]}
                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                alt="icon_check"
              />
            )}
          </div>

          <div
            className={styles["width-wrapper-inner-right-inner"]}
            onClick={CheckImgHandlerF}
          >
            <div className={styles["width-wrapper-inner-right-inner-text"]}>
              일등석
            </div>
            {showCheckImageF && (
              <img
                className={styles["width-wrapper-inner-right-inner-img"]}
                src={process.env.PUBLIC_URL + '/images/icon_check.png'}
                alt="icon_check"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardingInfoSelect;
