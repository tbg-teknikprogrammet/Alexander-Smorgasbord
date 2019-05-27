// alert("mumma gay");
/*
var name = "Adam";
var age = 69;

document.write(name);

if(age < 18) {
    // adams kod, är den sann?
    console.log("nejnej adam för liten, för han är " + age + " år");
}
else if(age == 69) {
    console.log("adam är dank för han är " + age + " år")
}
else {
    // hoppsan vad hände här
    console.log("ojoj adam är nog stor, för han är " + age + " år");
}*/

/*function isEven(x) {
    if(x % 2 == 0) {
        return true
        
    }
    else{
        return false
    }
    
}
console.log(isEven(4)) */


/*
function kebabToSnake(y){
    var replace = y.replace(/-/g, "_");
    return replace;
}

console.log(kebabToSnake("adam-hej"))*/
/*

function localScope() {
    var showScope = 31;
    console.log(showScope);
}

localScope();
console.log(showScope)

*/

function sing(){
    console.log("sing woo");
    console.log("kul som fan");
}

// setInterval(sing, 2500);

// var anon = setInterval(function() {
//     console.log(" haha anon gay")
// }, 3000);



function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function() {
    clearInterval(myTime);
});

document.getElementsByTagName("button")[0].addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000)
});