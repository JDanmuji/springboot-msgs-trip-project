import React, { useEffect, useState } from "react";
import styles from "./Stay.module.css";

import StayItem from "./StayItem";

const StayList = () => {
    const API_KEY =
        "tubCNUm%2FYUF%2FD2wDWLTebna0yukLqBKsQTPu4iAlmY0F26uG428F0QRxe%2ByLehqGeulixiTmPSWWEO3V18Tuxg%3D%3D";

    const [data, setData] = useState(null);

    async function getData() {
        try {
            const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?MobileOS=ETC&MobileApp=MSGS&numOfRows=18&serviceKey=${API_KEY}&_type=json`;
            const response = await fetch(url);
            const result = await response.json();
            const items = result.response.body.items.item;
            console.log(items);

            // 이미지 없는 데이터 거름
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
                    const shortedTitle =
                        modifiedTitle.length > 12
                            ? modifiedTitle.substring(0, 12) + "..."
                            : modifiedTitle;
                    const modifiedItem = {
                        ...item,
                        title: shortedTitle.trim(),
                    };
                    return modifiedItem;
                });

            setData(filteredData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // getData 호출
    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return <div>Loading…</div>;
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
