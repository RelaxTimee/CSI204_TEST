import json

json_string = '{"name": "Team", "age": 22, "city": "Bangkok"}'
data = json.loads(json_string)  # json.loads() → แปลง JSON String เป็น Python Object

print("✅ JSON ที่ถูกแปลงเป็น Python Object:")
print(data)
print(f"👤 ชื่อ: {data['name']}, อายุ: {data['age']}, เมือง: {data['city']}")

python_dict = {"name": "Team", "age": 22, "city": "Bangkok"}
json_output = json.dumps(python_dict, indent=4)  # json.dumps() → แปลง Python Object เป็น JSON String

print("\n✅ Python Object ที่ถูกแปลงเป็น JSON String:")
print(json_output)
