import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Stay.module.css";

import StayItem from "./StayItem";
import Loading from "../../../components/common/Loading";

const StayList = () => {
    const [data, setData] = useState(null);

    // 뒷단에서 API 호출
    const getData = async () => {
        try {
            const response = await axios.post("/api/stay/list", {
                contentId: "list",
            });
            const items = response.data;

            //  이미지 없는 데이터 거름
            const imageFilteredData = items.filter(
                (item) => item.firstimage !== ""
            );

            // 제목 뒤의 부가설명 지움
            const filteredData = imageFilteredData
                .filter((item) => item.firstimage !== "")
                .map((item) => {
                    const startBracketIndex = item.title.indexOf("[");
                    const endBracketIndex = item.title.indexOf("]");
                    const modifiedTitle =
                        startBracketIndex !== -1 && endBracketIndex !== -1
                            ? item.title.substring(0, startBracketIndex)
                            : item.title;
                    const modifiedItem = {
                        ...item,
                        title: modifiedTitle.trim(),
                    };
                    return modifiedItem;
                });

            setData(filteredData);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    // getData 호출
    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <Loading />;
    } else {
        return (
            <div className={styles["stay-page-wrapper"]}>
                <span className={styles["h1-wrapper"]}>
                    <h1 className={styles["stay-page-h1"]}>숙박 정보</h1>
                    <img
                        className={styles["stay-page-h1-img"]}
                        src={`${process.env.PUBLIC_URL}/images/icon_stay.png`}
                    />
                </span>

                <span className={styles["h2-wrapper"]}>
                    <h2 className={styles["stay-page-h2"]}>
                        즐거운 여행을 마무리할 숙소 정하기
                    </h2>
                </span>

                <div className={styles["width-wrapper"]}>
                    {data.map((item, index) => (
                        <StayItem key={item.contentid} item={item} />
                    ))}
                </div>
            </div>
        );
    }
};
export default StayList;
