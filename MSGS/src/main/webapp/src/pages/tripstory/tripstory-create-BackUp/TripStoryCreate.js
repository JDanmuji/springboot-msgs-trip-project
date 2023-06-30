import React, { useEffect, useState } from 'react'
import axios from "axios";

import styles from './Tripstory.module.css'
import WriteForm from './WriteForm.js'
import Map from '../../../components/tripstory/tripstory-create/common/Map'
import DateSummary from './DateSummary'

import TripStoryDetailData from '../tripstory-data/TripStoryDetailData'


import { useDispatch, useSelector } from "react-redux";
import { tripStoryActions } from "../tripstory-data/TripStoryReducer";
import Cookies from "js-cookie";
import Loading from "../../../components/common/Loading";
import { Link } from "react-router-dom";


const TripStoryCreate = () => {

    const dispatch = useDispatch();

    // 현재 출력되는 day
    const [day, setDay] = useState(0);

    // DB 데이터 담을 state
    const [data, setData] = useState(TripStoryDetailData);

    // const initDataSetting = (data) => {
    //     dispatch(
    //         tripStoryActions.getTripDayDetail(tripStoryDataDetail[data - 1])
    //     );
    //     dispatch(tripStoryActions.getTripDetail(tripStoryDataDetail));
    //     dispatch(tripStoryActions.getTripStory(tripStoryData));
    // };

    const tokenValue = Cookies.get("token");
   
    useEffect(() => {
        // const getData = async () => {
        //     try {
        //         const detailResponse = await axios.post(
        //             "/tripstory/detail/getStoryDetail"
        //         );
        //         setData(detailResponse.data);

        //     } catch (error) {
        //         console.log("Error occurred:", error);
        //     }
        // }
        //getData();
       
     //   console.log(getData);

        // initDataSetting(dayBtn);
    }, []);


    
    return (

        <>
        {/* {!data ? (
            <Loading />
        ) :  */}
        (
            <div className={styles["width-wrapper1"]}>
                <div className={styles["map"]}>
                    <Map dayData={data.tripDetailList[day]}/>
                </div>

            <div className={styles["width-form"]}>
                <WriteForm />
            </div>

            <div className={styles['day-btn-list']}>            
                {
                    data.date_list.map((items, index)=>(
                    
                    <div key={index}
                        className={`${styles['day-btn']} 
                        ${day === index ? styles.active : ''}`}
                        onClick={()=> setDay(index) }
                    >
                        <Link to='#'>{ 'DAY' +  (index+1) }</Link>
                    </div>
                    ))
                }
            </div>
            <div className={styles["tripStoryDay-form-area "]}>
                <DateSummary dayData={data.tripDetailList[day]} day={day}/>
            </div>
        </div>
        )
    </>
        
    );
};

export default TripStoryCreate;
