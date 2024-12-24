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
	playBtn.disabled = false; // 버튼 활성화
});

userInput.addEventListener("input", function () {
	// 숫자가 입력되지 않았을 때 버튼을 비활성화
	if (userInput.value.trim() === "") {
		playBtn.disabled = true;
	} else {
		playBtn.disabled = false;
	}
});

function pickRandomNum() {
	computerNum = Math.floor(Math.random() * 100 + 1);
	console.log("정답", computerNum);
}

function play() {
	let userValue = parseInt(userInput.value);

	// 사용자 입력값이 숫자가 아닌 경우 처리
	if (isNaN(userValue)) {
		resultArea.textContent = "숫자를 입력해주세요.🔄";
		return;
	}

	if (userValue < 1 || userValue > 100) {
		resultArea.textContent = "1과 100사이 숫자를 입력해주세요.🚀";
		return;
	}

	if (history.includes(userValue)) {
		resultArea.textContent = "이미 입력한 숫자입니다.🔄";
		return;
	}

	chances--;
	chanceArea.textContent = `남은기회: ${chances} 번`;

	if (userValue < computerNum) {
		resultArea.textContent = "💥UP! 더 큰 숫자를 시도해보세요.💥";
	} else if (userValue > computerNum) {
		resultArea.textContent =
			"💥DOWN! 더 작은 숫자를 시도해보세요.💥";
	} else {
		resultArea.textContent = "🎉축하합니다! 맞추셨어요!🎉";
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
	resultArea.textContent = "결과가 나온다.";
	chanceArea.textContent = "남은 찬스 : 5";
	playBtn.disabled = false;
}

pickRandomNum();
