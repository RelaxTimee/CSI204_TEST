// --- To-Do List ---
const addButton = document.getElementById('add-btn');
const inputField = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const itemsPerPageSelect = document.getElementById('items-per-page');

let todos = [];
let currentPage = 1;
let itemsPerPage = parseInt(itemsPerPageSelect.value);

// ฟังก์ชันเพิ่ม To-Do
function addTodo() {
    const todoText = inputField.value.trim();
    if (todoText !== "") {
        todos.push(todoText);
        inputField.value = "";
        saveTodos();
        renderTodos();
    }
}

// ฟังก์ชันบันทึก To-Do ลง LocalStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// ฟังก์ชันโหลด To-Do จาก LocalStorage
function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
        todos = storedTodos;
    }
    renderTodos();
}

// ฟังก์ชันแสดงรายการ To-Do
function renderTodos() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const todosToShow = todos.slice(startIndex, endIndex);
    
    todoList.innerHTML = "";
    todosToShow.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo;
        li.addEventListener('click', () => {
            const index = todos.indexOf(todo);
            if (index > -1) {
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            }
        });
        todoList.appendChild(li);
    });

    // ปรับสถานะของปุ่ม Next/Previous
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * itemsPerPage >= todos.length;
}

// ฟังก์ชันสำหรับการเปลี่ยนจำนวนรายการที่แสดง
itemsPerPageSelect.addEventListener('change', () => {
    itemsPerPage = parseInt(itemsPerPageSelect.value);
    currentPage = 1; // รีเซ็ตหน้าปัจจุบันเมื่อเปลี่ยนจำนวนรายการ
    renderTodos();
});

// ฟังก์ชันสำหรับการไปหน้าถัดไป
nextButton.addEventListener('click', () => {
    if (currentPage * itemsPerPage < todos.length) {
        currentPage++;
        renderTodos();
    }
});

// ฟังก์ชันสำหรับการไปหน้าก่อนหน้า
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTodos();
    }
});

// เรียกใช้เมื่อหน้าโหลด
addButton.addEventListener('click', addTodo);
loadTodos();

// --- Grade Calculator ---
document.getElementById('grade-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    const score4 = parseFloat(document.getElementById('score4').value);
    const score5 = parseFloat(document.getElementById('score5').value);

    const totalCredits = 15; // 5 subjects x 3 credits each
    const totalScore = (score1 * 3) + (score2 * 3) + (score3 * 3) + (score4 * 3) + (score5 * 3);
    const gpa = totalScore / totalCredits;

    document.getElementById('gpa-result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
});

// --- API Fetching ---
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const userDataDiv = document.getElementById('user-data');
        data.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Address: ${user.address.street}, ${user.address.city}</p>
            `;
            userDataDiv.appendChild(userDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

// --- Lottery Generator ---
const generateButton = document.getElementById('generate-btn');
const checkButton = document.getElementById('check-btn');
const lotteryNumberText = document.getElementById('lottery-number');
const resultText = document.getElementById('result');
let lotteryNumber;

function generateLotteryNumber() {
    lotteryNumber = Math.floor(Math.random() * 1000000);
    lotteryNumberText.textContent = `Lottery Number: ${lotteryNumber}`;
}

function checkGuess() {
    const userInput = document.getElementById('user-input').value;
    if (parseInt(userInput) === lotteryNumber) {
        resultText.textContent = 'Congratulations! You guessed correctly.';
    } else {
        resultText.textContent = 'Sorry, try again!';
    }
}

generateButton.addEventListener('click', generateLotteryNumber);
checkButton.addEventListener('click', checkGuess);
