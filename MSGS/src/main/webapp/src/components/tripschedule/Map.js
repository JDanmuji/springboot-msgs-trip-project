import React, { useCallback, useEffect, useRef, useState } from "react";

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
            disableDefaultUI: true,
         })
      }
   , [mapRef])

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
//const center = data.find((item) => item.order === 1)?.center;

export default function Map({ planList, selectedCity, selectedDay }) {

	// 페이지 첫 로드 시, selectedCity Lat, Lng에서 시작(key_name: lat, lng로 사용해야 함)
	
	const [center, setCenter] = useState({ lat: 37.773466, lng:128.920264})

	// ---------- GoogleMap 컴포넌트 다시 로드 ----------
	// selectedDay 또는 center 값이 변경될 때마다 GoogleMap 컴포넌트를 다시 로드
	const [mapComponent, setMapComponent] = useState(null)
	/*
  mapComponent
  : GoogleMap 컴포넌트가 로드될 때 설정되는 변수
  : onLoad 콜백 함수에서 해당 변수에 GoogleMap 인스턴스를 저장
  : mapComponent 변수를 통해 지도 인스턴스에 접근
  */


	// center를 state로 선언해서 day 클릭 시마다 center 값 업데이트
	// selectedDay가 변경될 때마다, center값이 변경되므로 의존성 배열에 selectedDay 선언
	useEffect(() => {
		const selectedPlan = planList[selectedDay]
		if (selectedPlan && selectedPlan.length > 0) {
			const selectedItem = selectedPlan[0]
			setCenter({ lng: selectedItem.mapx, lat: selectedItem.mapy })
		}
	}, [selectedDay])

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY, // googleMap API personal key - 환경변수로 넘기기
	})

	const [map, setMap] = useState(null)

	const onLoad = useCallback(
		function callback(map) {
			// Create boundary
			const bounds = new window.google.maps.LatLngBounds(center)
			// 시작시 zoom level 조정
      bounds.extend(new window.google.maps.LatLng(center.lat + 0.05, center.lng + 0.05))
			bounds.extend(new window.google.maps.LatLng(center.lat - 0.05, center.lng - 0.05))
			map.fitBounds(bounds)
			setMap(map)

			// Polyline 지도 추가
			polyline.setMap(map)
			// GoogleMap 컴포넌트가 로드되고 map 객체가 생성된 후에 호출되어야 함

			setMapComponent(map)
		},
		[selectedDay] // SelectedDay 값이 변경될 때마다 새로운 onLoad 콜백 함수 생성 → map 초기값 재설정
	)

	useEffect(() => {
		if (mapComponent) {
      mapComponent.panTo(center) // panTo: 해당 위치로 지도 이동
		}
	}, [selectedDay, center])

	// 구글 MAP 기본 Marker(박물관, 음식점 등) 삭제
	const myStyles = [
		{
			featureType: 'poi',
			elementType: 'labels',
			stylers: [{ visibility: 'ON' }],
		},
	]

	// ---------- unMount 설정 ----------
	const onUnmount = useCallback(function callback(map) {
		setMap(null)
	}, [])

	// 점선 설정
	// const coordinates = data.filter((item) => item.type !== 'memo').map((item) => item.center)

  const coordinates = planList[ selectedDay ]?.filter((item) => item.type !== 'memo').map(
    (item) => {
      console.log('coordinates')
      return { lat: item.mapx, lng: item.mapy }
    }
  )

	const lineSymbol = {
		path: 'M 0,-1 0,1',
		// M: 선분 시작
		// (0, -1): 선분 시작 좌표
		// (0, 1): 선분 끝 좌표
		strokeOpacity: 0.7, // 투명도
		scale: 3, // 두께
	}

	const polyline = new window.google.maps.Polyline({
		path: coordinates,
		strokeColor: '#555555',
		strokeOpacity: 0,
		strokeWeight: 0.7,

		icons: [
			{
				icon: lineSymbol,
				offset: '0',
				repeat: '15px', // 실선과 실선 사이 길이
			},
		],
	})

	console.log(isLoaded)
	console.log(onLoad)
	console.log(onUnmount)
	console.log(containerStyle)


	return isLoaded ? (
		<GoogleMap
			key={`${selectedDay}-${center}`} // selectedDay, center 변경에 따른 구글맵 reLoad
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
			onLoad={onLoad}
			onUnmount={onUnmount}
			options={{
				disableDefaultUI: true, // 구글 Map 기본 옵션 삭제
				styles: myStyles,
			}}>
			{/* Child components, such as markers, info windows, etc. */}
			<>
				{planList[selectedDay]
					.filter((item) => item.placeOrder !== null)
					.map((item) => (
						<MarkerF
							key={item.placeOrder} // index가 0부터 시작하므로 placeOrder 활용
							position={{ lat: item.mapx, lng: item.mapy }} // Marker Location
							icon={{
								url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_num_${item.placeOrder}.png`,
								scaledSize: new window.google.maps.Size(30, 30), // 이미지 사이즈 조정
								anchor: new window.google.maps.Point(15, 15), // 마커 이미지 위치 조정에 따른 앵커 포인트 지정
							}}
						/>
					))}
				{planList[selectedDay]
					.filter((item) => item.type === '숙박')
					.map((item) => (
						<MarkerF
							key={item.order}
							position={{ lat: item.mapx, lng: item.mapy }}
							icon={{
								url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_dorm.png`,
								scaledSize: new window.google.maps.Size(30, 30), // 이미지 사이즈 조정
								anchor: new window.google.maps.Point(15, 15), // 마커 이미지 위치 조정에 따른 앵커 포인트 지정
							}}
						/>
					))}
			</>
		</GoogleMap>
	) : (
		<></>
	)

}