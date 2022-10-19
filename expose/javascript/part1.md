Q1
  "values added:  20"

Q2
  "final result:  20"

Q3
  "values added:  20"

Q4
  "ReferenceError: result is not defined"
  This error occurs because 'result' is a block-local variable specific to the if branch and isn't visible outside.

Q5
  "TypeError: Assignment to constant variable"
  Line 7 attempts to reassign 'result' when it is a constant variable.

Q6
  Line 13 is not reached due to the error at line 7.