const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(obj) {

  return obj
    .sort((a, b) => (getAge(a.yearOfBirth, a.yearOfDeath)) - getAge(b.yearOfBirth, b.yearOfDeath))
    .pop()

};

// Do not edit below this line
module.exports = findTheOldest;
