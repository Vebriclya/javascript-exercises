const findTheOldest = function (peopleArray) {
  const currentYear = new Date().getFullYear();

  peopleArray.sort((a, b) => {
    let ageA = a.yearOfBirth - a.yearOfDeath || currentYear - a.yearOfDeath;
    let ageB = b.yearOfBirth - b.yearOfDeath || currentYear - b.yearOfDeath;
    return ageA - ageB;
  });

  return peopleArray[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
