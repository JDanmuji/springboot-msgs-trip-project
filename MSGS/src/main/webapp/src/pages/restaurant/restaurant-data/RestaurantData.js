import React, { useEffect, useState } from 'react';
import RestaurantItem from '../restaurant-list/RestaurantItem';
import styles from './RestaurantData.module.css';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../../components/common/Loading';

const RestaurantData = () => {
     // API 데이터 담을 state
     const [data, setData] = useState([]);

     const [pageNo, setPageNo] = useState(1); // 현재 페이지 번호
     const [ref, inView] = useInView();
 
     // back-end에서 API 호출
     const getData = async () => {
         try {
             const response = await axios.post("/api/restaurant/list", {
                 pageNo,
             });
             const items = response.data;
             console.log(items.length);
 
             setData((prevData) => [...prevData, ...items]);
             setPageNo((prevPageNo) => prevPageNo + 1);
         } catch (error) {
             console.log("Error occurred:", error);
         }
     };
 
     useEffect(() => {
         // inView가 true 일때만 실행한다.
         if (inView) {
             getData();
         }
     }, [inView]);
 
     if (!data) {
         return <Loading />;
     } else {
        return (
        <div className={styles["main-wrapper"]}>
            <p className={styles["trip-story-list-title"]}>맛집🥑</p>
            <p className={styles["trip-story-list-sub-title"]}>
                직접 다녀온 찐 맛집 확인하기
            </p>

            <div className={styles["items-wrapper"]}>
                {
                    data.map((item, index) => ( 
                    <RestaurantItem
                        key={index}
                        title={item.title}
                        firstimage={item.firstimage}
                        firstimage2={item.firstimage2}
                        addr1={item.addr1}
                        addr2={item.addr2}
                        tel={item.tel}
                        item={item}
                    />
            ))}
             
            </div>
            <div ref={ref}></div>
        </div>
        
    );
    }
};

export default RestaurantData;