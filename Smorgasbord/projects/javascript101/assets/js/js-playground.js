//dark theme/light theme

document.querySelector("#themeBtn").addEventListener("click", function(){
    if ( document.getElementById("theme").className.match(/(?:^|\s)light(?!\S)/) ) {
        document.getElementById("theme").className = document.getElementById("theme").className.replace ( /(?:^|\s)light(?!\S)/g , 'dark' )
    }
    else {
        document.getElementById("theme").className = document.getElementById("theme").className.replace ( /(?:^|\s)dark(?!\S)/g , 'light' )
    }
    
})