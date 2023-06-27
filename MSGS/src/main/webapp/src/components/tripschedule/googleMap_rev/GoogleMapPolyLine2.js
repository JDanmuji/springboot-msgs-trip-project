import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

import Loading from "../../common/Loading";

export default function GoogleMapPolyline2(props) {
    const data = props.mapDataList;


    console.log(data);
    // props에 담아올 mapDataList 가이드
    // 아래와 같은 json array로 가져오면 됩니다.
    // TripStoryDay.js를 참조하세요.
    //
    // mapDataList = [
    //     {
    //         order: 1,
    //         placeOrder: place일 시 숫자, dorm일 시 null,
    //         type: "place" 또는 "dorm",
    //         center: { lat: lat좌표, lng: lon좌표 },
    //     },
    // ];

    // 지도 크기, 테두리 등 조정
    const containerStyle = {
        width: "90rem",
        height: "30rem",
        objectFit: "cover",
        borderRadius: "10px",
        overflow: "hidden",
    };

    // 구글 MAP 기본 Marker(박물관, 음식점 등) 삭제
    const myStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "ON" }],
        },
    ];

    const center = data.find((item) => item.order === 1)?.center;

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        // googleMap API personal key - 환경변수로 넘기기
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    });

    const [map, setMap] = useState(null);
    const polylineRef = useRef(null);

    const onLoad = useCallback(function callback(map) {
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
    }, []);

    const onUnmount = useCallback(function callback() {
        if (polylineRef.current) {
            polylineRef.current.setMap(null);
        }
        setMap(null);
    }, []);

    // 장소 marker
    const placeMarkers = data
        .filter((item) => item.type === "place")
        .map((item) => (
            <MarkerF
                key={item.order}
                position={item.center}
                icon={{
                    url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_num_${item.placeOrder}.png`,
                    scaledSize: new window.google.maps.Size(30, 30),
                    anchor: new window.google.maps.Point(15, 15),
                }}
            />
        ));

    // 숙박 marker
    const dormMarkers = data
        .filter((item) => item.type === "dorm")
        .map((item) => (
            <MarkerF
                key={item.order}
                position={item.center}
                icon={{
                    url: `${process.env.PUBLIC_URL}/images/mapMarker/marker_dorm.png`,
                    scaledSize: new window.google.maps.Size(30, 30),
                }}
            />
        ));

    // 점선 좌표 추출
    const coordinates = data.map((item) => item.center);
    // 점선 모양 설정
    const lineSymbol = {
        path: "M 0,-1 0,1",
        // M: 선분 시작
        // (0, -1): 선분 시작 좌표
        // (0, 1): 선분 끝 좌표
        strokeOpacity: 0.7, // 투명도
        scale: 3, // 두께
    };
    // 점선 옵션 설정
    const polylineOptions = {
        path: coordinates,
        strokeColor: "#555555",
        strokeOpacity: 0,
        strokeWeight: 0.7,
        icons: [
            {
                icon: lineSymbol,
                offset: "0",
                repeat: "15px", // 실선과 실선 사이 길이
            },
        ],
    };

    useEffect(() => {
        if (map) {
            // 데이터 변경 시 기존 점선 삭제
            if (polylineRef.current) {
                polylineRef.current.setMap(null);
            }

            // 새 점선 생성
            const polyline = new window.google.maps.Polyline(polylineOptions);
            polyline.setMap(map);
            polylineRef.current = polyline;
        }
    }, [map, polylineOptions]);

    return !isLoaded ? (
        <Loading />
    ) : (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                disableDefaultUI: true, // 구글 Map 기본 옵션 삭제
                styles: myStyles,
                // gestureHandling: "cooperative", // ctrl 확대, 축소 안내 문구 삭제 ▶ 작동 X
            }}
        >
            {/* Child components, such as markers, info windows, etc. */}
            <>
                {data
                    .filter((item) => item.type === "place")
                    .map((item) => (
                        <MarkerF
                            key={item.placeOrder}
                            position={item.center} // 좌표
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
    );
}
