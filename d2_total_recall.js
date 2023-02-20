
////////////////////////////////
// Easy Going
////////////////////////////////
/*for (let i = 1; i <= 20; i++) {
    console.log(i);
}
*/
////////////////////////////////
// Get Even
////////////////////////////////
/*for (let i = 0; i <= 200; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
*/
////////////////////////////////
// Fizz Buzz
////////////////////////////////
/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");
} else if (i % 5 === 0) {
    console.log(i +" Buzz")
} else if (i % 3 === 0) {
    console.log(i + " Fizz");
}
}
*/
////////////////////////////////
// Wild Wild Life
////////////////////////////////
/*1. const plantee = ["Plantee", "plant", 5000, "Mordor"];
 plantee[2] = 5001;
 */

 /*2. const wolfy = ["Wolfy" , "wolf", 16, "Yukon Territory"];
 wolfy [3] = "Gotham City";
 */

/*3. const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]
dart.push("Hawkins");
*/
 /* 4.const wolfy = ["Wolfy" , "wolf", 16, "Yukon Territory"];
wolfy.splice(0, 1, "Gameboy");
*/
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
/*const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let nj of ninjaTurtles) {
    console.log(nj = nj.toUpperCase());
}
*/
////////////////////////////////
// Methods, Revisited
////////////////////////////////
/*const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(favMovies[8]);
*/
//1. favMovies.sort();
// This method sorted the array alphabetically
// This  permanently altered the array 

//favMovies.pop();
//console.log(favMovies)
//This method removes the last element from the array

 //favMovies.push("Guardians of the Galaxy");
//console.log(favMovies);
// This method adds a new element at the end of the array

// favMovies.reverse();
//console.log(favMovies);
// This method reverses the order of the array from last to first

//favMovies.shift();
//console.log(favMovies);
//This method returned the element "Jaws" that was shifted out

//favMovies.unshift("Ant Man");
//console.log(favMovies);
//This method add a new element to an array (at the beginning), and unshifts older elements

//favMovies.splice(3,1, "Avatar");
//console.log(favMovies);
//This permanantly altered the array


//console.log(favMovies);

//const myFavMovies = favMovies.slice(0, 9);
//console.log(myFavMovies);

// The method is storing the elements remaining and assigning them to myFavMovies variable
// This method did not change the value of the array since it was implemented into another array
// console log result: ['Jaws', 'The Fellowship of the Ring', "Howl's Moving Castle", 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic']

//console.log(myFavMovies[18])
// You will get an undefined message

// No const does not define a constant value, defines a constant reference to a value. Because of this you can change the elements of a constant array

////////////////////////////////
// Where is Waldo
////////////////////////////////
/*const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
    // whereIsWaldo.splice(1);
    console.log(whereIsWaldo[2][2]);
    whereIsWaldo[2].splice(2, 1, "No One");
   // console.log(whereIsWaldo);
    console.log(whereIsWaldo[3][1]);
*/

////////////////////////////////
//  Excited Kitten
////////////////////////////////


/*for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i, "...human...why you taking pictures of me?");
    } else {
        console.log(i)
    }
}
*/
////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//sort the array
nums.sort((a, b) => a - b);

//if else block to check for even or odd
if(nums.length % 2 != 0) {
    //odd case

    //find middle index
    let middleIndex = Math.floor(nums.length / 2);

    //find median
    median = nums[middleIndex]
}else{
    //even case

    //find middle index
    let middleIndex = nums.length / 2;

    //find median
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
}

//print median
console.log(median)