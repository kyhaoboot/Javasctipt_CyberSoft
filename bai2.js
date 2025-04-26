let number1 = 0
let number2 = 0
let number3 = 0
let number4 = 0
let number5 = 0
number1 = Number.parseFloat(prompt("Nhập vào số thứ 1: "));
number2 = Number.parseFloat(prompt("Nhập vào số thứ 2: "));
number3 = Number.parseFloat(prompt("Nhập vào số thứ 3: "));
number4 = Number.parseFloat(prompt("Nhập vào số thứ 4: "));
number5 = Number.parseFloat(prompt("Nhập vào số thứ 5: "));

let numTotal = number1 + number2 + number3 + number4 + number5;
let avg = numTotal / 5;

alert("Giá Trị Trung Bình Là " + avg)