let sonhap = parseInt(prompt("Nhập vào số nguyên bất kỳ: "));
// let sonhap = 44;
let soDV = sonhap % 10;
let soHC = sonhap / 10;

let tongSo= soDV + soHC;

// console.log(tongSo.toFixed(0));
alert("Tổng 2 ký số vừa nhập là: " + tongSo.toFixed(0))