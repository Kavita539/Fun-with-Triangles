var inputs = document.querySelectorAll(".angle-input");
var isTriangleButton = document.querySelector("#is-triangle-btn");
var outputE1 = document.querySelector("#output");
var form =document.querySelector("#input-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
        var firstAngle = Number(inputs[0].value);
        var secondAngle = Number(inputs[1].value);
        var thirdAngle = Number(inputs[2].value);
        var sumOfAngles = firstAngle + secondAngle + thirdAngle;
        if(sumOfAngles === 180){
            outputE1.innerText = "Yay! The angles form a triangle";
        }else{
            outputE1.innerText = "Oops! The angles do not form a triangle";
        }
    })
    




