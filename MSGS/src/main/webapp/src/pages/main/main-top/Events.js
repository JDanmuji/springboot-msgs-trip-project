import React, { useEffect, useReducer, useState } from "react";

import styles from "./MainTop.module.css";
import EventItem from "./EventItem";

const Events = () => {
    const items = [
        { id: 1, text1: "한국의 알프스", text2: "하동 여행 코스 추천 🌳" },
        {
            id: 2,
            text1: "여유로운 바다 강릉",
            text2: "강릉 아르떼 뮤지엄 할인 🎵",
        },
        {
            id: 3,
            text1: "작은 대한민국",
            text2: "영월, 봄에 가볼 곳 모음집 🌸",
        },
    ];

    return (
        <section className={styles["section-event"]}>
            {items.map((eventData) => (
                <EventItem
                    key={eventData.id}
                    text1={eventData.text1}
                    text2={eventData.text2}
                />
            ))}
        </section>
    );
};

export default Events;
