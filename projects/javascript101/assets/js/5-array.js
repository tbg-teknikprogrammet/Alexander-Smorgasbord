var friend1 = "Adam"
var friend2 = "Inte Adam"
var friend3 = "Absolut inte Adam"
var friend4 = "Kanske Adam"


var friends = ["Adam", "Inte Adam", "Absolut inte Adam", "Kanske Adam"];


var countries = ["Sweden", "Norway", "Finland", "Denmark", "Iceland"];
countries.forEach(function(country){
    console.log(country);
});

function countryList(country) {
    console.log("************");
    console.log(country);
    console.log("************");
    console.log(" ");
}

countries.forEach(countryList);



//var number = [1, 2, 3, 4];

function printReverse(number){
    for(var i = number.length -1; i >= 0; i-- ) {
        console.log(number[i])
    }
}

printReverse([1,2,3,4,5,6,]);

//var array1 =
//var array2 =

function isIdentical(array){
    var first = array[0];
    for(var i = 0; i<=array.length; i++ ) {
        if (array[i] == first);
        return true;
    } 
}


console.log(isIdentical([1, 1, 1, 1, 1]));
console.log(isIdentical([1, 1, 1, 2, 2])); //