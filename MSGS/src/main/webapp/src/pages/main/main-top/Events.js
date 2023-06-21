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

<<<<<<< Updated upstream
=======
    const [data, setData] = useState(null); 
  
    async function getData() {
      try {
        const url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=ETC&MobileApp=MSGS&mapX=128.8321&mapY=37.751853&radius=200000&contentTypeId=25&serviceKey=${API_KEY}&_type=json`;
        const response = await fetch(url);
        const result = await response.json();
        const items = result.response.body.items.item;
       //s console.log(items);
        setData(items);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    if (!data) {
      return <div>Loading…</div>;
    }
  
    console.log(data.firstimage);

    const filteredData = data.filter((item) => item.firstimage !== '');
    
    
      
>>>>>>> Stashed changes
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
