import axios from "axios";

export const fetchMyReview = async (tokenValue) => {
  try {
    const response = await fetch("/mypage/reviewList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenValue: tokenValue }),
    });
    const data = await response.json();
    console.log("myReview",data);
    return data;
  } catch (err) {
    console.log(err);
  }
};