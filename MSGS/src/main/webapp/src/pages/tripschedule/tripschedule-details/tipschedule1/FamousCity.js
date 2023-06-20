import React, { useState, useEffect } from 'react';
import styles from './FamousCity.module.css';
import CityItem from "./CityItem";

const FamousCity = (props) => {

  const [selectedCity, setSelectedCity] = useState(null);

  const imgClick = (areaId) => {
    setSelectedCity(areaId);
  };

  return (
    <div className={styles['popular-cities-container']}>

      <h1 className={styles["popular-cities-title"]}>인기도시</h1>
      <div className={styles["cities-container"]}>
        {props.searchedCity.map((data) => (
            <CityItem
                key={data.areaId}
                data={data}
                isSelected={selectedCity === data.areaId}
                imgClick={imgClick}
            />
        ))}
      </div>
    </div>
  );
};

export default FamousCity;
