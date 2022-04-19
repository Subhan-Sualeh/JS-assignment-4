// // // // // // Chapter 26 - 30 



// // // // // Assignment 4



// // // Question 1 Positive 


// var takeNum=+prompt("Enter some Positive Numbers with point")

// var roundOff= Math.round(takeNum)
 
// var floor=Math.floor(takeNum)

// var ceil=Math.ceil(takeNum)



// document.write("<br>Input Value : "+ takeNum)

// document.write("<br><br>Round Off Value : "+ roundOff)

// document.write("<br><br>Floor Value : "+ floor)

// document.write("<br><br>Ceil Value : "+ ceil)



// // // Question 2 Negative


// var takeNum=+prompt("Enter some Negative Numbers with point")

// var roundOff= Math.round(takeNum)
 
// var floor=Math.floor(takeNum)

// var ceil=Math.ceil(takeNum)



// document.write("<br>Input Value : "+ takeNum)

// document.write("<br><br>Round Off Value : "+ roundOff)

// document.write("<br><br>Floor Value : "+ floor)

// document.write("<br><br>Ceil Value : "+ ceil)



// // // Question 3


// var absNum=+prompt("Enter any Numbers to get their Absolute Value")

// var absolute=Math.abs(absNum)



// document.write("<br><br>The Absolute Value of " + absNum + " is " + absolute)


// // // Question 4


// var randomDice= Math.floor(Math.random() * 6) + 1

// document.write("<h2> You rolled number : "+ randomDice + "</h2>")


// // // Question 5


// var headTails= Math.floor(Math.random() * 2) + 1

// var coinSide="Tails"

// // document.write("<h2> You rolled number : "+ headTails + "</h2>")
 
// if(headTails==1){

//     document.write("<h2>"+ headTails +"<h2>")

//     coinSide="Heads"

//     document.write("<h2> Coin Value is : "+ coinSide + "</h2>")

// }


// else{

//     document.write("<h2>"+ headTails +"<h2>")

//     document.write("<h2> Coin Value is : "+ coinSide + "</h2>")

// }


// // // Question 6


// var randomNum= Math.floor(Math.random() * 100) + 1

// document.write("<h2> The Random Number is : "+ randomNum + "</h2>")


// // // Question 7


var randomNum= Math.floor(Math.random() * 10) + 1

var guessNum=+prompt("Guess a Number from 1 to 10")

if(randomNum==guessNum){

    alert("Congratulation You guessed it right")

}
else{

    alert("Try Again !")

}















