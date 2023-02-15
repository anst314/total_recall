// Example of What your JS File in VS Code should look like


/*
    Remember!!! Once you’ve completed a problem,
    COMMENT OUT YOUR WORK before moving on to the next one.
    This makes it easier to read and debug the current 
    Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/*1. How do we assign a value to a variable?
    let val = "Name";
2. How do we change the value of a variable?
    val = "John";
3. How do we assign an existing variable to a new variable?
    let existVble = 3;
    let newVble = existVble;
4. Remind me, what are declare, assign, and define?
    declare means to create the variable and a type,
    to assign means to give a value to the variable using 
    the equals operator, and to define means to have the type
    and variable with the assignment and any functions or 
    methods within them
5. What is pseudocoding and why should you do it?
    It is a type of plain language description of the steps in 
    an algorithm or another system.
6. 80%
*/

// B. Strings
/*1. let firstVariable = " ";
2. firstVariable = "Hello World";
3. firstVariable = 3;
4. let secondVariable = firstVariable;
5. secondVariable = "Hi";
6. 3
7. let yourName = "Anthony Stanton";
    console.log(`Hello, my name is ${yourName}`);
// C. Booleans
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');

 console.log(true || false);
 console.log(false || false && false && false && false || true);
 console.log(false === false)
 console.log('Kevin');
 console.log(a - b - c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
 console.log(a + a + d); // note: the answer is a simple arithmetic equation, not something "weird"
 console.log(48  '48');
 */

// D. The Farm
/*  let animal ="cow";
 if (animal === "cow") {
  console.log("mooo");
 } else {
  console.log("Hey! You're not a cow.");
 }
 */
// E. Driver's Ed
/*let age = promt("Please enter your age");
if (age >= 16) {
    alert("Here are the keys!");
} else if (age < 16) {
    alert("Sorry, you're too young.");
}
*/
//_____________________________________________________________






// II. Loops
// A. The Basics
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let i = 10; i <= 40; i++) {
    console.log(i);
}

for (let i = 12; i < 4000; i += 3) {
    console.log(i);
}
// B. Get even
for (i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        console.log(i, "is Even");
    }
}
*/
// C. Give me Five
/*for (number = 0; number <= 100; number += 5) {

    if (i === 0) {
        continue;
    }

    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`I found a ${i}. High five!`);
    } if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    } else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
    */


    // D. Savings account
    /*let bank_account = 0;
    for (i = 1; i <= 10; i++) {
        bank_account += i;
    }
       console.log(bank_account);
*/
    

    /*let bank_account = 0;
    for (i = 1; i <= 100; i++) {
        bank_account += i;
    }
    
    console.log(bank_account);
    */
    //___________________________________________________________








        // III. Arrays & Control Flow    
        // A. Talk about it:
        /*1.Elements or Indexes
        2. They will be in the order according to the contiguos location in memory
        3. A collection of movies 
        */
       
        // B. Easy Does It
        // Create an array that contains three quotes and store it in a variable called quotes
        /*const quotes = ["Too err is human", "To be or not to be", "We came...we saw..we conqured"]*/

        // C. Accessing elements
        // Given the following array const randomThings = [1, 10, "Hello", true]
        // 1. How do you access the 1st element in the array?
        //    randomThings[0];
        //2. Change the value of "Hello" to "World"
        //    randonThings[2] = "World";
        // 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log()
        /* let randomThings = [1, 10, "Hello", true];
         randomThings[2] = "World";
         console.log(randomThings[2]);
         */
        // D. Change values
        // Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
        // 1. What would you write to access the 3rd element of the array?
        //     ourClass[2];
        // 2. Change the value of "Github" to "Octocat"
        //    ourClass[4] = "Octocat";
        // 3. Add a new element, "Cloud City" to the array
        //    ourClass.push("Cloud City");

        // E. Mix It Up
        // Given the following array: const myArray = [5, 10, 500, 20]
        // 1. Add the string "Aegon"to the end of the array.
        //    myArray.push("Aegon");
        //  Add another string of your choice to the end of the array
        //  myArray.push("CNET")
        // 2. Remove the 5 from the beginning of the array.
        //    delete myArray [0];
        // 3. Add the string "Bob Marley"to the beginning of the array.
        //    myArray.unshift("Bob Marley");
        // 4. Remove the string of your choice from the end of the array.
        //   myArray.pop()
        // 5. Reverse this array using Array.prototype.reverse()
        /*    const myArray = ["Bob Marley", 10, 500, 20, "Aegon"];
            console.log(myArray);
            const reverse = myArray.reverse();
            console.log(myArray);
        //   Did you mutate the array?
            Yes 
        //   What does mutate mean? 
            To change the value
        // Did the .reverse()method return anything?
            Yes, it returned the values in the indicies in reverse order
            */ 

        // F. Biggie Smalls
        // Create a variable that contains an integer.
        //    let num = 101;
        //    Write an if ... else statement that:
        //    1. console.log()s "little number" if the number is entered is less than 100.

        /*    if (num < 100) {
                console.log("little number");
            } else {
                console.log("big number");
            }
        */

        // G. Monkey in the Middle
        // Write an if ... else if ... elsestatement:
            // 1. console.log()little number if the number entered is less than 5.
            // 2. If the number entered is more than 10, log big number.
            // 3. Otherwise, log "monkey".

        /*    let num1 = 3;
            if (num1 < 5) {
                console.log("little number");
            } else if (num1 > 10) {
                console.log("big number")
            } else {
                console.log("monkey")

            }
        */

        // H. What's in Your Closet?
        // 1. What's Kristyn wearing today? Using bracket notation to access items in kristyns Closet, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

       //console.log(kristynsCloset);

        //  4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

          // Thom's closet is more complicated. Check out this nested data structure!!
    /*    const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //console.log(thomsCloset[0][0]);
  */
    // 5. In the same way, access one item from Thom's pants array.

    //    console.log(thomsCloset[1][1]);   
    
    // 6. Access one item from Thom's accessories array. 
    
    // console.log(thomsCloset[0][0]); 

    //  7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

    /*console.log("Thom is looking fierce in a " + (thomsCloset[0][0]) + ", " + (thomsCloset[1][1]) + " and " + (thomsCloset[2][0]))

    //  8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
    thomsCloset[1][2] = "Footie Pajamas";
    console.log(thomsCloset[1][2]);
      ____________________________________________________________


        // IV. Functions
        /* A. Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
        */ 
    //    

    //    function printGreeting(name) {
            
    //         return console.log(printGreeting("Slimer"));
    //     }
        
        /* B. Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
        */
        function printCool(name) {
            return `${name} is cool`;
           }
           console.log(printCool("Captain Reynolds"))

        // C. calculateCube

           function calculateCube(a) {
            return a * a * a
           }
           console.log(calculateCube(5));

        /* D. Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
        */
        function isVowel(vowel) {
           const vowels = ['a', 'e', 'i', 'o', 'u'];
             for (let i = 0; i <= vowels.length; i++) {
                if (vowels[i] == vowel) {
                return true;
                } else {
                    return false;
                }
             }
               
            }
        
        console.log(isVowel("b"));
        // E.
        // F.
        // G.
        // H.
        //_____________________________________________________________






        // V. Objects
        // A.
        // B.
        // C.
        // D.
        
        // E.
        // F.
        // G.
        //_____________________________________________________________


        // Extra
        console.log('%c----I. Variables & Datatypes---', 'color: green')
//* To answer these questions, you can add them in a multiline comment section inside of script.js

