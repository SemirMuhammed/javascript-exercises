const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let first = 0;
  let second = 1;
  let third = (num == 1) ? 1 : 0;

  for (let i = 0; i < num - 1; i++) {
    third = first + second;
    first = second;
    second = third
  }

  return third;

};

// Do not edit below this line
module.exports = fibonacci;
