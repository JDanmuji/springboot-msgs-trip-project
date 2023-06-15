import React from 'react';
import SearchBar from './SearchBar';
import FamousCity from './FamousCity';
import famousCityStyles from './FamousCity.module.css';
import Events from '../../../main/main-top/Events';
import mainStyles from '../../../main/Main.module.css';

const TripSchedule1 = () => {
  return (
    <div className={mainStyles['width-wrapper']}>
      <div>
        <div className={famousCityStyles.searchContainer}>
          <SearchBar />
        </div>
        <br /><br />
        <FamousCity />
        <br /><br /><br /><br /><br /><br />
        <Events />
      </div>
    </div>
  );
};

export default TripSchedule1;
