import axios from "axios";

export const getScheduleList = (token) => {
    return axios
        .post(`/mypage/scheduleList`, { token })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('getScheduleList:', error);
            return null;
        });
};