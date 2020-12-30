const talkingCalendar = function(date) {
  // Your code here
  let splitDate = date.split("/");
  let newDate = "";
  switch (splitDate[1]) {
  case "01":
    newDate += ("January");
    break;
  case "02":
    newDate += ("February");
    break;
  case "03":
    newDate += ("March");
    break;
  case "04":
    newDate += ("April");
    break;
  case "05":
    newDate += ("May");
    break;
  case "06":
    newDate += ("June");
    break;
  case "07":
    newDate += ("July");
    break;
  case "08":
    newDate += ("August");
    break;
  case "09":
    newDate += ("September");
    break;
  case "10":
    newDate += ("October");
    break;
  case "11":
    newDate += ("November");
    break;
  case "12":
    newDate += ("December");
    break;
  }

  if (splitDate[2] === "01" || splitDate[2] === "21" || splitDate[2] === "31") {
    newDate += (" " + parseInt(splitDate[2]) + "st,");
  } else if (splitDate[2] === "02" || splitDate[2] === "22") {
    newDate += (" " + parseInt(splitDate[2]) + "nd,");
  } else if (splitDate[2] === "03" || splitDate[2] === "23") {
    newDate += (" " + parseInt(splitDate[2]) + "rd,");
  } else {
    newDate += (" " + parseInt(splitDate[2]) + "th,");
  }
  return newDate += " " + splitDate[0];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));