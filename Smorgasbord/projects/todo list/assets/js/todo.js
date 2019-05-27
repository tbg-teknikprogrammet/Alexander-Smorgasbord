document.getElementsByTagName("button")[0].addEventListener("click", List) 

var toDoList = []

function List() {

        var input = 0;
     
        while(input !== "exit" || input !== "Exit") { //Om exit skrivs så avslutas det

            input = prompt("Vad vill du göra? (Exit, New, Delete, List)");
            if(input === "new" || input === "New") {
                 var addNew = prompt("Skriv vad du vill lägga till")
                 toDoList.push(addNew);
                 console.log("Du la till " + addNew + " till listan!")
                        }
            
            
             else if(input === "list" || input === "List") {
                for(var i = 0; i <= toDoList.length-1; i++) //Den går igenom varje input i listan och skriver ut dem
                {
                    console.log(toDoList[i])
                }
               
             }  
             
             else if(input === "delete" || input === "Delete") {
                    var indxDel = Number(prompt("Skriv index för det du vill ta bort"))
                 
                    toDoList.splice(indxDel, 1) // Tar bort det som har indexet användaren skrev
                    console.log("Du tog bort index: " + indxDel)
                 }
                   
             else if(input === "exit" || input === "Exit") // Om man skriver exit så stänger man loopen
                break;
        }
        
        if(input === "exit" || input === "Exit")
            console.log("Closing...")
}