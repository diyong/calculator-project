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

let value = [];
let valueCounter = 0; 

let isDown = false,
	isLong = false,
	target,
	longTID;

window.addEventListener("mouseup", handleMouseUp);

btn0.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "0";
	screenOutMain.textContent += "0";
	screenOutBot.textContent = botScreenFunc();
});

btn1.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "1";
	screenOutMain.textContent += "1";
	screenOutBot.textContent = botScreenFunc();
});

btn2.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "2";
	screenOutMain.textContent += "2";
	screenOutBot.textContent = botScreenFunc();
});

btn3.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "3";
	screenOutMain.textContent += "3";
	screenOutBot.textContent = botScreenFunc();
});

btn4.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "4";
	screenOutMain.textContent += "4";
	screenOutBot.textContent = botScreenFunc();
});

btn5.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "5";
	screenOutMain.textContent += "5";
	screenOutBot.textContent = botScreenFunc();
});

btn6.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "6";
	screenOutMain.textContent += "6";
	screenOutBot.textContent = botScreenFunc();
});

btn7.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "7";
	screenOutMain.textContent += "7";
	screenOutBot.textContent = botScreenFunc();
});

btn8.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "8";
	screenOutMain.textContent += "8";
	screenOutBot.textContent = botScreenFunc();
});

btn9.addEventListener("click", () => {
	initialCheck();
	value[valueCounter] += "9";
	screenOutMain.textContent += "9";
	screenOutBot.textContent = botScreenFunc();
});

btnDecimal.addEventListener("click", () => {
	initialCheck();
	if (value[valueCounter].toString().match(/\W/) == null) {
		value[valueCounter] += ".";
		screenOutMain.textContent += ".";
		screenOutBot.textContent = eval(value.join(""));
	}
});

btnClear.addEventListener("mousedown", handleMouseDown);

btnEqual.addEventListener("click", () => {
	screenOutMain.textContent = eval(value.join(""));
	screenOutBot.textContent = "";
});

btnAdd.addEventListener("click", () => {
	if (value[valueCounter].charAt(0) !== "" || value[valueCounter].charAt(0) !== "."
		&& value[valueCounter-1].charAt(0) !== "+" 
		&& value[valueCounter-1].charAt(0) !== "-" 
		&& value[valueCounter-1].charAt(0) !== "/" 
		&& value[valueCounter-1].charAt(0) !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "+";
		screenOutMain.textContent += " + ";
		++valueCounter;
		value[valueCounter] = "";
	}
});

btnSub.addEventListener("click", () => {
	if (value[valueCounter].charAt(0) !== "" || value[valueCounter].charAt(0) !== "."
		&& value[valueCounter-1].charAt(0) !== "+" 
		&& value[valueCounter-1].charAt(0) !== "-" 
		&& value[valueCounter-1].charAt(0) !== "/" 
		&& value[valueCounter-1].charAt(0) !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "-";
		screenOutMain.textContent += " - ";
		++valueCounter;
		value[valueCounter] = "";
	}
});

btnDiv.addEventListener("click", () => {
	if (value[valueCounter].charAt(0) !== "" || value[valueCounter].charAt(0) !== "."
		&& value[valueCounter-1].charAt(0) !== "+" 
		&& value[valueCounter-1].charAt(0) !== "-" 
		&& value[valueCounter-1].charAt(0) !== "/" 
		&& value[valueCounter-1].charAt(0) !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "/";
		screenOutMain.textContent += " / ";
		++valueCounter;
		value[valueCounter] = "";
	}
});

btnMult.addEventListener("click", () => {
	if (value[valueCounter].charAt(0) !== "" || value[valueCounter].charAt(0) !== "."
		&& value[valueCounter-1].charAt(0) !== "+" 
		&& value[valueCounter-1].charAt(0) !== "-" 
		&& value[valueCounter-1].charAt(0) !== "/" 
		&& value[valueCounter-1].charAt(0) !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "*";
		screenOutMain.textContent += " * ";
		++valueCounter;
		value[valueCounter] = "";
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

	if (value[valueCounter] == undefined) {
		value[valueCounter] = "";
	}
}

function botScreenFunc() {
	return eval(value.join(""));
}

function handleMouseDown() {
	isDown = true;
	isLong = false;
	target = this;
	clearTimeout(longTID);
	longTID = setTimeout(longPress.bind(this), 1250);
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
	value.length = 0;
	valueCounter = 0;
	value[valueCounter] = "";
	screenOutMain.textContent = "0";
	screenOutBot.textContent = "";
}