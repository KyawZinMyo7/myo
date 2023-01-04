var input = document.getElementById("inputtext");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function actionAfterClick() {
		if ( inputLength() > 0) {
		createListElement();
	}
}

function actionAfterKeypress(event) {
		if ( inputLength() > 0 && event.which === 13 ) {
		createListElement();
	}
}



button.addEventListener("click", actionAfterClick);

input.addEventListener("keypress", actionAfterKeypress);