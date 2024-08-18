import React from "react";

const TodayDate = () => {
  const now = new Date();
  const dateString = now.toLocaleDateString();

  return <p>{dateString}</p>;
};

export default TodayDate;
