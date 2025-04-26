let usdprice = parseFloat(prompt("Nhập số tiền USD cần quy đổi: "));
let vnpirce = 23.500;
// usdprice = parseFloat(prompt("Nhập số tiền USD cần quy đổi: "));
let changeMoney = parseFloat(vnpirce * usdprice);
// console.log(typeof changeMoney);
// console.log(changeMoney.toFixed(3));
// console.log(typeof vnpirce);
alert(changeMoney.toFixed(3) + " VND")
// alert(changeMoney)