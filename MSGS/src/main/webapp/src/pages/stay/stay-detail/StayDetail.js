import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./StayDetail.module.css";
import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../../pages/tripplace/LocGoogleMap";

const StayDetail = () => {
    // 파라미터에서 데이터 가져옴
    const { pageNo, contentId } = useParams();

    // API 데이터 담을 state
    const [data, setData] = useState(null);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/stay/detail", {
                    pageNo, // list 데이터 검색 위해 보내줌
                    contentId,
                });

                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        getData();
    }, []);

    // 태그 노출 여부 결정
    const [isHanok, setIsHanok] = useState(false);
    const [isGoodstay, setIsGoodstay] = useState(false);

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
            {!data ? (
                <Loading />
            ) : (
                <div className={styles["width-wrapper"]}>
                    <h1 className={styles["stay-title"]}>{data.title}</h1>
                    <span className={styles["stay-addr"]}>{data.addr1}</span>

                    {!imageError && ( // 이미지 엑박일 경우 띄우지 않음
                        <div className={styles["thumbnail-img-wrap"]}>
                            <img
                                className={styles["thumbnail-img"]}
                                src={data.firstimage}
                                alt={data.title}
                                onError={handleImageError}
                            />
                        </div>
                    )}

                    <h2 className={styles["h2-title"]}>숙소 편의시설</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="식당" value={data.foodplace} />
                        <FacilItem label="세미나실" value={data.seminar} />
                        <FacilItem label="피트니스 센터" value={data.fitness} />
                        <FacilItem label="노래방" value={data.karaoke} />
                        <FacilItem label="공용 PC실" value={data.publicpc} />
                        <FacilItem label="사우나" value={data.sauna} />
                        <FacilItem label="공용샤워실" value={data.publicbath} />
                        <FacilItem label="바베큐" value={data.barbecue} />
                        <FacilItem label="캠프파이어" value={data.campfire} />
                        <FacilItem label="기타 시설" value={data.subfacility} />
                    </div>

                    <h2 className={styles["h2-title"]}>서비스</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="주차" value={data.parkinglodging} />
                        <FacilItem label="픽업 서비스" value={data.pickup} />
                        <FacilItem label="자전거 대여" value={data.bicycle} />
                        <FacilItem
                            label="객실내 취사"
                            value={data.chkcooking}
                        />
                    </div>

                    <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="체크인 시간"
                            value={data.checkintime}
                        />
                        <InfoItem
                            label="체크아웃 시간"
                            value={data.checkouttime}
                        />
                        <InfoItem label="객실수" value={data.roomcount} />
                        <InfoItem
                            label="수용가능인원"
                            value={data.accomcountlodging}
                        />
                        <InfoItem label="객실유형" value={data.roomtype} />
                        <InfoItem label="규모" value={data.scalelodging} />
                        <InfoItem
                            label="환불 규정"
                            value={data.refundregulation}
                        />
                    </div>

                    <h2 className={styles["h2-title"]}>문의</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="문의 및 안내"
                            value={data.infocenterlodging}
                        />
                        <InfoItem
                            label="예약 안내"
                            value={data.reservationlodging}
                        />
                        <InfoItem
                            label="홈페이지"
                            value={data.reservationurl}
                        />
                    </div>

                    {/* 숙소 위치 표시된 구글맵 */}
                    <h2 className={styles["h2-title"]}>숙소 위치</h2>
                    <span className={styles["stay-addr"]}>
                        상세주소: {data.addr1}
                    </span>
                    <LocGoogleMap
                        center={{
                            lat: parseFloat(data.mapy),
                            lng: parseFloat(data.mapx),
                        }}
                        width={"90rem"}
                        height={"40rem"}
                    />
                </div>
            )}
        </>
    );
};

export default StayDetail;
