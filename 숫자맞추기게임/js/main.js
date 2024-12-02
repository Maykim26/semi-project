// 랜덤번호 지정

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
    let userValue = userInput.value;

    if (userInput < 1 || userValue > 100) {
        resultArea.textContent = "1과 100사이 숫자를 입력해주세요.";
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다.";
        return;
    }

    chances--;
    chanceArea.textContent = `남은기회: ${chances} 번`;
    console.log("chance", chances);

    // console.log(userValue);
    if (userValue < computerNum) {
        resultArea.textContent = "up";
    } else if (userValue > computerNum) {
        resultArea.textContent = "down";
    } else {
        resultArea.textContent = "맞춤";
        gameOver = true;
    }
    history.push(userValue);
    console.log(history);
    if (chances < 1) {
        gameOver = true;
    }

    if (gameOver == true) {
        playBtn.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultArea.textContent = "결과값이 여기나옴";
}
pickRandomNum();
