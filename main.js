const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
    tabButtons.forEach((btn) => {
        btn.classList.remove(
        "text-blue-600",
        "border-blue-600",
        "font-semibold"
        );
        btn.classList.add("text-gray-600");
    });
    tabPanels.forEach((panel) => panel.classList.add("hidden"));

    button.classList.add(
        "text-blue-600",
        "border-b-2",
        "border-blue-600",
        "font-semibold"
    );
    button.classList.remove("text-gray-600");
    tabPanels[index].classList.remove("hidden");
    });
 });



// *******************
// Bài tập 1
document.getElementById('checkpoint').onclick = function(e){
    e.preventDefault();
    // console.log(123);
    const coreGoal= document.getElementById('coreGoal').value * 1;
    const core1 = document.getElementById('core1').value * 1;
    const core2 = document.getElementById('core2').value * 1;
    const core3 = document.getElementById('core3').value * 1;
    const coreLocation = document.getElementById('coreLocation').value * 1;
    const coreObject = document.getElementById('coreObject').value * 1;
    console.log(coreGoal,core1,core2,core3,coreLocation,coreObject);
    const coreTotal = core1 + core2 + core3 + coreLocation + coreObject;
    // console.log(coreTotal);
    const showResult = document.getElementById('showResult');
    let result;
    
    if(core1 === 0 || core2 === 0 || core3 === 0){
        result = `<h1 class="text-red-600">Bạn đã Rớt. Do có môn điểm 0</h1>`;
            showResult.innerHTML = result;
    }else{
        if(coreTotal >= coreGoal ){
            result = `<h1 class="text-green-600">Bạn đã đậu. Tổng điểm: ${coreTotal}</h1>`;
            showResult.innerHTML = result;
        }else{
            result = `<h1 class="text-red-600">Bạn đã Rớt. Tổng điểm: ${coreTotal}</h1>`;
            showResult.innerHTML = result;
        }
    }       
}

// ********************
// Bài tập 2

document.getElementById("checkkw").onclick = function(e){
    e.preventDefault();
    let money = 0;
    let result;
    const kwNum = document.getElementById('kwNum').value *1;
    const nameKw = document.getElementById('nameKw').value;
    // console.log(nameKw);
    const showMoney = document.getElementById('showMoney');
    if(!isNaN(kwNum) && kwNum >0){
        if(kwNum <= 50){
                money = kwNum * 500;
                result = `<h1 class="text-green-600">Họ tên ${nameKw} - Tổng tiền: ${money.toLocaleString('vi-VN')} đồng</h1>`;
                showMoney.innerHTML = result;
            }else if(kwNum <= 100){
                money = (50 * 500) + ((kwNum - 50) * 650);
                result = `<h1 class="text-green-600">Họ tên ${nameKw} - Tổng tiền: ${money.toLocaleString('vi-VN')} đồng</h1>`;
                showMoney.innerHTML = result;
            }
            else if(kwNum <= 200){
                money = (50 * 500) + (50 * 650) + ((kwNum - 100) * 850);
                result = `<h1 class="text-green-600">Họ tên ${nameKw} - Tổng tiền: ${money.toLocaleString('vi-VN')} đồng</h1>`;
                showMoney.innerHTML = result;
            }
            else if(kwNum <= 350){
                money = (50 * 500) + (50 * 650) + (100 * 850) + ((kwNum - 200) * 1100);
                result = `<h1 class="text-green-600">Họ tên ${nameKw} - Tổng tiền: ${money.toLocaleString('vi-VN')} đồng</h1>`;
                showMoney.innerHTML = result;
            }
            else if(kwNum > 350){
                money = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((kwNum - 350) * 1300);
                result = `<h1 class="text-green-600">Họ tên ${nameKw} - Tổng tiền: ${money.toLocaleString('vi-VN')} đồng</h1>`;
                showMoney.innerHTML = result;
            }
    }else{
         result = `<h1 class="text-red-600">Số Kw phải lớn hơn 0</h1>`;
                showMoney.innerHTML = result;
    }
   

}


// ***************
// Bài tập 3

document.getElementById("showTax").onclick = function(e){
    e.preventDefault();
    const nameBT3 = document.getElementById('nameBT3').value;
    const moneyYear = document.getElementById('moneyYear').value * 1;
    const perTax = document.getElementById('perTax').value * 1;
    const showResult3 = document.getElementById('showResult3');

    let totalSalary = 0;
    totalSalary = moneyYear - 4000000 - (perTax * 1600000);
    let tax = 0;
    
    // console.log(nameBT3, moneyYear, perTax, tax, totalSalary)
    
    if (totalSalary <= 0) {
    showResult3.innerHTML  = `<h1 class="text-blue-600">Họ tên ${nameBT3} - Không phải nộp thuế</h1>`;
    } else if (totalSalary <= 60000000) {
        tax = totalSalary * 0.05;
    } else if (totalSalary <= 120000000) {
        tax = totalSalary * 0.10;
    } else if (totalSalary <= 210000000) {
        tax = totalSalary * 0.15;
    } else if (totalSalary <= 384000000) {
        tax = totalSalary * 0.20;
    } else if (totalSalary <= 624000000) {
        tax = totalSalary * 0.25;
    } else if (totalSalary <= 960000000) {
        tax = totalSalary * 0.30;
    } else {
        tax = totalSalary * 0.35;
    }

    if (totalSalary > 0) {
        showResult3.innerHTML  = `<h1 class="text-green-600">Họ tên ${nameBT3} - Tổng tiền thuế: ${tax.toLocaleString('vi-VN')} đồng</h1>`;
    }

    showResult3.innerHTML = `<h1 class="text-green-600">Họ tên ${nameBT3} - Tổng tiền thuế: ${tax.toLocaleString('vi-VN')} VND</h1>`;
    
}


// *******************
// Bài tập 4
const numCon = document.getElementById("numCon");
const idCustome = document.getElementById("idCustome");
const numConnect = document.getElementById("numConnect");

idCustome.onchange = function(){
    if(idCustome.value === "DoanhNghiep"){
       numCon.style.display  = "block";
       numConnect.disabled = false; 
    }else{
        numCon.style.display = "none";
        numConnect.disabled = true; 
    }
}


document.getElementById("MoneyChanel").onclick = function(e){
    e.preventDefault();
    
    const idCustome = document.getElementById("idCustome").value;
    const numChanelHigh = document.getElementById("numChanelHigh").value * 1;
    const numConnect = document.getElementById("numConnect").value *1;
    const showMoneyChanel = document.getElementById("showMoneyChanel");

   
}