//refrences
let textboxRef = document.getElementById("fact_input");
let buttonRef = document.querySelector("button");
let searchingRef = document.querySelector("p");
let resultsRef = document.getElementById("results");
searchingRef.style.display = "none";




//onclick buttonRef
buttonRef.onclick = function(event) {
    event.preventDefault();
    searchingRef.style.display = "block";

    //capture user input
    let userInput = textboxRef.value;
    console.log(userInput);

    //fetch data
    fetch("http://www.factual.ro/api/statements")
    .then(function(response) {
        return response.json();
      
    })

    .then(function(myJson) {
        console.log("Success!");
        console.log(myJson);

        //output results
        // let newresults = document.createElement("img");
        // newresult.src
    })
}