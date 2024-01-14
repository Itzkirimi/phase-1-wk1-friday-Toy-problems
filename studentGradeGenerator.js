 studentGradeGenerator.js
function calculateGrade(marks) {
    if (marks > 79) {
      return 'A';
    } else if (marks >= 60 && marks <= 79) {
      return 'B';
    } else if (marks >= 50 && marks <= 59) {
      return 'C';
    } else if (marks >= 40 && marks <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  const userMarks = prompt('Enter student marks (between 0 and 100):');
  const grade = calculateGrade(Number(userMarks));
  console.log(`Grade: ${grade}`);
  