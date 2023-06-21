import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import styles from './FlightWithData.module.css';

const FlightWithData = (props) => {
  const API_KEY = `NSlTZ99NuCRBE2DNWxDko3Ncyh%2FydKz3jPORuB18BrwOKoldcWLXhcfTG%2FKYoHtCJkK7F%2Bavyrp%2FezCVffMy6Q%3D%3D`;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=${props.fromAirport}&arrAirportId=${props.toAirport}&depPlandTime=20230619`;
      const response = await fetch(url);
      const result = await response.json();
      const items = result.response.body.items.item;
      setData(items);
    }
  
    getData();
  }, [props.fromAirport, props.toAirport]);
  

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['table-container']}>
      {data.map((item, index) => (
        <FlightItem key={index} item={item} />
      ))}
    </div>
  );
};


export default FlightWithData;
