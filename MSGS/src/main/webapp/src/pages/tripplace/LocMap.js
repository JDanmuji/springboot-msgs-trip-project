import React, { useEffect, useState } from "react";

import styles from "./LocMap.module.css";
import LocGoogleMap from "./LocGoogleMap";
import Loading from "../../components/common/Loading";
import axios from "axios";

const LocMap = () => {
    // 파라미터에서 데이터 가져옴
    // const { pageNo, contentId } = useParams();

    const [pageNo, setPageNo] = useState(1);
    const [contentId, setContentId] = useState(125744);

    // API 데이터 담을 state
    const [data, setData] = useState(null);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/place/detail", {
                    pageNo, // list pageNo
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
                    <div className={styles["map-title-wrap"]}>
                         <h2 className={styles["map-title"]}>기본정보</h2>
                    </div>

                    <LocGoogleMap center={{
                            lat: parseFloat(data.mapy),
                            lng: parseFloat(data.mapx),
                        }} />

                    <div className={styles["addr-list-wrap"]}>
                        <ul className={styles["addr-list"]}>
                            <li className={styles["addr-list-item"]}>
                                <div className={styles["addr-list-container"]}>
                                    <div className={styles["addr-sub-title"]}>주소</div>
                                    <div className={styles["list-container-text"]}>
                                        {data.addr1}
                                    </div>
                                </div>
                            </li>
                            <li className={styles["addr-list-item"]}>
                                <div className={styles["addr-list-container"]}>
                                    <div className={styles["addr-sub-title"]}>전화</div>
                                    <div className={styles["list-container-text"]}>
                                        {data.infocenter}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>


                    <h2 className={styles["h2-title"]}>관광지 상세정보</h2>
                    <div className={styles["facility-list"]}>
                        <FacilItem label="이용시간" value={data.usetime} />
                        <FacilItem label="이용시기" value={data.useseason} />
                        <FacilItem label="개장일" value={data.opendate} />
                        <FacilItem label="쉬는날" value={data.restdate} />
                        <FacilItem label="세계문화유산유무" value={data.heritage1} />
                        <FacilItem label="세계자연유산유무" value={data.heritage2} />
                        <FacilItem label="세계기록유산유무" value={data.heritage3} />
                        <FacilItem label="체험안내" value={data.expguide} />
                        <FacilItem label="체험가능연령" value={data.expagerange} />
                        <FacilItem label="수용인원" value={data.accomcount} />
                    </div>

                    

                    <h2 className={styles["h2-title"]}>이용 시 참고사항</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="주차시설"
                            value={data.parking}
                        />
                        <InfoItem
                            label="애완동물 동반가능 정보"
                            value={data.chkpet}
                        />
                        <InfoItem label="신용카드 가능 정보" value={data.chkreditcard} />
                        <InfoItem
                            label="유모차 대여 정보"
                            value={data.chkbabycarriage}
                        />
                        
                    </div>

                    <h2 className={styles["h2-title"]}>문의</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem
                            label="문의 및 안내"
                            value={data.infocenter}
                        />
                    </div>

                    <div className={styles["loc-hr"]}></div>
                </div>
            )}
        </>
        
    );
};

export default LocMap;
