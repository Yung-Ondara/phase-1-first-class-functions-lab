// Code your solution in this file!
// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers from an array
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that returns a function multiplying fare by a given multiplier
const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
};

// Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// Function that triples the fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on a given function
const selectDifferentDrivers = function (arrayOfDrivers, driverSelector) {
  return driverSelector(arrayOfDrivers);
};


  
 
  
  