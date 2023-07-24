const findTheOldest = function (peopleArray) {
  const currentYear = new Date().getFullYear();

  peopleArray.forEach((person) => {
    if (!person.yearOfDeath) {
      person.age = currentYear - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
  });

  peopleArray.sort((a, b) => {
    return a.age - b.age;
  });

  return peopleArray.shift().name;
};

// Do not edit below this line
module.exports = findTheOldest;
