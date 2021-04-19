
function displayNum(n){
	cal.digit.value += n;
	play="s.play()";
}

function numBack(){
	cal.digit.value = cal.digit.value.slice(0,-1);
}
function numClear(){
	cal.digit.value = "";
}
function squerRoot(){
	cal.digit.value = Math.sqrt(cal.digit.value);
}

/*-------Audio Sound--------*/
var s = new Audio();
s.src = "media/soft.m4a";

/*----Mode Changing---*/
function getURL(){
	window.location.assign("Binary/index.html")
}

/*---------------------
Authorized::Forhad Reza
-----------*/