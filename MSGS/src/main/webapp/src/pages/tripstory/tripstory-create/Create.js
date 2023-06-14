import React, { useEffect, useRef } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";

//tripstory 가장 첫 컴포넌트입니다. 
const Create = () => {
    const mapElement = useRef(null)

	useEffect(() => {
		const { naver } = window
		if (!mapElement.current || !naver) return

		// 지도에 표시할 위치의 위도와 경도 넣어줌.
		const location = new naver.maps.LatLng(37.7189, 128.8321)
		const mapOptions = {
			center: location,
			zoom: 12,
			zoomControl: true,
			zoomControlOptions: {
				position: naver.maps.Position.TOP_RIGHT,
			},
		}
		const map = new naver.maps.Map(mapElement.current, mapOptions)
		new naver.maps.Marker({
			position: location,
			map,
		})
	}, [])

    return (
        <div className={styles["width-wrapper1"]}>
            {/* <img
                    className={styles["map"]}
                    src="https://velog.velcdn.com/images/ljs7463/post/744d448c-ba31-4263-8c6b-b4001d1e1a84/image.png"
            /> */}
            <div ref={mapElement} className={styles["map"]}></div>
            
            <WriteForm />
            
        </div>
    );
};

export default Create;