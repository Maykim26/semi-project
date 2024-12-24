let computerNum = 0;
let playBtn = document.getElementById("playBtn");
let userInput = document.getElementById("userInput");
let resultArea = document.getElementById("resultArea");
let resetBtn = document.getElementById("resetBtn");
let chanceArea = document.getElementById("chanceArea");
let chances = 5;
let gameOver = false;
let history = [];

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

userInput.addEventListener("focus", function () {
	userInput.value = "";
});

function pickRandomNum() {
	computerNum = Math.floor(Math.random() * 100 + 1);
	console.log("정답", computerNum);
}

function play() {
	let userValue = parseInt(userInput.value);

	if (userValue < 1 || userValue > 100) {
		resultArea.textContent = "1과 100사이 숫자를 입력해주세요.";
		return;
	}

	if (history.includes(userValue)) {
		resultArea.textContent = "이미 입력한 숫자입니다.";
		return;
	}

	chances--;
	chanceArea.textContent = `남은기회: ${chances} 번`;

	if (userValue < computerNum) {
		resultArea.textContent = "UP! 더 큰 숫자를 시도해보세요.";
	} else if (userValue > computerNum) {
		resultArea.textContent = "DOWN! 더 작은 숫자를 시도해보세요.";
	} else {
		resultArea.textContent = "축하합니다! 맞추셨어요!";
		gameOver = true;
	}

	history.push(userValue);

	if (chances < 1) {
		gameOver = true;
		resultArea.textContent =
			"게임 오버! 기회를 다 썼습니다. 정답은 " +
			computerNum +
			"였습니다.";
	}

	if (gameOver) {
		playBtn.disabled = true;
	}
}

function reset() {
	userInput.value = "";
	chances = 5;
	gameOver = false;
	history = [];
	pickRandomNum();
	resultArea.textContent = "결과가 나온당";
	chanceArea.textContent = "남은 찬스 : 5";
	playBtn.disabled = false;
}

pickRandomNum();
