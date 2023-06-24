import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import styles from './FlightWithData.module.css';

const FlightWithData = (props) => {

  const { data } = props;

  return (
    <>

      <div className={styles['table-container']}>
        {data.map((item, index) => (
          <FlightItem key={index} item={item} />
        ))}
      </div>

    </>
  );
};

export default FlightWithData;
