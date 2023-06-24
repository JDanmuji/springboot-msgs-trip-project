
import React, { useEffect, useState } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-create/common/Map';
import DateSummary from './DateSummary';
import DayBtn from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayBtn';
import SpotItemList from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItemList';
import TripStoryDetailData  from '../tripstory-data/TripStoryDetailData';

import { useDispatch, useSelector } from 'react-redux';
import { tripStoryActions  } from '../tripstory-data/TripStoryReducer';


const tripStoryData = TripStoryDetailData; 
const tripStoryDataDetail = TripStoryDetailData.tripDetailList; 

//tripstory 가장 첫 컴포넌트입니다. 
const TripStoryCreate = () => {

    const dispatch = useDispatch();

    const [dayBtn, setDayBtn] = useState(1) //초기값 false
    //const [tripStoryData, setTripStoryData] = useState({});

    const initDataSetting = (data) => {
        dispatch(tripStoryActions.getTripDayDetail(tripStoryDataDetail[(data-1)]))            
        dispatch(tripStoryActions.getTripDetail(tripStoryDataDetail))
        dispatch(tripStoryActions.getTripStory(tripStoryData))
    }

    
    initDataSetting(dayBtn);
    const getDaySelect = (data) => {    
        setDayBtn(data);
        //dayBtn 시 update 가 안되면서 하나씩 데이터가 밀리는 상태가 발생
        //직접 받은 데이터를 기준으로 컨트롤
        initDataSetting(data);
    }
    
    
    useEffect(() => {
        initDataSetting(dayBtn);
    }, []);

    
    return (
        
            <div className={styles["width-wrapper1"]}>
                
                <div className={styles['map']}>
                    <Map />
                </div>
                
            
                <div className={styles["width-form"]}>
                    <WriteForm />
                </div>
                
                <div className={styles["tripStoryDay-form-area "]}>
                    <DayBtn getDaySelect={getDaySelect} dayBtn={dayBtn}/>
                    
                </div>
            </div>
        
    );
};

export default TripStoryCreate;