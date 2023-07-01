import axios from "axios";

export const fetchMyTripScheduleList = async (tokenValue) => {
  try {
    const response = await fetch("/mypage/scheduleList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenValue: tokenValue }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// axios ver.
// const axiosMyTripScheduleList = async (tokenValue) => {
//   axios
//     .post("/mypage/scheduleList", {
//       tokenValue,
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
