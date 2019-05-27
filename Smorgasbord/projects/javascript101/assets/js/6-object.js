// uppgift
var movies = [
    {
        title: "Good Movie",
        score: "9/10",
        hasWatched: true
    },

    {
        title: "Less Good Movie",
        score:"7/10",
        hasWatched: false
    },

    {
        title: "Mediocre Movie",
        score: "5/10",
        hasWatched: false
    },

    {
        title: "Bad Movie",
        score: "2/10",
        hasWatched: true
    }
]

movies.forEach(function(movie){
    if(movie.hasWatched == true){
        console.log("You have seen " + movie.title + "with the score " + "(" + movie.score + ")")
    }
    else{
        console.log("")
    }
});
