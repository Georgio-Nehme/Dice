const dice1 = [1,2,3,4,5,6];
const dice2 = [1,2,3,4,5,6];

function dice_1 () { 
    var value1 = add_random(dice1);
   
    if      (value1 === 1) {document.getElementById("img1").src = "images/dice1.png";}
    else if (value1 === 2) {document.getElementById("img1").src = "images/dice2.png";}
    else if (value1 === 3) {document.getElementById("img1").src = "images/dice3.png";}
    else if (value1 === 4) {document.getElementById("img1").src = "images/dice4.png";}
    else if (value1 === 5) {document.getElementById("img1").src = "images/dice5.png";}
    else                   {document.getElementById("img1").src = "images/dice6.png";}

}


function dice_2 () { 
    var value2 = add_random(dice2);
   
    if      (value2 === 1) {document.getElementById("img2").src = "images/dice1.png";}
    else if (value2 === 2) {document.getElementById("img2").src = "images/dice2.png";}
    else if (value2 === 3) {document.getElementById("img2").src = "images/dice3.png";}
    else if (value2 === 4) {document.getElementById("img2").src = "images/dice4.png";}
    else if (value2 === 5) {document.getElementById("img2").src = "images/dice5.png";}
    else                   {document.getElementById("img2").src = "images/dice6.png";}

}

dice_1()
dice_2()









//Function to choose random values/
function add_random(dice) {
    var temp_value = dice[Math.floor(Math.random() * dice.length)];
    return temp_value;
}