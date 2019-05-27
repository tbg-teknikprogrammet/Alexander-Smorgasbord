//dark theme/light theme

document.querySelector("#themeBtn").addEventListener("click", function(){
    if ( document.getElementById("theme").className.match(/(?:^|\s)light(?!\S)/) ) {
        document.getElementById("theme").className = document.getElementById("theme").className.replace ( /(?:^|\s)light(?!\S)/g , 'dark' )
    }
    else {
        document.getElementById("theme").className = document.getElementById("theme").className.replace ( /(?:^|\s)dark(?!\S)/g , 'light' )
    }
    
})

//slideshow

var slideShow = ["assets/images/banan.jpg", "assets/images/gud.jpg", "assets/images/skarm.jpg"]
var slideIndex = 1;

document.querySelector("#slide img").src=slideShow[slideIndex];

document.querySelector("#left").addEventListener("click", function(){
    slideIndex += -1;
    if(slideIndex < 0 ) {
        slideIndex = slideShow.length-1;
    }
    document.querySelector("#slide img").src=slideShow[slideIndex];
});

document.querySelector("#right").addEventListener("click", function(){
    slideIndex += 1;
    if(slideIndex > slideShow.length-1) {
        slideIndex = 0;
    }
    document.querySelector("#slide img").src=slideShow[slideIndex];
});

//clickerspel

var clicks = 0;
var button = document.querySelector("input");

button.addEventListener("click", function(){
    clicks += 1;
    document.querySelector("#clicker p").innerHTML = "Du har klickat " + clicks + " gånger";
});


var spinBtn = document.getElementsByClassName("spinner")[0]

spinBtn.addEventListener("click", function() {
    document.getElementById("spinTime").classList.toggle("rotate");
});

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



var emotion = document.getElementById("emoFace");

function makeHappy()
{
    // var emotion = document.getElementById("emoFace");
    if (emotion.value==":("){
        emotion.value = ":D";
    }
    else emotion.value = ">:(";
}