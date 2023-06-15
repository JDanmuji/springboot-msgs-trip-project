import React from "react";

import data from "./ReviewDummyData";

import styles from "./LocContainerHeader.module.css";
const LocContainerHeader = () => {
  // 평점 계산
  const sumStars = data.reduce((sum, item) => sum + item.stars, 0);
  const avgStars = Math.round(sumStars / data.length);

  return (
    <div className={[styles["loc-wrap"], styles["loc-header"]].join(" ")}>
      <h1 className={styles["header-title"]}>경기전</h1>
      {/* -----star----- */}
      <div className={styles["loc-rating"]}>
        <div className={styles["star-rating"]}>
          {/* -----map----- */}
          {/* 색칠된 별 */}
          {Array.from({ length: avgStars }).map((_, index) => (
            <span key={index} className={styles["star-icon"]}></span>
          ))}
          {/* 빈 별 */}
          {Array.from({ length: 5-avgStars }).map((_, index) => (
            <span key={index} className={styles["star-empty-icon"]}></span>
          ))}

          {/* ---------- */}
          &nbsp;{data.length}
        </div>

        {/*------ icon ------*/}
        <div className={styles["like-cnt"]}>
          <div className={styles["like-icon"]}></div>
          &nbsp;4,646
        </div>
      </div>

      {/*----location-----*/}
      <div className={styles["loc-addr"]}>
        <div className={styles["loc-addr-text"]}>전주 한옥 마을 주변</div>
      </div>
    </div>
  );
};

export default LocContainerHeader;
