// ================================
// 🔹 To-Do List
// ================================
let todos = [];
let currentPage = 1;
const itemsPerPageSelect = document.getElementById("items-per-page");
let itemsPerPage = parseInt(itemsPerPageSelect.value);

// 🔸 DOM Elements
const inputField = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const statusFilter = document.getElementById("status-filter");

// 🔸 เพิ่ม To-Do
function addTodo() {
    const todoText = inputField.value.trim();
    if (todoText !== "") {
        todos.push({ text: todoText, status: "todo" }); // ค่าเริ่มต้นเป็น "todo"
        inputField.value = "";
        saveTodos();
        renderTodos();
    }
}

// 🔸 บันทึก To-Do ลง LocalStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// 🔸 โหลด To-Do จาก LocalStorage
function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
        todos = storedTodos;
    }
    renderTodos();
}

// 🔸 แสดง To-Do
function renderTodos() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 🔹 กรองรายการตามสถานะ
    const filteredTodos = todos.filter(todo => 
        statusFilter.value === "all" || todo.status === statusFilter.value
    );
    const todosToShow = filteredTodos.slice(startIndex, endIndex);

    todoList.innerHTML = "";

    todosToShow.forEach(todo => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = todo.text;

        // 🔹 Dropdown เปลี่ยนสถานะ
        const select = document.createElement("select");
        ["todo", "in-progress", "done"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status.replace("-", " ");
            if (todo.status === status) option.selected = true;
            select.appendChild(option);
        });

        select.addEventListener("change", () => {
            todo.status = select.value;
            saveTodos();
            renderTodos();
        });

        //  คลิกเพื่อลบ To-Do
        span.addEventListener("click", () => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            }
        });

        li.appendChild(span);
        li.appendChild(select);
        todoList.appendChild(li);
    });

    // 🔹 ปรับปุ่ม Next/Previous
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= filteredTodos.length;
}

// 🔸 Event Listeners
statusFilter.addEventListener("change", () => {
    currentPage = 1;
    renderTodos();
});
addButton.addEventListener("click", addTodo);
itemsPerPageSelect.addEventListener("change", () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value);
    currentPage = 1;
    renderTodos();
});
nextButton.addEventListener("click", () => {
    if (currentPage * itemsPerPage < todos.length) {
        currentPage++;
        renderTodos();
    }
});
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTodos();
    }
});

// 🔸 โหลด To-Do เมื่อหน้าเว็บโหลด
loadTodos();


// ================================
// 🔹 Grade Calculator
// ================================
document.getElementById("grade-form").addEventListener("submit", function(event) {
    event.preventDefault();

    function getGrade(score) {
        if (score >= 80) return { grade: "A", point: 4.0 };
        if (score >= 75) return { grade: "B+", point: 3.5 };
        if (score >= 70) return { grade: "B", point: 3.0 };
        if (score >= 65) return { grade: "C+", point: 2.5 };
        if (score >= 60) return { grade: "C", point: 2.0 };
        if (score >= 55) return { grade: "D+", point: 1.5 };
        if (score >= 50) return { grade: "D", point: 1.0 };
        return { grade: "F", point: 0.0 };
    }

    const subjects = [
        { id: "score1", name: "CSI101" },
        { id: "score2", name: "CSI102" },
        { id: "score3", name: "CSI203" },
        { id: "score4", name: "CSI204" },
        { id: "score5", name: "CSI305" }
    ];

    let totalCredits = 15;
    let totalScore = 0;
    let resultsHTML = "<h3>Grade Results:</h3><ul>";

    subjects.forEach(subject => {
        let score = parseFloat(document.getElementById(subject.id).value) || 0;
        let { grade, point } = getGrade(score);
        totalScore += point * 3;
        resultsHTML += `<li>${subject.name}: ${score} - Grade: <strong>${grade}</strong></li>`;
    });

    const gpa = totalScore / totalCredits;
    resultsHTML += `</ul><h3>Your GPA is: <strong>${gpa.toFixed(2)}</strong></h3>`;
    document.getElementById("gpa-result").innerHTML = resultsHTML;
});


// ================================
// 🔹 API Fetching
// ================================
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const userDataDiv = document.getElementById("user-data");
        data.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.innerHTML = `
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>
            `;
            userDataDiv.appendChild(userDiv);
        });
    })
    .catch(error => console.error("Error fetching data:", error));


// ================================
// 🔹 Lottery Generator
// ================================
const generateButton = document.getElementById("generate-btn");
const checkButton = document.getElementById("check-btn");
const lotteryNumberText = document.getElementById("lottery-number");
const resultText = document.getElementById("result");
let lotteryNumber;

function generateLotteryNumber() {
    lotteryNumber = Math.floor(Math.random() * 1000000);
    lotteryNumberText.textContent = `Lottery Number: ${lotteryNumber}`;
}

function checkGuess() {
    const userInput = document.getElementById("user-input").value;
    if (parseInt(userInput) === lotteryNumber) {
        resultText.textContent = "Congratulations! You guessed correctly.";
    } else {
        resultText.textContent = "Sorry, try again!";
    }
}

generateButton.addEventListener("click", generateLotteryNumber);
checkButton.addEventListener("click", checkGuess);
