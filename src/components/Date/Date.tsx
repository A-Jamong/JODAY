import React from "react";

const getDayOfWeek = (date: Date) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return days[date.getDay()];
};

const TodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const weekday = getDayOfWeek(now);
  return (
    <p>
      {year}년 {month}월 {day}일 ({weekday}요일)
    </p>
  );
};

export default TodayDate;
