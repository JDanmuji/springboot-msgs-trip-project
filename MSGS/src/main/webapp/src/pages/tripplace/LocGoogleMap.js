import React, { useCallback } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

export default function LocGoogleMap(props) {
    const center = props.center;

    const containerStyle = {
        width: props.width,
        height: props.height,
        objectFit: "cover",
    };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY, // googleMap API personal key - 환경변수로 넘기기
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // Create boundary
        const bounds = new window.google.maps.LatLngBounds(center);
        // 시작시 zoom level 조정
        bounds.extend(
            new window.google.maps.LatLng(center.lat + 0.01, center.lng + 0.01)
        );
        bounds.extend(
            new window.google.maps.LatLng(center.lat - 0.01, center.lng - 0.01)
        );
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    // 구글 MAP 기본 Marker(박물관, 음식점 등) 삭제
    const myStyles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "ON" }],
        },
    ];

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

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
                // gestureHandling: "cooperative", // ctrl 확대, 축소 안내 문구 삭제 ▶ 작동 X
            }}
        >
            <MarkerF
                position={center}
                icon={{
                    url: "https://assets.triple.guide/images/img_map_pin_sight@4x.png",
                    scaledSize: new window.google.maps.Size(30, 30), // 이미지 사이즈 조정
                }}
            />
        </GoogleMap>
    ) : (
        <></>
    );
}
