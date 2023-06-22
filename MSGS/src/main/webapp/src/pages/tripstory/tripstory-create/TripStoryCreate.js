
import React, { useEffect, useState } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-create/common/Map';
import DateSummary from './DateSummary';
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayBtn';
import SpotItemList from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItemList';
import TripStoryDetailData  from '../tripstory-data/TripStoryDetailData';



//tripstory 가장 첫 컴포넌트입니다. 
const TripStoryCreate = () => {

    const [dayBtn, setDayBtn] = useState(1) //초기값 false
    
    const getDaySelect = (data) => {        
         setDayBtn(data);
    }

    const tripDetailList = TripStoryDetailData.tripDetailList;
    const tripDayData = tripDetailList[(dayBtn-1)];


    console.log(tripDetailList);
    return (
        <div className={styles["width-wrapper1"]}>
            
            <div className={styles['map']}>
				<Map />
			</div>
            
           
            <div className={styles["width-form"]}>
                <WriteForm />
            </div>
            
            <div className={styles["tripStoryDay-form-area "]}>
                <DayBtn tripDetailList={tripDetailList} getDaySelect={getDaySelect} dayBtn={dayBtn}/>
                <DateSummary tripDayData={tripDayData} dayContent={tripDayData.content}dayBtn={dayBtn} />
                <SpotItemList tripDayData={tripDayData}/>
            </div>
        </div>
    );
};

export default TripStoryCreate;