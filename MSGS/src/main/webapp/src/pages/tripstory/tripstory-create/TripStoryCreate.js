import React, { useEffect, useRef } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-create/common/Map';
import DateSummary from './DateSummary';
import DayModal from './DayModal';
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-daybtn/DayBtn';
import TripStoryDetailData  from '../tripstory-data/TripStoryDetailData';

//tripstory 가장 첫 컴포넌트입니다. 
const TripStoryCreate = () => {

    return (
        <div className={styles["width-wrapper1"]}>
            
            <div className={styles['map']}>
				<Map />
			</div>
            
           
            <div className={styles["width-form"]}>
                <WriteForm />
            </div>
            
            <div className={styles["tripStoryDay-form-area "]}>
                <DayBtn startDate={TripStoryDetailData.startDate} endDate={TripStoryDetailData.endDate}/>
                <DateSummary />
            </div>
        </div>
    );
};

export default TripStoryCreate;