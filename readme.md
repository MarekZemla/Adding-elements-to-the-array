## Adding elements to the array by entering them in the input field.
### [click here to se how it works](https://marekzemla.github.io/Adding-elements-to-the-array/)
### //1.  I create a constant variable to which I assign an empty array, in which more elements will be added later.
### //2.  I set it to listen on a button that I download without assigning it to a variable, because it will only be used once in the code. I set the listening on to click and assign the declared function.
### //3.  I create another constant variable to which I assign an arrow function. Inside this function, I set the event (e) attribute, which I refer to later in the function, to use the / preventDefault method, which is to stop deleting the content entered in input after clicking the button
### //4.  Then I create a constant variable to which I assign the value of input. This will be used to capture the entered values
### //5.  Then I use the push method to push new values into the array
### //6. I am downloading div to be able to refer to it
### //7.  I refer to a div where I'm using textContent method and assign to it the value of the variable name
### //8.  I use the value method on input and assign it an empty string to clear the input field after each entry
### //9.  In order to avoid entering  empty strings, I use the IF statement in which I enter the length method assigned to input. If anything is typed, it is TRUE and the instruction executes.
### //10.  then I use the for of function to check and prevent repeatedly entering the same elements into the array. Inside for of I execute the IF statement, in which I compare the newly entered element with the ones already existing in the array
