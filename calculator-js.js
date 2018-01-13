const keys = Array.from(document.querySelectorAll(".numeric")); // part of the keydown experiment

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

const clickEvent = new MouseEvent("click", { // part of the keydown experiment
	view: window,
	bubbles: true,
	cancelable: true
});

window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("keydown", pressKey); // keydown experiment

keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // keydown experiment

function pressKey(e) { // keydown experiment
	const key = document.querySelector(`button[data-key="${e.keyCode}"]`);

	if (key == 48) {
		document.getElementById("btn0").click(y);
	} else if (key == 49) {
		document.getElementById("btn1").click(x);
	}

	key.classList.add("pressed");
}

function removeTransition(e) { // keydown experiment
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("pressed");
}

btn0.addEventListener("click", () => {
	initialCheck();
	if (value[valueCounter] !== "") {
		value[valueCounter] += "0";
		screenOutMain.textContent += "0";
		screenOutBot.textContent = botScreenFunc();		
	}
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
	}
});

btnClear.addEventListener("mousedown", handleMouseDown);

btnEqual.addEventListener("click", () => {
	screenOutMain.textContent = eval(value.join(""));
	screenOutBot.textContent = "";
	value.length = 0;
	valueCounter = 0;
	value[valueCounter] = "";
});

btnAdd.addEventListener("click", () => {
	if (valueCounter !== "" && value[valueCounter] !== undefined && value[valueCounter] !== "."
		&& value[valueCounter] !== "+" && value[valueCounter] !== "-"
		&& value[valueCounter] !== "/" && value[valueCounter] !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "+";
		screenOutMain.textContent += " + ";
		++valueCounter;		
	}
});

btnSub.addEventListener("click", () => {
	if (valueCounter !== "" && value[valueCounter] !== undefined && value[valueCounter] !== "."
		&& value[valueCounter] !== "+" && value[valueCounter] !== "-"
		&& value[valueCounter] !== "/" && value[valueCounter] !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "-";
		screenOutMain.textContent += " - ";
		++valueCounter;		
	}
});

btnDiv.addEventListener("click", () => {
	if (valueCounter !== "" && value[valueCounter] !== undefined && value[valueCounter] !== "."
		&& value[valueCounter] !== "+" && value[valueCounter] !== "-"
		&& value[valueCounter] !== "/" && value[valueCounter] !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "/";
		screenOutMain.textContent += " / ";
		++valueCounter;	
	}
});

btnMult.addEventListener("click", () => {
	if (valueCounter !== "" && value[valueCounter] !== undefined && value[valueCounter] !== "."
		&& value[valueCounter] !== "+" && value[valueCounter] !== "-"
		&& value[valueCounter] !== "/" && value[valueCounter] !== "*") {
		++valueCounter;
		value[valueCounter] = "";
		value[valueCounter] += "*";
		screenOutMain.textContent += " * ";
		++valueCounter;	
	}
});

function initialCheck() {
	if (value[valueCounter] == undefined) {
		value[valueCounter] = "";
	}

	if (valueCounter < 0) {
		valueCounter = 0;
	}
}

// Need to figure out a way to put a custom message if NaN
function botScreenFunc() {
	let x = eval(value.join(""));

	if (x == NaN) {
		return "Error";
	} else if (x !== NaN) {
		return eval(value.join(""));
	}
}

function quickClear() {
	if (value[valueCounter] !== "") {
		value[valueCounter] = value[valueCounter].slice(0, -1);
		screenMainQC();
		screenOutBot.textContent = eval(value.join(""));	
	} else if (value[valueCounter] == "") {
		--valueCounter;
		value[valueCounter] = value[valueCounter].slice(0, -1);
		screenMainQC()
		screenOutBot.textContent = eval(value.join(""));
	}

}

function screenMainQC() {
	if (screenOutMain.innerHTML.slice(-1) == " ") {
		screenOutMain.textContent = screenOutMain.textContent.slice(0, -3);
	} else {
		screenOutMain.textContent = screenOutMain.textContent.slice(0, -1);
	}
}

function handleMouseDown() {
	isDown = true;
	isLong = false;
	target = this;
	clearTimeout(longTID);
	longTID = setTimeout(longPress.bind(this), 1000);
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
		quickClear();
		target = null;
	}
}

function longPress() {
	isLong = true;
	value.length = 0;
	valueCounter = 0;
	value[valueCounter] = "";
	screenOutMain.textContent = "";
	screenOutBot.textContent = "";
}
