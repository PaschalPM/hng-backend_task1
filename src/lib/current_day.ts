const DAYS_OF_THE_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getCurrentDay = () => {
  const date = new Date();
  const dayIdx = date.getDay();
  return DAYS_OF_THE_WEEK[dayIdx];
};

export default getCurrentDay