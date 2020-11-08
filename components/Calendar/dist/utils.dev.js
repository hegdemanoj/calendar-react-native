"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendarDates = void 0;

var getCalendarDates = function getCalendarDates(lastMonthStartDay, lastDateOfPrevMonth, lastDateOfMonth) {
  var allDatesArr = [];
  var j = 1;

  while (j <= lastDateOfMonth) {
    var weekDates = [];
    var addDate = 0,
        newmonthdate = 1;

    for (var i = 0; i < 7; i++) {
      if (lastMonthStartDay <= lastDateOfPrevMonth) {
        addDate = lastMonthStartDay;
        lastMonthStartDay += 1;
      } else if (j <= lastDateOfMonth) {
        addDate = j;
        j += 1;
      } else {
        addDate = newmonthdate;
        newmonthdate += 1;
      }

      weekDates.push(addDate);
    }

    console.log(weekDates);
    allDatesArr.push(weekDates);
  }

  return allDatesArr;
};

exports.getCalendarDates = getCalendarDates;