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
