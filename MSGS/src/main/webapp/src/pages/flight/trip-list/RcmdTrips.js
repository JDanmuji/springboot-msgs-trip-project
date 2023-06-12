import React, { useEffect, useReducer, useState } from "react";

import styles from "./RcmdTrips.module.css";
import RcmdTripItem from "./RcmdTripItem";

import items from "../flight-data/FlightItemsData";

const RcmdTrips = () => {
  return (
    <div>
      <p className={styles["RcmdTrips-title"]}>인기 급상승 국내 여행지</p>
      <section className={styles["section-RcmdTrips"]}>
        {items.map((data) => (
          <RcmdTripItem
            key={data.id}
            text1={data.text1}
            text2={data.text2}
            image={data.image}
          />
        ))}
      </section>
    </div>
  );
};

export default RcmdTrips;
