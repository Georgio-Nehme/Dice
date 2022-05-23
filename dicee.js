const dice1 = [1,2,3,4,5,6];
const dice2 = [1,2,3,4,5,6];
const message_1 = "&#128681; Draw";
const message_2 = "&#128681; Player 1 Wins";
const message_3 = "&#128681; Player 2 Wins";


//Function to roll dice 1 //
function dice_1 () { 
    var value1 = add_random(dice1);
    if      (value1 === 1) {document.getElementById("img1").src = "images/dice1.png";}
    else if (value1 === 2) {document.getElementById("img1").src = "images/dice2.png";}
    else if (value1 === 3) {document.getElementById("img1").src = "images/dice3.png";}
    else if (value1 === 4) {document.getElementById("img1").src = "images/dice4.png";}
    else if (value1 === 5) {document.getElementById("img1").src = "images/dice5.png";}
    else                   {document.getElementById("img1").src = "images/dice6.png";}
    return value1
}

//function to roll dice 2 //
function dice_2 () { 
    var value2 = add_random(dice2);
    if      (value2 === 1) {document.getElementById("img2").src = "images/dice1.png";}
    else if (value2 === 2) {document.getElementById("img2").src = "images/dice2.png";}
    else if (value2 === 3) {document.getElementById("img2").src = "images/dice3.png";}
    else if (value2 === 4) {document.getElementById("img2").src = "images/dice4.png";}
    else if (value2 === 5) {document.getElementById("img2").src = "images/dice5.png";}
    else                   {document.getElementById("img2").src = "images/dice6.png";}
    return value2
}

//function to announce the winner//
function Winner(value_a,value_b) {
    if(value_a === value_b) {
        document.getElementById("winner").innerHTML = message_1; 
    } else if(value_a > value_b) {
        document.getElementById("winner").innerHTML = message_2;
    } else {document.getElementById("winner").innerHTML = message_3;
    }
}

//Function to choose random values/
function add_random(dice) {
    var temp_value = dice[Math.floor(Math.random() * dice.length)];
    return temp_value;
}




let result1 = dice_1()
let result2 = dice_2()
console.log(result1)
console.log(result2)
console.log(Winner(result1, result2))