import React, { useState, useEffect } from 'react';
import styles from './FamousCity.module.css';

const cities = [
  '태안',
  '인천',
  '춘천/홍천',
  '부산',
  '통영/거제',
  '여수',
  '경주',
  '제주',
  '강릉/속초',
  '전주',
  '포항/안동',
  '가평/안동',
];

const FamousCity = () => {
  const [selected, setSelected] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCities, setVisibleCities] = useState([]);

  const scrollContainerRef = React.useRef(null);

  useEffect(() => {
    updateVisibleCities();
  }, [scrollPosition]);

  const updateVisibleCities = () => {
    const containerWidth = scrollContainerRef.current.offsetWidth;
    const visibleCount = 5;

    setVisibleCities(cities.slice(scrollPosition, scrollPosition + visibleCount));
  };

  const handlePrevClick = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const handleNextClick = () => {
    setScrollPosition((prevPosition) => Math.min(prevPosition + 1, cities.length - 5));
  };

  const handleItemClick = (index) => {
    setSelected(index);
  };

  return (
    <div className={styles['popular-cities-container']}>
      <h1>인기 도시</h1>
      <br />
      <div className={styles['scroll-menu-container']}>
        <div className={styles['scroll-arrow']} onClick={handlePrevClick}>
          ⬅️
        </div>
        <div className={styles['scroll-menu']} ref={scrollContainerRef}>
          <div className={styles['scroll-menu-content']}>
            {visibleCities.map((city, index) => (
              <div
                key={index}
                className={`${styles.circle} ${index === selected ? styles.selected : ''}`}
                onClick={() => handleItemClick(index + scrollPosition)}
              >
                {city}
              </div>
            ))}
          </div>
        </div>
        <div className={styles['scroll-arrow']} onClick={handleNextClick}>
          ➡️
        </div>
      </div>
    </div>
  );
};

export default FamousCity;
