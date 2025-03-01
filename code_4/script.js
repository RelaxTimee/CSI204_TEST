// Basic Algorithm (Calculate Area of Circle)
function calculateArea() {
    const PI = 3.14159;
    let radius = parseFloat(prompt("Enter the radius of the circle:"));
    if (isNaN(radius) || radius <= 0) {
        document.getElementById("areaResult").innerHTML = "❌ Invalid radius input.";
        console.log("Invalid radius input.");
    } else {
        let area = PI * radius * radius;
        document.getElementById("areaResult").innerHTML = `✅ The area of the circle is: ${area}`;
        console.log("The area of the circle is:", area);
    }
}

// Conditional Algorithm (Check Age)
function checkAge() {
    let age = parseInt(prompt("Enter your age:"));
    let result = "";

    if (isNaN(age)) {
        result = "❌ Invalid age input.";
    } else if (age < 18) {
        result = "เด็ก";
    } else if (age >= 18 && age <= 35) {
        result = "วัยรุ่น";
    } else {
        result = "ผู้ใหญ่";
    }

    document.getElementById("ageResult").innerHTML = `✅ Result: ${result}`;
    console.log("Age Check Result:", result);
}

// Loop Algorithm (For Loop Example)
function printNumbers() {
    let numbers = "";
    for (let i = 1; i <= 10; i++) {
        numbers += i + " ";
    }
    document.getElementById("loopResult").innerHTML = `✅ Numbers: ${numbers}`;
    console.log("Numbers 1 to 10:", numbers);
}

// Sorting Algorithm (Bubble Sort Example)

    function sortNumbers() {
        let numbers = [];
        for (let i = 0; i < 100; i++) {
            numbers.push(Math.floor(Math.random() * 100) + 1);
        }
        console.log("Before sorting:", numbers);
    
        // Bubble Sort Algorithm
        for (let i = 0; i < numbers.length - 1; i++) {
            for (let j = 0; j < numbers.length - 1 - i; j++) {
                if (numbers[j] > numbers[j + 1]) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]; // Swap
                }
            }
        }
    
        document.getElementById("sortResult").innerHTML = `✅ Sorted Numbers: ${numbers.join(", ")}`;
        console.log("After sorting:", numbers);
    }
    

// Recursive Algorithm (Factorial)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// ฟังก์ชันคำนวณค่าแฟกทอเรียล
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // 0! = 1 และ 1! = 1
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// ฟังก์ชันเพื่อแสดงผลลัพธ์
function showFactorial() {
    let inputNumber = parseInt(document.getElementById("factorialInput").value);
    
    if (isNaN(inputNumber) || inputNumber < 0) {
        document.getElementById("factorialResult").innerHTML = "❌ Please enter a valid positive number!";
        return;
    }

    let result = factorial(inputNumber);
    document.getElementById("factorialResult").innerHTML = `✅ Factorial of ${inputNumber} is: ${result}`;
}

// Recursive Algorithm (Fibonacci)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// Debugging & Error Handling Example (Add Numbers)
function addNumbers(a, b) {
    console.log("🔍 Debugging: a =", a, "b =", b);  // ตรวจสอบค่าตัวแปร
    debugger; // หยุดโปรแกรมชั่วคราวที่จุดนี้ เพื่อตรวจสอบใน Developer Tools
    return a + b;
}

// Error Handling Example (Divide Numbers)
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function showFibonacci() {
    let inputNumber = parseInt(document.getElementById("fibonacciInput").value);
    
    if (isNaN(inputNumber) || inputNumber < 0) {
        document.getElementById("fibonacciResult").innerHTML = "❌ Please enter a valid positive number!";
        return;
    }

    let result = fibonacci(inputNumber);
    document.getElementById("fibonacciResult").innerHTML = `✅ Fibonacci of ${inputNumber} is: ${result}`;
}

// ฟังก์ชัน Debugging Example: การหาผลบวก
function debugExample() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // ใช้ console.log() เพื่อช่วยในการดีบั๊ก
    console.log(`num1: ${num1}, num2: ${num2}`);

    let sum = num1 + num2;

    // แสดงผลลัพธ์
    document.getElementById("result").innerText = `Sum: ${sum}`;
}

// ฟังก์ชัน Error Handling Example: การหารตัวเลขพร้อม try-catch
function errorHandlingExample() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    try {
        // ตรวจสอบการหารด้วยศูนย์
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }

        let divisionResult = num1 / num2;
        document.getElementById("result").innerText = `Division: ${divisionResult}`;
    } catch (error) {
        // จัดการข้อผิดพลาดเมื่อเกิดการหารด้วยศูนย์
        document.getElementById("result").innerText = `Error: ${error.message}`;
        console.error(error); // ใช้ console.error() สำหรับข้อผิดพลาด
    }
}
