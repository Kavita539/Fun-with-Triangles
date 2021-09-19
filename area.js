const inputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const areaOutput = document.querySelector("#output");
var form =document.querySelector("#input-form");

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	 var base = Number(inputs[0].value);
	 var height = Number(inputs[1].value);
	//  var basexheight = base * height;
	 var area = (base * height)/2;
	 areaOutput.innerText = "The area of the triangle is " + area.toFixed(2) + " units²";
 })
 

