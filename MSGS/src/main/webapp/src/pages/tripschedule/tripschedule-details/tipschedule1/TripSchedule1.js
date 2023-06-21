import React, {useState} from 'react';

import SearchBar from './SearchBar';
import FamousCity from "./FamousCity";
import Events from '../../../main/main-top/Events';

import mainStyles from '../../../main/Main.module.css';
import styles from './FamousCity.module.css';
import citiesData from './CitiesData'
const TripSchedule1 = () => {
    const [citiesDataList,setCitiesDataList] = useState(citiesData);

    const [searchId, setSearchId ] = useState('');
    const getSearchValue = (e) => {
        setSearchId(e.target.value.toLowerCase())
    };

    const searchedCity = citiesDataList.filter((item) =>
        item.areaTitle.toLowerCase().includes(searchId)
    )

  return (
    <div className={`${mainStyles['width-wrapper']} ${styles['tripSchedule-wrapper']}`}>
        <SearchBar getSearchValue={getSearchValue}/>
        <FamousCity searchedCity={searchedCity}/>
        <Events />
    </div>
  );
};

export default TripSchedule1;
