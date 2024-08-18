const sumAll = function(rangeStart, rangeEnd) {
  let result = 0;

  if (
      rangeStart < 0 ||
      rangeEnd < 0 ||
      !Number.isInteger(rangeStart) ||
      !Number.isInteger(rangeEnd)
  ) {
    return "ERROR";
  }

  //if (rangeStart > rangeEnd) {
  //  let temp = rangeStart;
  //  rangeStart = rangeEnd;
  //  rangeEnd = temp;
  //}
  // Alternative Efficient way to exchange two values
  if (rangeStart > rangeEnd) [rangeStart, rangeEnd] = [rangeEnd, rangeStart];

  while (rangeStart <= rangeEnd) {
    result += rangeStart;
    rangeStart++;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
