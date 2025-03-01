// 🎨 ฟังก์ชันเปลี่ยนสีพื้นหลังปกติ
function changeColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.transition = "background 0.25s ease";
    document.body.style.backgroundColor = color;
}

// 🌈 ตัวแปรสำหรับควบคุมการเปลี่ยนสีอัตโนมัติ
let autoChangeInterval = null;

// 🚀 ฟังก์ชันเริ่ม/หยุดการเปลี่ยนสีพื้นหลังอัตโนมัติ
function toggleAutoChange() {
    const button = document.getElementById("autoChangeBtn");

    if (autoChangeInterval) {
        clearInterval(autoChangeInterval);
        autoChangeInterval = null;
        button.textContent = "Auto Change Background"; // เปลี่ยนข้อความปุ่มกลับ
        button.style.backgroundColor = "#007bff"; // กลับสีปุ่มเป็นปกติ
    } else {
        autoChangeInterval = setInterval(changeColor, 750   ); // เปลี่ยนสีทุก 1 วินาที
        button.textContent = "Stop Changing"; // เปลี่ยนข้อความปุ่ม
        button.style.backgroundColor = "#ff4757"; // เปลี่ยนสีปุ่มเป็นแดง
    }
}

// ✏️ แสดงข้อความเมื่อพิมพ์
function displayText() {
    let text = document.getElementById('textInput').value;
    document.getElementById('output').textContent = text;
}

// ✅ ตรวจสอบฟอร์ม
function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("validationMessage");

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name === "" || email === "") {
        message.textContent = "⚠️ กรุณากรอกข้อมูลให้ครบ";
        message.style.color = "#ff6b6b";
    } else if (!emailPattern.test(email)) {
        message.textContent = "⚠️ กรุณากรอกอีเมลให้ถูกต้อง";
        message.style.color = "#ff6b6b";
    } else {
        message.textContent = "✅ ข้อมูลถูกต้องแล้ว!";
        message.style.color = "#2ecc71";
    }
}
