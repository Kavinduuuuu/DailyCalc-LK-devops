let display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function press(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}


function take_home_salary() {
    window.location = "take_home_salary.php";
}

function overtime_payment() {
    window.location = "overtime_payment.php";
}

function freelance_usd_to_lkr() {
    window.location = "freelance_usd_to_lkr.php";
}


function calculatesalary() {
    var basicSalary = document.getElementById("basic_salary").value || 0;
    var allowances = document.getElementById("allowances").value || 0;
    var epfPercent = document.getElementById("epf").value || 0;
    var etfPercent = document.getElementById("etf").value || 0;

    var f = new FormData();
    f.append("basic_salary", basicSalary);
    f.append("allowances", allowances);
    f.append("epf_percent", epfPercent);
    f.append("etf_percent", etfPercent);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function () {
        if (r.readyState == 4 && r.status == 200) {
            var data = JSON.parse(r.responseText);

            document.getElementById("takehome").innerHTML = data.take_home_salary;
            document.getElementById("epf_val").innerHTML = data.epf;
            document.getElementById("etf_val").innerHTML = data.etf;
            document.getElementById("paye_val").innerHTML = data.paye;
            document.getElementById("total_val").innerHTML = data.total_deduction;
        }
    };
    r.open("POST", "calculate_salary.php", true);
    r.send(f);
}


function overtime_calc() {
    var hourlyrate = document.getElementById("hourly_rate").value || 0;
    var othours = document.getElementById("ot_hours").value || 0;

    var f = new FormData();
    f.append("hourly_rate", hourlyrate);
    f.append("ot_hours", othours);

    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.readyState == 4 && r.status == 200) {
            var data = JSON.parse(r.responseText);
            document.getElementById("overtime_salary").innerHTML = data.total_salary;
        }
    };

    r.open("POST", "calculate_overtime.php", true);
    r.send(f);
}

function calculateUSDToLKR() {
    var usdAmount = document.getElementById("USD_amount").value || 0;
    var exchangeRate = document.getElementById("exchange_rate").value || 0;
    var bankFee = document.getElementById("bank_fee").value || 0;

    var convertedAmount = usdAmount * exchangeRate;
    var bankFeeAmount = (convertedAmount * bankFee) / 100;
    var finalAmount = convertedAmount - bankFeeAmount;

    document.getElementById("bank_fee_val").innerHTML = bankFeeAmount.toFixed(2);
    document.getElementById("total_amount_val").innerHTML = finalAmount.toFixed(2);
}

function ElectricityBill() {
    window.location = "electricity_bill.php";
}

function calculate_elctricity() {
    var units_used = document.getElementById("units_uesd").value || 0;
    var electricity_bill = 0;
    if (units_used <= 30) {
        electricity_bill = units_used * 8;
    } else if (units_used <= 60) {
        electricity_bill = (30 * 8) + ((units_used - 30) * 10);
    } else if (units_used <= 90) {
        electricity_bill = (30 * 8) + (30 * 10) + ((units_used - 60) * 28);
    } else {
        electricity_bill = (30 * 8) + (30 * 10) + (30 * 28) + ((units_used - 90) * 45);
    }

    document.getElementById("electricity_bill").innerHTML = electricity_bill.toFixed(2);
}


function WaterBill() {
    window.location = "water_bill.php";
}

function calculate_water() {
    var water_units = document.getElementById("units_uesd_w").value || 0;
    var water_bill = 0;
    if (water_units <= 15) {
        water_bill = water_units * 20;
    } else if (water_units <= 30) {
        water_bill = (15 * 20) + ((water_units - 15) * 30);
    } else if (water_units <= 60) {
        water_bill = (15 * 20) + (15 * 30) + ((water_units - 30) * 50);
    } else {
        water_bill = (15 * 20) + (15 * 30) + (30 * 50) + ((water_units - 60) * 75);
    }

    document.getElementById("water_bill").innerHTML = water_bill.toFixed(2);
}

function MobileDataPlanSuggestion() {
    alert("Coming Soon...");
}

function Wedding_budget() {
    window.location = "wedding_budget_calc.php";
}

function calculate_wedding() {

    var number_guests = parseInt(document.getElementById("number_guests").value) || 0;
    var costOfPlate = parseInt(document.getElementById("costOfPlate").value) || 0;
    var hall_cost = parseInt(document.getElementById("hall_cost_input").value) || 0;
    var dec_cost = parseInt(document.getElementById("dec_cost").value) || 0;
    var clo_cost = parseInt(document.getElementById("clo_cost").value) || 0;

    var wedding_hall_cost = hall_cost + dec_cost + clo_cost;
    var guests_cost = number_guests * costOfPlate;
    var total_wedding_cost = wedding_hall_cost + guests_cost;


    document.getElementById("hall_cost").innerHTML = wedding_hall_cost.toFixed(2);
    document.getElementById("guests_cost").innerHTML = guests_cost.toFixed(2);
    document.getElementById("total_wedding_cost").innerHTML = total_wedding_cost.toFixed(2);

}


function Houserant() {
    window.location = "house_rental_calc.php";
}

function calculate_house_rent() {
    var monthly_income = parseFloat(document.getElementById("monthly_income").value || 0);

    var affordable_rant = monthly_income * 0.3;

    document.getElementById("rant").innerHTML = affordable_rant.toFixed(2);
}


function monthly_baby_Expense() {
    window.location = "baby_expense_calc.php";
}


function calculate_baby_expenses() {
    var essentials = parseInt(document.getElementById("essentials").value || 0);
    var medical = parseInt(document.getElementById("medical").value || 0);
    var clothing = parseInt(document.getElementById("clothing").value || 0);

    var tot_expenses = essentials + medical + clothing;

    document.getElementById("expenses").innerHTML = tot_expenses.toFixed(2);
}

function GPA_calculator() {
    window.location = "gpa_calc.php";
}