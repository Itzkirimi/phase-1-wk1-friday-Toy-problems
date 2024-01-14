// This function calculates demerit points based on the car speed.

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;

  // Check if the speed is less than or equal to the speed limit
  if (speed <= speedLimit) {
    return "Ok";
  } else {
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);

    // Check if the license should be suspended
    if (demeritPoints > 12) {
      return "License suspended";
    }

    return "Points: " + demeritPoints;
  }
}

// Example usage
console.log(calculateDemeritPoints(80));
