import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import styles from './FlightWithData.module.css';
import FromFlightSelect from "../flight-search/FromFlightSelect";
import ToFlightSelect from "../flight-search/ToFlightSelect";

const FlightWithData = (props) => {
  const API_KEY = `NSlTZ99NuCRBE2DNWxDko3Ncyh%2FydKz3jPORuB18BrwOKoldcWLXhcfTG%2FKYoHtCJkK7F%2Bavyrp%2FezCVffMy6Q%3D%3D`;
  const [data, setData] = useState(null);
  const [depAirportId, setDepAirportId] = useState(null);
  const [arrAirportId, setArrAirportId] = useState(null);

  async function getData() {
    const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=NAARKJJ&arrAirportId=NAARKPC&depPlandTime=20230619`;
    //const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=${depAirportId}&arrAirportId=${arrAirportId}&depPlandTime=${currentDate}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.response.body.items.item;
    setData(items);
  }

  useEffect(() => {
    getData();
  }, [depAirportId, arrAirportId]);

  const handleDepAirport = (eng) => {
    setDepAirportId(eng);
  };

  const handleArrAirport = (eng) => {
    setArrAirportId(eng);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['table-container']}>
      <FromFlightSelect
        depAirportId={depAirportId}
        fromAirportHandler={handleDepAirport}
      />
      <ToFlightSelect
        arrAirportId={arrAirportId}
        toAirportHandler={handleArrAirport}
      />

      {data.map((item, index) => (
        <FlightItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FlightWithData;
