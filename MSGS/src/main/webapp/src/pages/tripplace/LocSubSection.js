import React from 'react';

import stylesWrap from "./LocContainerHeader.module.css"
import styles from './LocSubSection.module.css'
const LocSubSection = () => {
    return (
        <>
            <div className={[stylesWrap["loc-wrap"], styles["sub-section-wrap"]].join(" ")}>
                <div className={styles["sub-section-img-wrap"]}>
                    <div className={styles["section-img-wrap"]}>
                        <div className={styles["fixed-ratio-frame"]}>
                            <div className={styles["source-url"]}>
                                출처 blog.naver.com/globeplus/221396169353
                            </div>
                            <img
                                src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/71a7ca1f-97a8-4c13-8d0d-1db46ee7cae0.jpeg"
                                className={styles["sub-section-img"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["sub-title"]}>
                    조선 왕조 500여 년의 역사를 보관하고 있는 명소
                </div>
                <div className={styles["sub-section-text"]}>
                    조선의 초대 왕인 '태조'의 초상화를 보관하기 위해 지어진 사당. 태조는 물론 '영조', '정조'
                    등 수많은 임금들의 초상화를 만날 수 있는 '어진 박물관'이 자리해 있으며, 조선 왕조 실록을 보관한 장소인 '전주사고'도 있어 역사적 가치가 크다. 고풍스러운 건물들과 조경을
                    감상하며 도심 속 여유를 즐기기 좋으며, 대나무 숲과 한옥 대문이 조화를 이룬 유명 포토 스팟이 있으니 고운 한복을 대여해 인생 사진을 남겨보는 것을 추천한다.
                </div>
                <div className={styles["sub-section-link"]}>
                    <a href="/attractions/a1fb5358-addc-4e11-a69f-cf4c7f6952f9"
                       className={styles["section-link"]}>
                        어진 박물관
                    </a>
                </div>
            </div>
            <div className={styles["sub-section-hr"]}></div>
        </>
    );
};

export default LocSubSection;