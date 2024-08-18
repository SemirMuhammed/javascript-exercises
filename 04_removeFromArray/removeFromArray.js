const removeFromArray = function(array, ...itemsToBeRemoved) {
  let expectedArray = [];
  array.forEach(item => {
    if (!itemsToBeRemoved.includes(item)) {
      expectedArray.push(item);
    }
  });
  return expectedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
