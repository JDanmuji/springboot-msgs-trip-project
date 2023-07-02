import axios from "axios";

export const fetchUserData = async (tokenValue) => {
  try {
    const response = await fetch("/mypage/getMyInfo", {
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