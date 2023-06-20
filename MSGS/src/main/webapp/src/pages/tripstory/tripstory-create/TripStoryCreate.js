
import React, { useEffect, useState } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-create/common/Map';
import DateSummary from './DateSummary';
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-daybtn/DayBtn';
import TripStoryDetailData  from '../tripstory-data/TripStoryDetailData';
import SpotItemList from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItemList';


//tripstory 가장 첫 컴포넌트입니다. 
const TripStoryCreate = () => {

    const [dayBtn, setDayBtn] = useState(1) //초기값 false
    
    const getDaySelect = (data) => {        
         setDayBtn(data);
    }


    return (
        <div className={styles["width-wrapper1"]}>
            
            <div className={styles['map']}>
				<Map />
			</div>
            
           
            <div className={styles["width-form"]}>
                <WriteForm />
            </div>
            
            <div className={styles["tripStoryDay-form-area "]}>
                <DayBtn tripDetailList={TripStoryDetailData.tripDetailList} getDaySelect={getDaySelect} dayBtn={dayBtn}/>
                <DateSummary dayDate={TripStoryDetailData.tripDetailList[(dayBtn-1)].dayDate} dayBtn={dayBtn} />
                {/* <SpotItemList TripStoryDetailData={TripStoryDetailData.tripDetailList[(dayBtn-1)]}/> */}
            </div>
        </div>
    );
};

export default TripStoryCreate;