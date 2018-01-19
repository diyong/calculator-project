const keys = Array.from(document.querySelectorAll(".numeric")); 

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
let equalValue = "";

let isDown = false,
	isLong = false,
	target,
	longTID;

window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("keydown", pressKey); 

keys.forEach(key => key.addEventListener("transitionend", removeTransition)); 

function pressKey(e) { 
	const key = document.querySelector(`button[data-key="${e.keyCode}"]`);

	if (e.keyCode == 96) {
		document.getElementById("btn0").click();
	} else if (e.keyCode == 97) {
		document.getElementById("btn1").click();
	} else if (e.keyCode == 98) {
		document.getElementById("btn2").click();
	} else if (e.keyCode == 99) {
		document.getElementById("btn3").click();
	} else if (e.keyCode == 100) {
		document.getElementById("btn4").click();
	} else if (e.keyCode == 101) {
		document.getElementById("btn5").click();
	} else if (e.keyCode == 102) {
		document.getElementById("btn6").click();
	} else if (e.keyCode == 103) {
		document.getElementById("btn7").click();
	} else if (e.keyCode == 104) {
		document.getElementById("btn8").click();
	} else if (e.keyCode == 105) {
		document.getElementById("btn9").click();
	} else if (e.keyCode == 110) {
		document.getElementById("btnDecimal").click();
	} else if (e.keyCode == 57) {
		document.getElementById("btn9").click();
	} else if (e.keyCode == 13) {
		document.getElementById("btnEqual").click();
	} else if (e.keyCode == 107) {
		document.getElementById("btnAdd").click();
	} else if (e.keyCode == 109) {
		document.getElementById("btnSub").click();
	} else if (e.keyCode == 106) {
		document.getElementById("btnMult").click();
	} else if (e.keyCode == 111) {
		document.getElementById("btnDiv").click();
	} else if (e.keyCode == 46) {
		quickClear();
	}

	key.classList.add("pressed");
}

function removeTransition(e) { 
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
	equalValue = botScreenFunc();
	screenOutMain.textContent = equalValue;
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

	if (screenOutMain.textContent == equalValue) {
		screenOutMain.textContent = "";
		equalValue = "";
	}
}

function botScreenFunc() {
	let x = eval(value.join(""));

	if (isNaN(x)) {
		return "Error";
	} else {
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
