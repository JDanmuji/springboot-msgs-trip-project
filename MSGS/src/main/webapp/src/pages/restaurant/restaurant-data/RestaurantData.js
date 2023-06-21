import React, { useEffect, useState } from 'react';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantData.module.css';

const RestaurantData = () => {
    const API_KEY = 'tubCNUm%2FYUF%2FD2wDWLTebna0yukLqBKsQTPu4iAlmY0F26uG428F0QRxe%2ByLehqGeulixiTmPSWWEO3V18Tuxg%3D%3D';

    const [data, setData] = useState(null);
  
    async function getData() {
      try {
        const url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=ETC&MobileApp=MSGS&numOfRows=20&mapX=128.8321&mapY=37.751853&radius=200000&contentTypeId=39&serviceKey=${API_KEY}&_type=json`;
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
      return <div>Loading…</div>;
    }
  
    console.log(data.firstimage);

    const filteredData = data.filter((item) => item.firstimage !== '');
    
    
      
    return (
        <div className={styles["main-wrapper"]}>
            <p className={styles["trip-story-list-title"]}>맛집🥑</p>
            <p className={styles["trip-story-list-sub-title"]}>
                직접 다녀온 찐 맛집 확인하기
            </p>

            <div className={styles["items-wrapper"]}>
                {
                    filteredData.map((item, index) => index < 12 && (
                    <RestaurantItem
                        key={index}
                        title={item.title}
                        firstimage={item.firstimage}
                        firstimage2={item.firstimage2}
                        addr1={item.addr1}
                        addr2={item.addr2}
                        tel={item.tel}
                    />
            ))}
            </div>
        </div>
        
    );
};

export default RestaurantData;