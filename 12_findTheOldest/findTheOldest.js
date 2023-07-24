const findTheOldest = function (peopleArray) {
  const currentYear = new Date().getFullYear();

  // See comment at the end of the HTML to see what this looked like prior to refactoring
  peopleArray.sort((a, b) => {
    let ageA = a.yearOfDeath
      ? a.yearOfDeath - a.yearOfBirth
      : currentYear - a.yearOfBirth;
    let ageB = b.yearOfDeath
      ? b.yearOfDeath - b.yearOfBirth
      : currentYear - b.yearOfBirth;
    return ageB - ageA;
  });

  return peopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
