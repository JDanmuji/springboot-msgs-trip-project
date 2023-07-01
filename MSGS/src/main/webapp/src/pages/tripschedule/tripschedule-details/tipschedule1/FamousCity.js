import React from 'react'
import { Link } from 'react-router-dom'

import styles from './FamousCity.module.css'
import CityItem from './CityItem'

const FamousCity = (props) => {
	return (
		<div className={styles['popular-cities-container']}>
			<h1 className={styles['popular-cities-title']}>인기도시</h1>
			<div className={styles[ 'cities-container' ]}>
				{props.searchedCity.map((data) => (
					<CityItem key={data.areaId} data={data} isSelected={props.selectedCity === data.areaId} imgClick={props.imgClick} />
				))}
				</div>
		</div>
	)
}

export default FamousCity
