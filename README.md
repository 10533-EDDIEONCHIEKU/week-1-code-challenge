#week-1-code-challenge


Student Grade Generator
The Student Grade Generator is a JavaScript program that prompts the user to input a student's marks and determines the corresponding grade based on the provided grading scale. The program expects the input marks to be between 0 and 100 and assigns grades according to specific ranges. Here's how it works:

The program asks the user to input the student's marks.
It then checks the input marks against the grading scale to determine the appropriate grade.
If the marks are greater than 79, it assigns grade "A".
If the marks are between 60 and 79 (inclusive), it assigns grade "B".
If the marks are between 50 and 59 (inclusive), it assigns grade "C".
If the marks are between 40 and 49 (inclusive), it assigns grade "D".
If the marks are less than 40, it assigns grade "E".
Finally, the program displays the calculated grade.


Speed Detector
The Speed Detector is a JavaScript program that takes as input the speed of a car and determines if it is within the speed limit. It provides feedback to the driver and calculates demerit points based on the speed. Here's how it works:

The program prompts the user to enter the speed of the car in kilometers per hour.
It checks if the speed is less than 70 km/h. If it is, the program prints "Ok" as the speed is within the limit.
If the speed exceeds 70 km/h, the program calculates the number of demerit points. For every 5 km/h above the speed limit, one demerit point is added.
The program displays the total number of demerit points.
If the number of demerit points exceeds 12, the program prints "License suspended" to indicate that the driver's license is suspended.



Net Salary Calculator
The Net Salary Calculator is a JavaScript program that calculates an individual's net salary based on their basic salary and benefits. It also determines the payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary. Here's how it works:

The program prompts the user to enter the individual's basic salary and benefits.
It calculates the gross salary by adding the basic salary and benefits together.
The program then determines the payee (tax) by multiplying the gross salary by the tax rate (0.2).
Next, it calculates the NHIF deductions by taking the lesser of the gross salary multiplied by the NHIF rate (0.02) or the NHIF maximum amount (5000).
Similarly, it calculates the NSSF deductions by taking the lesser of the gross salary multiplied by the NSSF rate (0.1) or the NSSF maximum amount (2000).
Finally, the program calculates the net salary by subtracting the payee, NHIF deductions, and NSSF deductions from the gross salary.
