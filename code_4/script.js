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
    for (let i = 0; i < 5; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("Before sorting:", numbers);
    
    numbers.sort((a, b) => a - b);
    
    document.getElementById("sortResult").innerHTML = `✅ Sorted Numbers: ${numbers.join(", ")}`;
    console.log("After sorting:", numbers);
}

// Recursive Algorithm (Factorial)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function showFactorial() {
    let result = factorial(5);
    document.getElementById("factorialResult").innerHTML = `✅ Factorial of 5 is: ${result}`;
    console.log("Factorial of 5:", result);
}

// Recursive Algorithm (Fibonacci)
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function showFibonacci() {
    let result = fibonacci(6);
    document.getElementById("fibonacciResult").innerHTML = `✅ Fibonacci of 6 is: ${result}`;
    console.log("Fibonacci of 6:", result);
}

// Debugging & Error Handling Example (Add Numbers)
function addNumbers(a, b) {
    console.log("🔍 Debugging: a =", a, "b =", b);  // ตรวจสอบค่าตัวแปร
    debugger; // หยุดโปรแกรมชั่วคราวที่จุดนี้ เพื่อตรวจสอบใน Developer Tools
    return a + b;
}

// Error Handling Example (Divide Numbers)
function divideNumbers(a, b) {
    try {
        console.log(`Dividing: ${a} / ${b}`);
        if (b === 0) {
            throw new Error("❌ Cannot divide by zero!");
        }
        let result = a / b;
        console.log("✅ Result:", result);
        return result;
    } catch (error) {
        console.error("⚠️ Error:", error.message);
        alert(error.message);
    }
}

function debugExample() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    
    debugger; // ใช้ Debugger หยุดเพื่อตรวจสอบค่า
    console.log("a =", a, "b =", b);

    let sum = a + b;
    document.getElementById("result").innerText = "Sum: " + sum;
    console.log("Sum:", sum);
}

function errorHandlingExample() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    try {
        if (b === 0) throw new Error("Cannot divide by zero!");
        let result = a / b;
        document.getElementById("result").innerText = "Division: " + result;
        console.log("Division:", result);
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error.message;
        console.error("Error:", error.message);
    }
}
