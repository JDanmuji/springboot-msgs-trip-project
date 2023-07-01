import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import styles from "./StayDetail.module.css";
import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../../pages/tripplace/LocGoogleMap";

const StayDetail = () => {
    // 파라미터에서 데이터 가져옴
    // const { pageNo, contentId } = useParams();
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
                    contentTypeId,
                    contentId,
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

    // // 태그 노출 여부 결정
    // const [isHanok, setIsHanok] = useState(false);
    // const [isGoodstay, setIsGoodstay] = useState(false);

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

                    <h2 className={styles["h2-title"]}>숙소 편의시설</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="식당" value={introData.foodplace} />
                        <FacilItem label="세미나실" value={introData.seminar} />
                        <FacilItem label="피트니스 센터" value={introData.fitness} />
                        <FacilItem label="노래방" value={introData.karaoke} />
                        <FacilItem label="공용 PC실" value={introData.publicpc} />
                        <FacilItem label="사우나" value={introData.sauna} />
                        <FacilItem label="공용샤워실" value={introData.publicbath} />
                        <FacilItem label="바베큐" value={introData.barbecue} />
                        <FacilItem label="캠프파이어" value={introData.campfire} />
                        <FacilItem label="기타 시설" value={introData.subfacility} />
                    </div>

                    <h2 className={styles["h2-title"]}>서비스</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="주차" value={introData.parkinglodging} />
                        <FacilItem label="픽업 서비스" value={introData.pickup} />
                        <FacilItem label="자전거 대여" value={introData.bicycle} />
                        <FacilItem label="객실내 취사" value={introData.chkcooking} />
                    </div>

                    <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="체크인 시간" value={introData.checkintime} />
                        <InfoItem label="체크아웃 시간" value={introData.checkouttime} />
                        <InfoItem label="객실수" value={introData.roomcount} />
                        <InfoItem label="수용가능인원" value={introData.accomcountlodging} />
                        <InfoItem label="객실유형" value={introData.roomtype} />
                        <InfoItem label="규모" value={introData.scalelodging} />
                        <InfoItem label="환불 규정" value={introData.refundregulation} />
                    </div>

                    <h2 className={styles["h2-title"]}>문의</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="문의 및 안내" value={introData.infocenterlodging}
                        />
                        <InfoItem label="예약 안내" value={introData.reservationlodging} />
                        <Link
                            to={introData.reservationurl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <InfoItem
                                className={styles["info-url"]}
                                label="홈페이지" value={introData.reservationurl}
                            />
                        </Link>
                    </div>

                    {/* 숙소 위치 표시된 구글맵 */}
                    <h2 className={styles["h2-title"]}>숙소 위치</h2>
                    <span className={styles["stay-addr"]}>상세주소: {commonData.addr1}</span>

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

export default StayDetail;
