import { autoBatchEnhancer, configureStore } from '@reduxjs/toolkit';
import TripStoryReducer from './pages/tripstory/tripstory-data/TripStoryReducer';

const Store = configureStore({
    reducer: {
        tripStory : TripStoryReducer
    }
    
});

export default Store;