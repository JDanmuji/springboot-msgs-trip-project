import axios from "axios";

export const fetchTerminalList = async (pageNo) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/terminalList?pageNo=${pageNo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchBusTimeList = async (depTerminalId, arrTerminalId, depPlandTime) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/terminalList?pageNo=${pageNo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


