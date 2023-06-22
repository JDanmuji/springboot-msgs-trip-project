import React, { useEffect, useState } from 'react';
import RestaurantItem from '../RestaurantItem';
import styles from './RestaurantData.module.css';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const RestaurantData = () => {
    const API_KEY = 'tubCNUm%2FYUF%2FD2wDWLTebna0yukLqBKsQTPu4iAlmY0F26uG428F0QRxe%2ByLehqGeulixiTmPSWWEO3V18Tuxg%3D%3D';

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); // 현재 페이지 번호 (페이지네이션)
    const [ref, inView] = useInView();
  
    async function getData() {
      try {
        const url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=ETC&MobileApp=MSGS&numOfRows=12&pageNo=${page}&mapX=128.8321&mapY=37.751853&radius=200000&contentTypeId=39&serviceKey=${API_KEY}&_type=json`;
        const response = await fetch(url);
        const result = await response.json();
        const items = result.response.body.items.item;
        setData((prevData) => [...prevData, ...items]);
        // 요청 성공 시에 페이지에 1 카운트 해주기
        setPage((page) => page + 1);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);
  
    useEffect(() => {
      // inView가 true 일때만 실행한다.
      if (inView) {
        console.log(inView, '무한 스크롤 요청 🎃')
        getData();
      }
    }, [inView]);
  
    if (!data) {
      return <div>Loading…</div>;
    }
  
    // console.log(data.firstimage);

    const filteredData = data.reduce((uniqueData, item) => {
      if (item && item.firstimage !== '' && !uniqueData.some((dataItem) => dataItem.title.trim() === item.title.trim())) {
        uniqueData.push(item);
      }
      return uniqueData;
    }, []);
    
  
  
      
    return (
        <div className={styles["main-wrapper"]}>
            <p className={styles["trip-story-list-title"]}>맛집🥑</p>
            <p className={styles["trip-story-list-sub-title"]}>
                직접 다녀온 찐 맛집 확인하기
            </p>

            <div className={styles["items-wrapper"]}>
                {
                    filteredData.map((item, index) => ( 
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
            <div ref={ref}></div>
        </div>
        
    );
};

export default RestaurantData;