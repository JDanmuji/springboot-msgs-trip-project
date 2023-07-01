import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./RestaurantDetail.module.css";

import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../tripplace/LocGoogleMap";

const RestaurantDetail = () => {
    // 파라미터 값 가져오기
    const { areaCode, contentTypeId, contentId } = useParams();

    // API 데이터 담을 state
    const [commonData, setCommonData] = useState(null);
    const [introData, setIntroData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/place/detail", {
                    areaCode,
                    contentId,
                    contentTypeId,
                });

                setCommonData(response.data.common);
                setIntroData(response.data.intro);
                console.log("common ", response.data.common);
                console.log("intro ", response.data.intro);

                setIsLoaded(true);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };

        getData();
    }, []);

    // 이미지 엑박 처리
    // (데이터 있으나 url이 부정확해 로딩되지 않는 경우)
    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };

    // 숙소 편의시설 데이터 처리
    const FacilItem = ({ label, value }) => {
        return (
            <div className={styles["facility-item"]}>
                <span className={styles["facility-label"]}>{label}</span>
                <span className={styles["facility-value"]}>
                    {!value || value === "0" ? "없음" : value}
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
            {!isLoaded ? (
                <Loading />
            ) : (
                <div className={styles["width-wrapper"]}>
                    <h1 className={styles["stay-title"]}>{commonData.title}</h1>
                    <span className={styles["stay-addr"]}>
                        {commonData.addr1}
                    </span>

                    {!imageError && ( // 이미지 엑박일 경우 띄우지 않음
                        <div className={styles["thumbnail-img-wrap"]}>
                            <img
                                className={styles["thumbnail-img"]}
                                src={commonData.firstimage}
                                alt={commonData.title}
                                onError={handleImageError}
                            />
                        </div>
                    )}

                    <h2 className={styles["h2-title"]}>식당 상세정보</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem
                            label="대표메뉴"
                            value={introData.firstmenu}
                        />
                        <FacilItem
                            label="취급메뉴"
                            value={introData.treatmenu}
                        />
                        <FacilItem
                            label="어린이 놀이방 여부"
                            value={introData.kidsfacility}
                        />
                    </div>

                    <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="영업시간"
                            value={introData.opentimefood}
                        />
                        <InfoItem
                            label="쉬는 날"
                            value={introData.restdatefood}
                        />
                        <InfoItem label="포장가능" value={introData.packing} />
                        <InfoItem
                            label="주차시설"
                            value={introData.parkingfood}
                        />
                        <InfoItem label="규모" value={introData.scalefood} />
                        <InfoItem label="좌석수" value={introData.seat} />
                        <InfoItem
                            label="신용카드 가능 정보"
                            value={introData.chkcreditcardfood}
                        />
                    </div>

                    <h2 className={styles["h2-title"]}>문의</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="문의 및 안내"
                            value={introData.infocenterfood}
                        />
                        <InfoItem
                            label="예약 안내"
                            value={introData.reservationfood}
                        />
                        <InfoItem label="홈페이지" value={introData.homepage} />
                    </div>

                    {/* 식당 위치 표시된 구글맵 */}
                    <h2 className={styles["h2-title"]}>식당 위치</h2>
                    <span className={styles["stay-addr"]}>
                        상세주소: {commonData.addr1}
                    </span>

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
                </div>
            )}
        </>
    );
};

export default RestaurantDetail;
