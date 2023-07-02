import axios from "axios";

export const myInfoDelete = (token) => {
    return axios
        .post(`/mypage/deleteMyInfo`, { token })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};