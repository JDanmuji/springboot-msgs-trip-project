import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import styles from './FlightWithData.module.css';

const FlightWithData = (props) => {

  const { data, handleClick2 } = props;
  console.log(1111);
  return (
    <>

      <div className={styles['table-container']}>
        {data.map((item, index) => (
          <FlightItem key={index} item={item} handleClick2={handleClick2} />
        ))}
      </div>

    </>
  );
};

export default FlightWithData;
