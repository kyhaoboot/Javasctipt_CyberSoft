let salary = 100000;
let dayWork = 0;

dayWork = prompt("Nhập vào số ngày làm việc:");

let salaryWork = dayWork * salary;

alert(salaryWork.toLocaleString('vi-VN') + " VND")