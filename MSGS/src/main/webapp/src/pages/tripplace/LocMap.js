import React from "react";

import styles from "./LocMap.module.css";

const LocMap = () => {
    return (
        <>
            <div className={styles["map-title-wrap"]}>
                <h2 className={styles["map-title"]}>기본정보</h2>
            </div>
            <div className={styles["map-container"]}>
                <div className={styles["static-map-container"]}>
                    <picture className={styles["static-map-picture"]}>
                        {/*--------map api---------*/}
                        <img
                            alt="google map api"
                            className={styles["static-map-img"]}
                        />
                    </picture>
                </div>
                {/* ------ spot marker ------ */}
                <img
                    className={styles["map-marker"]}
                    src="https://assets.triple.guide/images/img_map_pin_sight@4x.png"
                    alt="flag icon"
                />
            </div>
            <div className={styles["addr-list-wrap"]}>
                <ul className={styles["addr-list"]}>
                    <li className={styles["addr-list-item"]}>
                        <div className={styles["addr-list-container"]}>
                            <div className={styles["addr-sub-title"]}>주소</div>
                            <div className={styles["list-container-text"]}>
                                전라북도 전주시 태조로 44
                            </div>
                        </div>
                    </li>
                    <li className={styles["addr-list-item"]}>
                        <div className={styles["addr-list-container"]}>
                            <div className={styles["addr-sub-title"]}>전화</div>
                            <div className={styles["list-container-text"]}>
                                +82632812788
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles["info-list-container"]}>
                <ul className={styles["info-list"]}>
                    <li className={styles["info-list-item"]}>
                        <div className={styles["info-list-item-title"]}>
                            가는방법
                        </div>
                        <div className={styles["info-list-item-text"]}>
                            전동 성당에서 도보 2분, 전주 한옥 마을 내 위치
                        </div>
                    </li>
                    <li className={styles["info-list-item"]}>
                        <div className={styles["info-list-item-title"]}>
                            이용가능시간, 휴무일
                        </div>
                        <div className={styles["flex-box-container-text"]}>
                            09:00 - 20:00
                        </div>
                        {/* <div
                            className={[
                                styles["info-list-item-text"],
                                styles["end-time"],
                            ].join(" ")}
                        >
                            종료 60분 전 입장 마감 <br />
                            기간별 운영시간 상이
                        </div>
                        <button
                            type="button"
                            className={styles["time-check-btn"]}
                        >
                            <div className={styles["time-check-btn-img"]}>
                                기간별 운영시간 확인하기
                            </div>
                        </button> */}
                    </li>
                    <li className={styles["info-list-item"]}>
                        <div
                            className={[
                                styles["info-list-item-title"],
                                styles["info-list-item-title-f"],
                            ].join(" ")}
                        >
                            이용료
                        </div>
                        <div
                            className={[
                                styles["info-list-item-title"],
                                styles["info-list-item-title-s"],
                            ].join(" ")}
                        >
                            유료
                        </div>
                        <div className={styles["info-list-item-text"]}>
                            성인 3,000원, 청소년(25세 미만) 2,000원 <br />
                            어린이(13세 미만) 1,000원 <br />
                            만 6세 이하 · 만 65세 이상 무료 <br />
                        </div>
                    </li>
                    <li className={styles["info-list-item"]}>
                        <div className={styles["info-list-item-title"]}>
                            이곳의 이용팁
                        </div>
                        <div className={styles["info-list-item-text"]}>
                            매월 마지막 주 수요일 입장 무료
                        </div>
                        <div className={styles["info-list-item-text"]}>
                            영화 '광해, 왕이 된 남자' 촬영 장소
                        </div>
                    </li>
                </ul>
            </div>

            {/* 장소 추천 배너 */}
            {/* <ul className={styles["place-recommendation-list"]} >
                    <li className={styles["place-recommendation-list-item"]} >
                        <div className={styles["recommendation-img-wrap"]} >
                            <div className={styles["img-frame"]} >
                                <img
                                    src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/1ac14c9f-2361-4772-98bc-000725681ecf.jpeg"
                                    className={styles["recommendation-img"]}  />
                                    <div className={styles["recommendation-text-wrap"]} >
                                        <div className={styles["recommendation-text"]} >전주에서 뭐 하지?</div>
                                    </div>
                                    <div className={styles["link-indicator"]} >
                                        <div className={styles["arrow-icon"]} />
                                    </div>
                            </div>
                        </div>
                    </li>
                    <li className={styles["place-recommendation-list-item"]} >
                        <div className={styles["recommendation-img-wrap"]} >
                            <div className={styles["img-frame"]} >
                                <img
                                    src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/10103174-1494-42c0-9d79-445066070eea.jpeg"
                                    className={styles["recommendation-img"]} />
                                <div className={styles["recommendation-text-wrap"]} >
                                    <div className={styles["recommendation-text"]} >
                                        국내 영화 마니아들의 도시, 전주·군산
                                    </div>
                                </div>
                                <div className={styles["link-indicator"]} >
                                    <div className={styles["arrow-icon"]}  />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> */}
            <div className={styles["loc-hr"]}></div>
        </>
    );
};

export default LocMap;
