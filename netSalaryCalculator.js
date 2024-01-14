const payeRates = [
    { lowerLimit: 0, upperLimit: 24000, rate: 10 },
    { lowerLimit: 24001, upperLimit: 32333, rate: 25 },
    { lowerLimit: 32334, upperLimit: 500000, rate: 30 },
    { lowerLimit: 500001, upperLimit: 800000, rate: 32.5 },
    { lowerLimit: 800001, upperLimit: Infinity, rate: 35 },
  ];
  
  function calculatePaye(grossSalary) {
    let taxAmount = 0;
  
    for (const rate of payeRates) {
      if (grossSalary > rate.upperLimit) {
        taxAmount += (rate.upperLimit - rate.lowerLimit + 1) * (rate.rate / 100);
      } else {
        taxAmount += (grossSalary - rate.lowerLimit + 1) * (rate.rate / 100);
        break;
      }
    }
  
    return taxAmount;
  }
  
  function calculateNetSalary(basicSalary, benefits) {
    const nhifDeductions = 0;  
    const nssfDeductions = basicSalary * 0.06; 
  
    const grossSalary = basicSalary + benefits;
  
    const paye = calculatePaye(grossSalary);
  
    // Calculate net salary
    const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
  
    return {
      grossSalary,
      paye,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  
  const userBasicSalary = 30000;
  const userBenefits = 5000;
  const result = calculateNetSalary(userBasicSalary, userBenefits);
  
  console.log('Salary Details:');
  console.log(`Gross Salary: ${result.grossSalary}`);
  console.log(`PAYE (Tax): ${result.paye}`);
  console.log(`NHIF Deductions: ${result.nhifDeductions}`);
  console.log(`NSSF Deductions: ${result.nssfDeductions}`);
  console.log(`Net Salary: ${result.netSalary}`);
  