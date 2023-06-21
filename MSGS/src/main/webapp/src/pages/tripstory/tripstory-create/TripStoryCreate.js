<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======

import React, { useEffect, useState } from 'react';
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-create/common/Map';
import DateSummary from './DateSummary';
<<<<<<< HEAD
import DayModal from './DayModal';
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-daybtn/DayBtn';
import TripStoryDetailData  from '../tripstory-data/TripStoryDetailData';

//tripstory 가장 첫 컴포넌트입니다. 
const TripStoryCreate = () => {

=======
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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
    return (
        <div className={styles["width-wrapper1"]}>
            
            <div className={styles['map']}>
				<Map />
			</div>
            
           
            <div className={styles["width-form"]}>
                <WriteForm />
            </div>
            
            <div className={styles["tripStoryDay-form-area "]}>
<<<<<<< HEAD
                <DayBtn startDate={TripStoryDetailData.startDate} endDate={TripStoryDetailData.endDate}/>
                <DateSummary />
=======
                <DayBtn tripDetailList={tripDetailList} getDaySelect={getDaySelect} dayBtn={dayBtn}/>
                <DateSummary tripDayData={tripDayData} dayBtn={dayBtn} />
                <SpotItemList tripDayData={tripDayData}/>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
            </div>
        </div>
    );
};

export default TripStoryCreate;