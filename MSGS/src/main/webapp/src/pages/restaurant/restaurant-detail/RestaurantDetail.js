import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./RestaurantDetail.module.css";

import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../tripplace/LocGoogleMap";

const RestaurantDetail = () => {
    // 파라미터에서 데이터 가져옴
    const { pageNo, contentId } = useParams();

    // API 데이터 담을 state
    const [data, setData] = useState(null);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/restaurant/detail", {
                    pageNo, // list 데이터 검색 위해 보내줌
                    contentId,
                });

                setData(response.data);
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

                    <h2 className={styles["h2-title"]}>식당 상세정보</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="대표메뉴" value={data.firstmenu} />
                        <FacilItem label="취급메뉴" value={data.treatmenu} />
                        <FacilItem label="어린이 놀이방 여부" value={data.kidsfacility} />
                    </div>

                    <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="영업시간" value={data.opentimefood} />
                        <InfoItem label="쉬는 날" value={data.restdatefood} />
                        <InfoItem label="포장가능" value={data.packing} />
                        <InfoItem label="주차시설" value={data.parkingfood} />
                        <InfoItem label="규모" value={data.scalefood} />
                        <InfoItem label="좌석수" value={data.seat} />
                        <InfoItem label="신용카드 가능 정보" value={data.chkcreditcardfood} />
                    </div>

                    <h2 className={styles["h2-title"]}>문의</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="문의 및 안내" value={data.infocenterfood} />
                        <InfoItem label="예약 안내" value={data.reservationfood} />
                        <InfoItem label="홈페이지" value={data.homepage} />
                    </div>

                    {/* 식당 위치 표시된 구글맵 */}
                    <h2 className={styles["h2-title"]}>식당 위치</h2>
                    <span className={styles["stay-addr"]}>
                        상세주소: {data.addr1}
                    </span>

                    <div className={styles["map-wrap"]}>
                        <LocGoogleMap
                            center={{
                                lat: parseFloat(data.mapy),
                                lng: parseFloat(data.mapx),
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
