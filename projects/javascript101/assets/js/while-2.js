//Skriv talen -19 -> 19

// var text = "";
// var i = -19;

// while (i < 20) {
//     text += "Numret är: " + i + "<br>";
//     i++;
// }

//Skriv alla jämna tal mellan 10 -> 40

/* var text = "";
var i = 10;

while (i <= 40) {
    text += "Numret är: " + i + "<br>";
    i+= 2;
}*/

//Skriv alla udda tal mellan 300 -> 333

// var text = "";
// var i = 300;

// while (i <= 333) {
//     i++;
//     if (i % 2 != 0){
//         text += "Numret är: " + i + "<br>";
//     }
// }

//Skriv alla tal som är delbara med 3 och 5 mellan 5 och 50

// var text = "";
// var i = 5;

// while (i <= 50) {
//     i++;
//     if (i % 3 == 0 && i % 5 == 0){
//         text += "Numret är: " + i + "<br>";
//     }
// }


var guess = 0;
while(guess != 7) {
guess=Number(prompt("gissa min son"));
if(guess==7){
    break;
}
}
document.getElementById("output").innerHTML = text;

//övningar
//Skriv talen -19 -> 19
//Skriv alla jämna tal mellan 10 -> 40
//Skriv alla udda tal mellan 300 -> 333
//Skriv alla tal som är delbara med 3 och 5 mellan 5 och 50
//Gå tillbaka till ifElse.js och modifiera guessing app så att den ingår i en while loop, asså, fråga användaren om att gissa så länge denne gissa fel.