document.URL
document.links
document.body
document.head

// select
// takes a string argument and returns the one element with a matching ID
var element = document.getElementById("highlight")
console.log(element)
console.dir(element)

// matching class
var elements = document.getElementsByClassName("bolded")
console.log(elements)
console.dir(elements)

// retunrs given tag name
var eles = document.getElementsByTagName("li")
console.log(eles)
console.dir(eles)

// css tag
// "h1"
// ".bolded"
// "#highlight"

var queryTag = document.querySelector(".bolded")

var queryAllTag = document.querySelectorAll(".bolded")

// exercise 1

var select1 = document.getElementById("first")
var select2 = document.querySelector("p")
var select3 = document.getElementsByClassName("special").item(0)
var select4 = document.getElementsByTagName("p").item(0)
var select5 = document.querySelectorAll("p").item(0)