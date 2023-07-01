import axios from "axios";

export const fetchMyProfile = async (tokenValue) => {
  try {
    const response = await fetch("/mypage/profile", {
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