import React from "react";
import { Link, createPath } from "react-router-dom";

import styles from "./LocInfo.module.css";

import LocGoogleMap from "./LocGoogleMap";

const LocInfo = (props) => {
    const commonData = props.commonData;
    const introData = props.introData;

    // 숙소 편의시설 데이터 처리
    const FacilItem = ({ label, value }) => {
        return (
            <div className={styles["facility-item"]}>
                <span className={styles["facility-label"]}>{label}</span>
                <span className={styles["facility-value"]}>
                    {!value || value === "0" ? "-" : value}
                </span>
            </div>
        );
    };

    // 이용 시 참고사항 데이터 처리
    const InfoItem = ({ label, value }) => {
        return (
            <div className={styles["facility-item"]}>
                <span className={styles["facility-label"]}>{label}</span>
                <span className={styles["facility-value"]}>
                    {!value || value === "0" ? "-" : value}
                </span>
            </div>
        );
    };

    return (
        <>
            <div className={styles["map-title-wrap"]}>
                <h2 className={styles["map-title"]}>기본정보</h2>
            </div>

            <div className={styles["map-wrap"]}>
                <LocGoogleMap
                    center={{
                        lat: parseFloat(commonData.mapy),
                        lng: parseFloat(commonData.mapx),
                    }}
                    width={"90rem"}
                    height={"40rem"}
                />
            </div>

            <div className={styles["addr-list-wrap"]}>
                <ul className={styles["addr-list"]}>
                    <li className={styles["addr-list-item"]}>
                        <div className={styles["addr-list-container"]}>
                            <div className={styles["addr-sub-title"]}>전화</div>
                            <div className={styles["list-container-text"]}>
                                {introData.infocenter}
                            </div>
                        </div>
                        <div className={styles["addr-list-container"]}>
                            <div className={styles["addr-sub-title"]}>주소</div>
                            <div className={styles["list-container-text"]}>
                                {commonData.addr1}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <h2 className={styles["h2-title"]}>관광지 상세정보</h2>
            <div className={styles["facility-list"]}>
                <FacilItem label="이용시간" value={introData.usetime} />
                <FacilItem label="이용시기" value={introData.useseason} />
                <FacilItem label="개장일" value={introData.opendate} />
                <FacilItem label="쉬는날" value={introData.restdate} />
                <FacilItem label="체험안내" value={introData.expguide} />
                <FacilItem label="체험가능연령" value={introData.expagerange} />
                <FacilItem label="수용인원" value={introData.accomcount} />
                <FacilItem
                    label="세계문화유산유무"
                    value={introData.heritage1}
                />
                <FacilItem
                    label="세계자연유산유무"
                    value={introData.heritage2}
                />
                <FacilItem
                    label="세계기록유산유무"
                    value={introData.heritage3}
                />
            </div>

            <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
            <div className={styles["facility-list"]}>
                <InfoItem label="주차시설" value={introData.parking} />
                <InfoItem
                    label="유모차 대여"
                    value={introData.chkbabycarriage}
                />
                <InfoItem
                    label="반려동물 동반가능 여부"
                    value={introData.chkpet}
                />
                <InfoItem
                    label="신용카드 사용가능 여부"
                    value={introData.chkreditcard}
                />
            </div>

            <h2 className={styles["h2-title"]}>문의</h2>
            <div className={styles["facility-list"]}>
                <InfoItem label="문의 및 안내" value={introData.infocenter} />
                <Link
                    to={commonData.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <InfoItem
                        className={styles["info-url"]}
                        label="홈페이지"
                        value={commonData.homepage}
                    />
                </Link>
            </div>

            <div className={styles["loc-hr"]}></div>
        </>
    );
};

export default LocInfo;
