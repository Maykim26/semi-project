let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let tabs = document.querySelectorAll(".task-tabs div");
let underLine = document.getElementById("underline");
let taskList = [];
let mode = "all";
let filterList = [];

addBtn.addEventListener("mousedown", addTask);
taskInput.addEventListener("keydown", function (event) {
	if (event.keyCode === 13) addTask(event);
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
	let list = mode === "all" ? taskList : filterList;

	for (let i = 0; i < list.length; i++) {
		const task = list[i];
		resultHTML += `
            <div class="task ${task.isComplete ? "task-done" : ""}">
                <div>${task.taskContent}</div>
                <div>
                    <button class="checkBtn" onclick="toggleComplete('${
				task.id
			}')"></button>
                    <button class="deleteBtn" onclick="deleteTask('${
				task.id
			}')"></button>
                </div>
            </div>`;
	}

	document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
	const task = taskList.find((task) => task.id === id);
	task.isComplete = !task.isComplete;
	filter();
}

function deleteTask(id) {
	taskList = taskList.filter((task) => task.id !== id);
	filter();
}

function filter(e) {
	if (e) {
		mode = e.target.id;
		underLine.style.width = `${e.target.offsetWidth}px`;
		underLine.style.left = `${e.target.offsetLeft}px`;
		underLine.style.top = `${
			e.target.offsetTop + e.target.offsetHeight - 4
		}px`;
	}

	filterList = taskList.filter((task) =>
		mode === "ongoing" ? !task.isComplete : task.isComplete
	);
	render();
}

function randomIDGenerate() {
	return "_" + Math.random().toString(36).substr(2, 9);
}
