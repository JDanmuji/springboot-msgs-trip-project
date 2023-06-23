import React, { useEffect, useState } from "react";
import FlightItem from "./FlightItem";
import styles from './FlightWithData.module.css';

const FlightWithData = (props) => {
  const API_KEY = `NSlTZ99NuCRBE2DNWxDko3Ncyh%2FydKz3jPORuB18BrwOKoldcWLXhcfTG%2FKYoHtCJkK7F%2Bavyrp%2FezCVffMy6Q%3D%3D`;
  const [data, setData] = useState(null);
  console.log("from", props.fromAirport)
  console.log("to", props.toAirport)
  console.log("FlightWithData",props.date1)
  //console.log("FlightWithData2",props.data2)
  async function getData() {
    const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=${props.fromAirport}&arrAirportId=${props.toAirport}&depPlandTime=${props.date1}}`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.response.body.items.item;

    console.log(response)
    setData(items);
  }

  useEffect(() => {
    // 이벤트 핸들러 함수를 사용하여 데이터 가져오기
    getData();
  }, [props.fromAirport, props.toAirport]); // fromAirport과 toAirport이 변경될 때마다 useEffect가 호출되도록 설정

  if (!data) {
    return <div></div>;
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
