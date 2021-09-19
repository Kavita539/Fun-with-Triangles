var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#hypotenuse-btn")
var outputEl = document.querySelector("#output");
var form =document.querySelector("#input-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    var oppositeSide = Number(sides[0].value);
    var adjacentSide = Number(sides[1].value);
    var lengthOfHypotenuse = Math.sqrt(Math.pow(oppositeSide,2) + Math.pow(adjacentSide,2))
    
    outputEl.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2) + " units";

})


