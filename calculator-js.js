const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnDecimal = document.querySelector("#btnDecimal");
const btnClear = document.querySelector("#btnClear");
const btnEqual = document.querySelector("#btnEqual");
const btnAdd = document.querySelector("#btnAdd");
const btnSub = document.querySelector("#btnSub");
const btnDiv = document.querySelector("#btnDiv");
const btnMult = document.querySelector("#btnMult");
let screenOutMain = document.querySelector("#screenOutMain");
let screenOutBot = document.querySelector("#screenOutBot");

let value = "";

let isDown = false,
	isLong = false,
	target,
	longTID;

window.addEventListener("mouseup", handleMouseUp);

btn0.addEventListener("click", () => {
	initialCheck();
	value += "0";
	screenOutMain.textContent += "0";
	screenOutBot.textContent = eval(value);
});

btn1.addEventListener("click", () => {
	initialCheck();
	value += "1";
	screenOutMain.textContent += "1";
	screenOutBot.textContent = eval(value);
});

btn2.addEventListener("click", () => {
	initialCheck();
	value += "2";
	screenOutMain.textContent += "2";
	screenOutBot.textContent = eval(value);
});

btn3.addEventListener("click", () => {
	initialCheck();
	value += "3";
	screenOutMain.textContent += "3";
	screenOutBot.textContent = eval(value);
});

btn4.addEventListener("click", () => {
	initialCheck();
	value += "4";
	screenOutMain.textContent += "4";
	screenOutBot.textContent = eval(value);
});

btn5.addEventListener("click", () => {
	initialCheck();
	value += "5";
	screenOutMain.textContent += "5";
	screenOutBot.textContent = eval(value);
});

btn6.addEventListener("click", () => {
	initialCheck();
	value += "6";
	screenOutMain.textContent += "6";
	screenOutBot.textContent = eval(value);
});

btn7.addEventListener("click", () => {
	initialCheck();
	value += "7";
	screenOutMain.textContent += "7";
	screenOutBot.textContent = eval(value);
});

btn8.addEventListener("click", () => {
	initialCheck();
	value += "8";
	screenOutMain.textContent += "8";
	screenOutBot.textContent = eval(value);
});

btn9.addEventListener("click", () => {
	initialCheck();
	value += "9";
	screenOutMain.textContent += "9";
	screenOutBot.textContent = eval(value);
});

btnDecimal.addEventListener("click", () => {
	initialCheck();
	value += ".";
	screenOutMain.textContent += ".";
	screenOutBot.textContent = eval(value);
});

btnClear.addEventListener("mousedown", handleMouseDown);

btnEqual.addEventListener("click", () => {
	screenOutMain.textContent = eval(value);
	screenOutBot.textContent = "";
});
// Still need to add this in. Need to figure out how to store operators

btnAdd.addEventListener("click", () => {
	if (value.charAt(0) !== "") {
		value += "+";
		screenOutMain.textContent += " + ";
		screenOutBot.textContent = eval(value);
	}
});

btnSub.addEventListener("click", () => {
	if (value.charAt(0) !== "") {
		value += "-";
		screenOutMain.textContent += " - ";
		screenOutBot.textContent = eval(value);
	}
});

btnDiv.addEventListener("click", () => {
	if (value.charAt(0) !== "") {
		value += "/";
		screenOutMain.textContent += " / ";
		screenOutBot.textContent = eval(value);
	}
});

btnMult.addEventListener("click", () => {
	if (value.charAt(0) !== "") {
		value += "*";
		screenOutMain.textContent += " * ";
		screenOutBot.textContent = eval(value);
	}
});

// These operator functions might not be necessary
function addition(x, y) {
	return x + y;
}

function subtraction(x, y) {
	return x - y;
}

function multiplication(x, y) {
	return x * y;
}

function division(x, y) {
	return x / y;
}

function initialCheck() {
	if (screenOutMain.textContent == "0") {
		screenOutMain.textContent = "";
	}

	if (value == undefined) {
		value[valueCounter] = "";
	}
}

function handleMouseDown() {
	isDown = true;
	isLong = false;
	target = this;
	clearTimeout(longTID);
	longTID = setTimeout(longPress.bind(this), 1500);
}

function handleMouseUp(e) {
	if (isDown && isLong) {
		isDown = false;
		e.preventDefault();
		return
	}

	if (isDown) {
		clearTimeout(longTID);
		isDown = false;
		// going to need a function which only clears the last number put in
		target = null;
	}
}

function longPress() {
	isLong = true;
	value = "";
	screenOutMain.textContent = "0";
	screenOutBot.textContent = "";
}