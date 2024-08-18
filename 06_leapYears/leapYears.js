const leapYears = function(yearCount) {
  // Condition for leap years
  if (yearCount % 4 == 0) {
    // Condition for Century years
    if (yearCount % 100 == 0) {
      return (yearCount % 400 == 0) ? true : false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
