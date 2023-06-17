import React, { useCallback, useEffect, useRef } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import data from "./mapData/TripScheduleData";

/*
const center = {
	lat: 37.7189,
	lng: 128.8321,
}

export default function Map() {
  const mapRef = useRef(null)

	const initMap = useCallback(() => {
		new window.google.maps.Map(mapRef.current, {
			center: { lat: 37.7189, lng: 128.8321 },
      zoom: 12,
      disableDefaultUI: true
		})
	}, [mapRef])

	useEffect(() => {
		initMap()
	}, [initMap])

	return <div className='map' style={{ width: '100%', height: '100%' }} ref={mapRef}></div>
}
*/

const containerStyle = {
  width: "100%",
  height: "100%",
};

// 일정 order:1에서 시작
const center = data.find((item) => item.order === 1)?.center;

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCFmyWK3WUh0DG_ye9klSc39nE1JvAm1V4", // googleMap API personal key - 환경변수로 넘기기
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Create boundary
    const bounds = new window.google.maps.LatLngBounds(center);
    // 시작시 zoom level 조정
    bounds.extend(
      new window.google.maps.LatLng(center.lat + 0.05, center.lng + 0.05)
    );
    bounds.extend(
      new window.google.maps.LatLng(center.lat - 0.05, center.lng - 0.05)
    );
    map.fitBounds(bounds);
    setMap(map);

    // Polyline 지도 추가
    polyline.setMap(map);
    // GoogleMap 컴포넌트가 로드되고 map 객체가 생성된 후에 호출되어야 함
  }, []);

  // 구글 MAP 기본 Marker(박물관, 음식점 등) 삭제
  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // 점선 설정
  const coordinates = data
    .filter((item) => item.type !== "memo")
    .map((item) => item.center);

  const lineSymbol = {
    path: "M 0,-1 0,1",
    // M: 선분 시작
    // (0, -1): 선분 시작 좌표
    // (0, 1): 선분 끝 좌표
    strokeOpacity: 0.7, // 투명도
    scale: 3, // 두께
  };

  const polyline = new window.google.maps.Polyline({
    path: coordinates,
    strokeColor: "#000000",
    strokeOpacity: 0,
    icons: [
      {
        icon: lineSymbol,
        offset: "0",
        repeat: "20px", // 실선과 실선 사이 길이
      },
    ],
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true, // 구글 Map 기본 옵션 삭제
        styles: myStyles,
        gestureHandling: "cooperative", // ctrl 확대, 축소 안내 문구 삭제 ▶ 작동 X
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {data
          .filter((item) => item.placeOrder !== null)
          .map((item) => (
            <MarkerF
              key={item.placeOrder} // index가 0부터 시작하므로 placeOrder 활용
              position={item.center} // Marker Location
              icon={{
                url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_num_${item.placeOrder}.png`,
                scaledSize: new window.google.maps.Size(30, 30), // 이미지 사이즈 조정
                anchor: new window.google.maps.Point(15, 15), // 마커 이미지 위치 조정에 따른 앵커 포인트 지정
              }}
            />
          ))}
        {data
          .filter((item) => item.type === "dorm")
          .map((item) => (
            <MarkerF
              key={item.order}
              position={item.center}
              icon={{
                url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_dorm.png`,
                scaledSize: new window.google.maps.Size(30, 30), // 이미지 사이즈 조정
              }}
            />
          ))}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}
