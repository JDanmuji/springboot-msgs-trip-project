import axios from "axios";

export const fetchTerminalList = async (pageNo) => {
    try {
        const response = await axios.get(`/api/terminalList?pageNo=${pageNo}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchBusTimeList = async (depTerminalId, arrTerminalId, depPlandTime, selectedSeatType) => {
    try {
        const response = await axios.get(`/api/busTime`,
            {
                params : {
                    depTerminalId,
                    arrTerminalId,
                    depPlandTime,
                    selectedSeatType
                }
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

