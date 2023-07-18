export const calculateYearsMonthsDays = (date) => {
  const present = new Date();

  const timeDifference = present.getTime() - date.getTime();
  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor(timeDifference / millisecondsInDay);
  const year = Math.floor(daysDifference / 365);
  const month = Math.floor((daysDifference % 365) / 30);
  const day = daysDifference % 30;

  return year === 0 && month === 0 && day === 0
    ? "Today "
    : (year > 0 ? year + " years " : "") +
        (month > 0 ? month + " months " : "") +
        (day > 0 ? day + " days " : "") +
        "ago";
};

export const datePostedFilter = (posteddate, filter) => {
  var postedDate = new Date(posteddate + " ");
  var currentDate = new Date();
  var timeDiff;
  var hoursDiff;
  var daysDiff;
  switch (filter) {
    case "Last 24 hours":
      timeDiff = currentDate - postedDate;
      hoursDiff = timeDiff / (1000 * 60 * 60);
      console.log("24",hoursDiff);
      return hoursDiff <= 24;
    case "Last 48 hours":
      timeDiff = currentDate - postedDate;
      hoursDiff = timeDiff / (1000 * 60 * 60);
      console.log("48",hoursDiff);
      return hoursDiff <= 48;
    case "Last 7 days":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      console.log("7",daysDiff);
      return daysDiff <= 7;
    case "Last 14 days":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      console.log("17",daysDiff);
      return daysDiff <= 14;
    case "Last Month":
      timeDiff = currentDate - postedDate;
      daysDiff = timeDiff / (1000 * 60 * 60 * 24);
      console.log("month",daysDiff);
      return daysDiff <= 30;
    default: return false;
  }
};
