// เปลี่ยนสีพื้นหลัง
function changeColor() {
    let color = '#'+(Math.random()*0xffffff<<0).toString(16);
    document.body.style.backgroundColor = color;
}

// Function to display text when typing
function displayText() {
    let text = document.querySelector('input[type="text"]').value;
    document.getElementById('output').textContent = text;
}

// Function to validate form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("validationMessage");

    // Email validation pattern
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (name == "" || email == "") {
        message.textContent = "กรุณากรอกข้อมูลให้ครบ";
        message.style.color = "red";
    } else if (!emailPattern.test(email)) {
        message.textContent = "กรุณากรอกอีเมลให้ถูกต้อง";
        message.style.color = "red";
    } else {
        message.textContent = "ข้อมูลถูกต้องแล้ว!";
        message.style.color = "green";
    }
}
