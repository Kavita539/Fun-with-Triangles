const inputs = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#area-btn");
const areaOutput = document.querySelector("#output");

function multiplyBaseAndHeight(base,height){
    const multipliedOutput = base * height;
	return multipliedOutput;
}

function calculateArea() {
	//area = (base * height)/2
	const basexheight = multiplyBaseAndHeight(Number(inputs[0].value), Number(inputs[1].value));
	const area = basexheight / 2;
	areaOutput.innerText = "The area of the triangle is " + area + " units²";
}

areaBtn.addEventListener('click', calculateArea);


