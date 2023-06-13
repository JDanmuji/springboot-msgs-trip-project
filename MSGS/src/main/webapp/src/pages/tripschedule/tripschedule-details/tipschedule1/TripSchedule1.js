import React from 'react';
import SearchBar from './SearchBar';
import FamousCity from './FamousCity';
import famousCityStyles from './FamousCity.module.css';
import Events from '../../../main/Events';
import mainStyles from '../../../main/Main.module.css';

const TripSchedule1 = () => {
  return (
    <div>
      <div className={famousCityStyles.searchContainer}>
        <SearchBar />
      </div>
      <br /><br />
      <FamousCity />
      <br /><br /><br /><br /><br /><br />
      <div className={mainStyles["width-wrapper"]}>
        <Events />
      </div>
    </div>
  );
};

export default TripSchedule1;
