//CHALLENGE ONE
let mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));

let grade;

if (mark > 79) {
  grade = 'A';
} else if (mark >= 60) {
  grade = 'B';
} else if (mark >= 50) {
  grade = 'C';
} else if (mark >= 40) {
  grade = 'D';
} else {
  grade = 'E';
}

console.log("The student's grade is: " + grade);


//CHALLNGE TWO SPEED
let speed = parseInt(prompt("Enter the car's speed (in km/h):"));
const speedLimit = 70;
let demeritPoints = 0;

if (speed < speedLimit) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((speed - speedLimit) / 5);
  
  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log("Points:", demeritPoints);
  }
}

// challenge three

// Input values

let basicSalary = parseFloat(prompt("Enter the basic salary:"));
let benefits = parseFloat(prompt("Enter the benefits:"));

// Constants for tax rates and deductions
const taxRate = 0.2;
const nhifRate = 0.02;
const nssfRate = 0.1;
const nhifMax = 5000;
const nssfMax = 2000;

// Calculate gross salary
let grossSalary = basicSalary + benefits;

// Calculate payee (tax)
let payee = grossSalary * taxRate;

// Calculate NHIF deductions
let nhifDeductions = Math.min(grossSalary * nhifRate, nhifMax);

// Calculate NSSF deductions
let nssfDeductions = Math.min(grossSalary * nssfRate, nssfMax);

// Calculate net salary
let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

// Print the results
console.log("Gross Salary:", grossSalary);
console.log("Payee (Tax):", payee);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Net Salary:", netSalary);