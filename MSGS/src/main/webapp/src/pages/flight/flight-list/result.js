import React, { useEffect, useState } from 'react';
import styles from './FlightWithData.module.css'; 

const FlightWithData = () => {
  const API_KEY = `NSlTZ99NuCRBE2DNWxDko3Ncyh%2FydKz3jPORuB18BrwOKoldcWLXhcfTG%2FKYoHtCJkK7F%2Bavyrp%2FezCVffMy6Q%3D%3D`;
  const [data, setData] = useState(null);

  async function getData() {
    const url = `http://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getFlightOpratInfoList?serviceKey=${API_KEY}&pageNo=1&numOfRows=100&_type=json&depAirportId=NAARKJJ&arrAirportId=NAARKPC&depPlandTime=20230619`;
    const response = await fetch(url);
    const result = await response.json();
    const items = result.response.body.items.item;
    setData(items);
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['table-container']}>
      <h2>항공사 API 출력결과</h2><br/>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>항공사명</th>
            <th>항공편명</th>
            <th>출발시간</th>
            <th>도착시간</th>
            <th>일반석운임</th>
            <th>비즈니스석운임</th>
            <th>출발공항</th>
            <th>도착공항</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles['data-id']}>{item.airlineNm}</td>
              <td className={styles['data-id']}>{item.vihicleId}</td>
              <td className={styles['data-id']}>{item.depPlandTime}</td>
              <td className={styles['data-id']}>{item.arrPlandTime}</td>
              <td className={styles['data-id']}>{item.economyCharge}</td>
              <td className={styles['data-id']}>{item.prestigeCharge}</td>
              <td className={styles['data-id']}>{item.depAirportNm}</td>
              <td className={styles['data-id']}>{item.arrAirportNm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FlightWithData;
