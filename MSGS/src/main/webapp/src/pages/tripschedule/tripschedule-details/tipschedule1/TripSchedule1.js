import React, {useState} from 'react';

import SearchBar from './SearchBar';
import FamousCity2 from "./FamousCity2";
import Events from '../../../main/main-top/Events';

import mainStyles from '../../../main/Main.module.css';
import styles from './FamousCity.module.css';

const TripSchedule1 = () => {
    const [citiesData,setCitiesData] = useState([
        {areaId: 1, areaTitle: "가평&#183;양평", subTitle: "가평, 양평", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/db0169bf-47f3-493a-ac10-6940ea8974b9.jpeg"},
        {areaId: 2, areaTitle: "강릉&#183;속초", subTitle: "강릉, 속초, 양양", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/97172bd4-9010-4b26-8522-1ca8845507f8.jpeg"},
        {areaId: 3, areaTitle: "경주", subTitle: "경주", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/5a92b10c-495c-47e5-bdd8-82ad71e79467.jpeg"},
        {areaId: 4, areaTitle: "부산", subTitle: "부산", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/9cd2e606-5f35-4b10-b16d-3da669ffedaa.jpeg"},
        {areaId: 5, areaTitle: "여수", subTitle: "여수, 순천", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/fb14faf3-7563-4a22-851a-debc9eadba58.jpeg"},
        {areaId: 6, areaTitle: "인천", subTitle: "인천, 강화도", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/a9ed990a-076b-4341-9b4c-3a3471aa3c09.jpeg"},
        {areaId: 7, areaTitle: "전주", subTitle: "전주, 군산", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/2d57cf32-094a-46c9-8cfe-932f47321209.jpeg"},
        {areaId: 8, areaTitle: "제주", subTitle: "제주, 서귀포", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/bf76a583-ea00-4fb0-a066-74bb850d19c1.jpeg"},
        {areaId: 9, areaTitle: "춘천&#183;홍천", subTitle: "춘천, 홍천", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/9cf95be9-66b1-494e-9b84-708f56bb5299.jpeg"},
        {areaId: 10, areaTitle: "태안", subTitle: "태안, 당직, 서산", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/1d3ec249-68f4-4d4b-b257-edb0b1e16d5c.jpeg"},
        {areaId: 11, areaTitle: "통영&#183;거제&#183;남해", subTitle: "통영, 거제, 남해", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/3abbd946-8276-49e1-996a-628661f1de20.jpeg"},
        {areaId: 12, areaTitle: "포항&#183;안동", subTitle: "포항, 안동", imageUrl: "https://media.triple.guide/triple-cms/c_fill,f_auto,h_256,w_256/f62b6e6e-5296-479c-81ff-d15372b614ad.jpeg"},
    ])

    const [searchId, setSearchId ] = useState('');
    const getSearchValue = (e) => {
        setSearchId(e.target.value.toLowerCase())
    };

    const searchedCity = citiesData.filter((item) =>
        item.areaTitle.toLowerCase().includes(searchId)
    )

  return (
    <div className={`${mainStyles['width-wrapper']} ${styles['tripSchedule-wrapper']}`}>
        <SearchBar getSearchValue={getSearchValue}/>
        {/*<FamousCity />*/}
        <FamousCity2 citiesData={citiesData} searchedCity={searchedCity}/>
        <Events />
    </div>
  );
};

export default TripSchedule1;
