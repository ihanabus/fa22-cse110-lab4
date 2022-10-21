Q1  
"3" is outputed to the console.  
'i' is incremented to 3 after which the for loop is exited.  

Q2  
"150" is outputed to the console.  
In the final iteration of the for loop, 'discountedPrice' is assigned 300 * 0.5 = 150.  

Q3  
"150" is outputed to the console.  
In the final iteration of the for loop, 'discountedPrice' is assigned 300 * 0.5 = 150.  
'finalPrice' is then assigned Math.round(150 * 100) / 100 = 150.  

Q4  
The function returns the array [50, 100, 150].  
The for loop goes through the array of original prices [100, 200, 300], takes each original price, halves it, and inserts the discounted price into the array 'discounted' which is returned.  

Q5  
"ReferenceError: i is not defined" is outputed to the console.  
This error occurs because 'i' is a block-local variable specific to the for loop and isn't visible outside.  

Q6  
"ReferenceError: discountedPrice is not defined" is outputed to the console.  
This error occurs because 'discountedPrice' is a block-local variable specific to the for loop and isn't visible outside.  

Q7  
"150" is outputed to the console.  
'finalPrice' is a block-local variable and is visible at line 14. 'finalPrice' is initially 0 but is changed to 150 in the final iteration of the for loop.  

Q8  
The function returns the array [50, 100, 150].  
'discounted' is a block-local array and is visible at the return statement.  
The for loop goes through the array of original prices [100, 200, 300], takes each original price, halves it, and inserts the discounted price into the array 'discounted' which is returned.  

Q9  
"ReferenceError: i is not defined" is outputed to the console.  
This error occurs because 'i' is a block-local variable specific to the for loop and isn't visible outside.  

Q10  
"3" is outputed to the console.  
The constant 'length' is declared and assigned with the length of the array argument 'prices,' which is 3.  
As a constant declared in the function, the scope of 'length' is the function, so 'length' is visible at line 12.  

Q11  
The function returns the array [50, 100, 150].  
'const discounted = []' defines a constant reference to an empty array and does not make the elements of the array constant.  
Each iteration of the the for loop declares the constant 'discountedPrice' and assigns to it half of the original price at the current index.  
Since 'discountedPrice' is being redeclared rather than reassigned, no error occurs.  
Since elements can be added and reassigned, 'discounted.push(discountedPrice)' does not cause an error either.  
'discounted' is then an array containing the halved prices.  

Q12  
A. student.name  
B. student["Grad Year"]  
C. student.greeting()  
D. student["Favorite Teacher"].name  
E. student.courseLoad[0]  

Q13  
A.  
'32'  
The number 2 converts to a string and then string concatenation occurs.  

B.  
1  
The string '3' converts to a number so that subtraction can occur. 3 - 2 = 1.  

C.  
3  
null converts to 0 and 3 + 0 = 3.  

D.  
'3null'  
null becomes the string 'null' and then string concatenation occurs.  

E.  
4  
The numeric value of true is 1. 1 + 3 = 4.  

F.  
0  
Both false and null have numeric values of 0. 0 + 0 = 0.  

G.  
'3undefined'  
The undefined value converts to the string 'undefined' and string concatenation occurs.  

H.  
NaN  
'3' is able to convert to the numeric value 3. undefined, however, does not convert to a number and only converts to NaN. 3 - NaN causes an error.  

Q14  
A.  
true  
'2' converts to the number 2 and 2 > 1 is true.  

B.  
false  
String comparison rather than number comparison occurs. In lexicographical order, '2' comes later than '12,' or '2' is greater than '12,' so '2' < '12' is false.  

C.  
true  
'2' converts to the number 2 and 2 == 2 is true.  

D.  
false  
The operator '===' checks for strict equality without type conversion. Since 2 and '2' are different types, the comparison immediately returns false.  

E.  
false  
true has the numeric value 1 and 1 == 2 is false.  

F.  
true  
Boolean(2) translates to true because 2 is a non-zero value. true === true is then true.  

Q15  
The '==' operator enables type conversion so that the operands may have the same type before comparison.  
The '===' operator is a strict equality comparison that checks if the datatypes of the operands are the same before performing an equality operation. If the datatypes are not the same, false is returned. If the datatypes are the same, then an equality operation is applied.  

Q16  
See js file.  

Q17  
The returned array is [2, 4, 6].  
During each iteration of the for loop, the doSomething() function is called through the callback reference. This reference is established when modifyArray() passes in the doSomething() function as a parameter.  

Q18  
See js file.  

Q19  
The code outputs numbers in the order of 1, 4, 3, 2.  

