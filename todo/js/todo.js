//유저가 값을 입력한다.
// + 버튼누르면, 할일 추가
//delete 버튼 누르면 할일 삭제
//check버튼 누르면 할일이 끝나면서 밑줄이 간다
//1. check 버튼을 클릭하는 순간 true false
//2. true 면 끝난걸로 간주하고 밑줄그어주기
//3. false면 안끝난거 원래대로

let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("underline");
let taskList = [];
let mode = "all";
let filterList = [];
// let list = [];

addBtn.addEventListener("mousedown", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        addTask(event);
    }
});

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) {
        filter(event);
    });
}

function addTask() {
    let taskValue = taskInput.value;
    if (taskValue === "") return alert("할일을 입력해주세요");
    let task = {
        id: randomIDGenerate(),
        isComplete: false,
        taskContent: taskValue,
    };
    taskList.push(task);
    taskInput.value = "";
    render();
}

function render() {
    let resultHTML = "";
    list = [];

    if (mode === "all") {
        list = taskList;
    } else if (mode === "ongoing" || mode === "done") {
        list = filterList;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            resultHTML += ` <div class="task task-done">
            <div>${list[i].taskContent}</div>
            <div>
                <button class="checkBtn" onclick="toggleComplete('${list[i].id}')"></button> <button class="deleteBtn" onclick="deleteTask('${list[i].id}')"></button>
            </div>
        </div>`;
        } else {
            resultHTML += ` <div class="task">
        <div>${list[i].taskContent}</div>
        <div>
            <button class="checkBtn" onclick="toggleComplete('${list[i].id}')"></button> <button class="deleteBtn" onclick="deleteTask('${list[i].id}')"></button>
        </div>
    </div>`;
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
    // console.log("id:", id);
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            // switch 반대값으로 바꾸기
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    filter();
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    filter();
}
function filter(e) {
    if (e) {
        mode = e.target.id;
        underLine.style.width = e.target.offsetWidth + "px";
        underLine.style.left = e.target.offsetLeft + "px";
        underLine.style.top =
            e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
    } // 진행중 상태에서 끝남으로 표시하면 바로 사라지는 부분은 event가 없음 그래서 조건추가

    filterList = [];
    if (mode == "ongoing") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i]);
            }
        }
    } else if (mode == "done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === true) {
                filterList.push(taskList[i]);
            }
        }
    }
    render();
}
function randomIDGenerate() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
