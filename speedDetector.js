 speedDetector.js
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmAboveLimit = 1;
  
    if (speed < speedLimit) {
      console.log('Ok');
      return 0;
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / 5);
      console.log(`Points: ${demeritPoints}`);
      
      if (demeritPoints >= 12) {
        console.log('License suspended');
      }
  
      return demeritPoints;
    }
  }
  
  const userSpeed = prompt('Enter car speed:');
  const totalDemeritPoints = calculateDemeritPoints(Number(userSpeed));
  