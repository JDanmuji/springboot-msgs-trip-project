import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from './SearchBar'
import FamousCity from './FamousCity'
import Events from '../../../main/main-top/Events'
import CitiesData from './CitiesData'

import mainStyles from '../../../main/Main.module.css'
import styles from './FamousCity.module.css'

const TripSchedule1 = () => {
	//개발 시 빠른 이해 위한 데이터.
	const sampleData = {
		areaId: 2,
		areaCode: 32,
		sigunguCode: [1, 5, 7],
		areaTitle: '강릉&#183;속초',
		subTitle: '강릉, 속초, 양양',
		mapLat: 37.773466, //위도
		mapLon: 128.920264, //경도
		imageUrl: 'https://kr.object.ncloudstorage.com/msgs-file-server/cities-image/famous-city-gangreung.webp',
	}
	const [citiesData, setCitiesData] = useState([...CitiesData])

	const [searchId, setSearchId] = useState('')
	const getSearchValue = (e) => {
		setSearchId(e.target.value.toLowerCase())
	}

	const searchedCity = citiesData.filter((item) => item.areaTitle.toLowerCase().includes(searchId))

	const [selectedCity, setSelectedCity] = useState(null)

	const navigate = useNavigate()

	const imgClick = (areaId) => {
		setSelectedCity(areaId) //클릭한 도시의 css 변경
		const selectedCity = citiesData.filter((item) => item.areaId === areaId)[0]
		navigate('/tripschedule2', {
			state: { selectedCity:  selectedCity},
		})
	}

	return (
		<div className={`${mainStyles['width-wrapper']} ${styles['tripSchedule-wrapper']}`}>
			<SearchBar getSearchValue={getSearchValue} />
			{/*<FamousCity />*/}
			<FamousCity searchedCity={searchedCity} selectedCity={selectedCity} imgClick={imgClick} />{' '}
			{/* citiesData={citiesData} */}
			<Events />
		</div>
	)
}

export default TripSchedule1
