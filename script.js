let winningBtn = Math.floor((Math.random() * 3) + 1);
let resetBtnCount = 0;

function checkBtn(btn) {
	if (btn === winningBtn) {
		document.getElementById("output").innerHTML = "BOOM! You win :)";
		if (resetBtnCount === 0) {
			resetGame();
		}
	} else {
		document.getElementById("output").innerHTML = "Nope, try again -_-";
	}
}

function resetGame() {
	// creates reset button and text
	let text = document.createElement("p");
	text.appendChild(document.createTextNode("Click button below to reset game and play again"));
	document.body.appendChild(text);

	let resetBtn = document.createElement("button");
	resetBtn.appendChild(document.createTextNode("Reset Game"));
	document.body.appendChild(resetBtn);
	resetBtn.addEventListener("click", function() {
		location.reload();
	});
	++resetBtnCount;
}