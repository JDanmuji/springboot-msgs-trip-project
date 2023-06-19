import React, { useCallback, useEffect, useRef } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

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


