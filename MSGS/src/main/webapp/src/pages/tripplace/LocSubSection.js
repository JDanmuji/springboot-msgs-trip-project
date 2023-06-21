import React from "react";

import styles from "./LocSubSection.module.css";

const LocSubSection = () => {
    const dummyData = {
        title: "대나무 숲과 한옥의 조화가 아름다운 조선 왕조 사당",
        text: "조선 왕조 500여 년의 역사를 보관하고 있는 명소. 조선의 초대 왕인 '태조'의 초상화를 보관하기 위해 지어진 사당. 태조는 물론 '영조', '정조' 등 수많은 임금들의 초상화를 만날 수 있는 '어진 박물관'이 자리해 있으며, 조선 왕조 실록을 보관한 장소인 '전주사고'도 있어 역사적 가치가 크다. 고풍스러운 건물들과 조경을 감상하며 도심 속 여유를 즐기기 좋으며, 대나무 숲과 한옥 대문이 조화를 이룬 유명 포토 스팟이 있으니 고운 한복을 대여해 인생 사진을 남겨보는 것을 추천한다.",
    };

    return (
        <div>
            <h2 className={styles["sub-title-text"]}>{dummyData.title}</h2>

            <div className={styles["img-wrapper"]}>
                <img
                    className={styles["sub-section-img"]}
                    src="https://gnews.gg.go.kr/OP_UPDATA/UP_DATA/_FILEZ/201908/20190827102917780899760.jpg"
                    alt="travel spot"
                />
                <span className={styles["source-url"]}>
                    고려왕조의 역사가 깃든 고즈넉한 사당. 연천 숭의전 ⓒ
                    경기도블로그
                </span>
            </div>
            <p className={styles["sub-section-text"]}>{dummyData.text}</p>
        </div>
    );
};

export default LocSubSection;
