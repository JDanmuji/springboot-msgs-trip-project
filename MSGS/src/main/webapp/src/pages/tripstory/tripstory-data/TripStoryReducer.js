import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tripStoryData : {},
    tripDetailList : [],
    tripDayDetail : []
}

const tripStorySlice = createSlice({
    name : 'tripStory',
    initialState,
    reducers: {
        getTripStory(state, action){
            delete action.payload['tripDetailList']  //하위 데이터 제거
            state.tripStoryData = action.payload
            console.log(state.tripStoryData)
        },
        getTripDetail(state, action) {
            state.tripDetailList = action.payload
            console.log(action.payload)
        },
        getTripDayDetail(state, action) {
            state.tripDayDetail = action.payload
            console.log(action.payload)
        }
    }

});


export const tripStoryActions = tripStorySlice.actions
export default tripStorySlice.reducer