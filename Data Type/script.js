// 1 สร้างตัวแปรเก็บ String, Integer, Boolean และแสดงผลผ่าน Console
let name = "Team";  // String
let age = 20;       // Integer
let isStudent = true; // Boolean

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 1 ทดสอบการแปลงชนิดข้อมูล
let numStr = "10";
let numFloat = "3.14";
let numInt = 100;

console.log(parseInt(numStr));   // 10 (Integer)
console.log(parseFloat(numFloat)); // 3.14 (Float)
console.log(String(numInt));      // "100" (String)


// 2 List / Array → เพิ่ม, ลบ, แก้ไขข้อมูลในลิสต์
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Orange"); // เพิ่มข้อมูล
fruits.splice(1, 1); // ลบ "Banana" (index 1)
fruits[0] = "Grape"; // แก้ไข Apple → Grape

console.log(fruits);

// 2 Dictionary / Object → เก็บค่าข้อมูล"อ้Tom
let student = {
    name: "Tom",
    age: 20,
    grade: "A"
};

console.log(student);

// 2 Tuple & Set → ทดสอบสร้าง Tuple และใช้ Set เพื่อกำจัดค่าที่ซ้ำกัน
const tuple = ["Hello", 123, true]; // คล้าย Tuple
console.log(tuple);


// 3 จัดการ JSON Data
let jsonData = '{"name": "Alice", "age": 25, "city": "Bangkok"}';

// แปลง JSON เป็น Object
let user = JSON.parse(jsonData);
console.log(user.name); // Alice

// แปลง Object เป็น JSON
let newJson = JSON.stringify(user);
console.log(newJson);

