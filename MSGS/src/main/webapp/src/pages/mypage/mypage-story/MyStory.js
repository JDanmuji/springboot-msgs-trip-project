import React from "react";

import styles from "./MyStory.module.css";

const MyStory = (props) => {
    const today = new Date();
    const startDay = new Date(props.data.tourStartDay);
    const timeDiff = startDay.getTime() - today.getTime();
    const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return (
        <div className={styles["mypage-list"]}>
            <div className={styles["d-day-text"]}>D-{dDay}</div>
            <div className={styles["list-image"]}>
                <img src={process.env.PUBLIC_URL + "/images/jeju.jfif"} />
            </div>
            <div className={styles["list-content"]}>
                <p>나의 첫 제주도 여행:)</p>
                <span>
                    첫날은 우정 해장국집에 들려서 해장국 한그릇 쎄려 주시고 근처
                    카페투어~ 저녁엔 흙돼지 바베큐를 위해 근처 마트 장을 본다.
                    숙소로 돌아와 소시지와 흙돼지를 구워 야무지게 먹고 디저트로
                    파인애플, 방토 등등 먹을 예정! 야호! 코인노래방도 가고
                    바닷가 산책도하고, 하고싶은게 너무많은데...시간은 너무
                    빠르게 흘러간다..ㅠㅠ
                </span>
            </div>
            <div className={styles["list-button"]}>
                <button className={styles["list-button-update"]}>
                    이야기 수정
                </button>
                <button className={styles["list-button-delete"]}>
                    이야기 삭제
                </button>
            </div>
        </div>
    );
};

export default MyStory;
