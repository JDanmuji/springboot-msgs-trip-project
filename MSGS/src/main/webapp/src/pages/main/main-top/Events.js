import React, { useEffect, useReducer, useState } from "react";

import styles from "./MainTop.module.css";
import EventItem from "./EventItem";
import Loading from "../../../components/common/Loading";


const Events = () => {
    
    const API_KEY = 'tubCNUm%2FYUF%2FD2wDWLTebna0yukLqBKsQTPu4iAlmY0F26uG428F0QRxe%2ByLehqGeulixiTmPSWWEO3V18Tuxg%3D%3D';

    const [data, setData] = useState(null);

  
    async function getData() {
      try {
        const url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=ETC&MobileApp=MSGS&mapX=128.8321&mapY=37.751853&radius=200000&contentTypeId=25&serviceKey=${API_KEY}&_type=json`;
        const response = await fetch(url);
        const result = await response.json();
        const items = result.response.body.items.item;

        setData(items);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    if (!data) {
      return <Loading />
    }
  
    console.log(data.firstimage);

    const filteredData = data.filter((item) => item.firstimage !== '');
    
    
      
    return (
        <section className={styles["section-event"]}>
            
        {
            filteredData.map((item, index) => index < 3 && (
            <EventItem
            key={index}
            title={item.title}
            firstimage={item.firstimage}
            />
        ))}

               
            
        </section>
    );
};

export default Events;
