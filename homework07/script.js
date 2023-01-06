const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Func.1
function getMyTaxes(salary) {
    const taxes = this.tax * salary;
    return taxes;
}
console.log(getMyTaxes.call(ukraine, 2500));

//Func.2
function getMiddleTaxes(country) {
    const midTax = this.tax * this.middleSalary;
    return midTax;
}
console.log(getMiddleTaxes.call(ukraine));

//Func.3
function getTotalTaxes(country) {
    const totalTax = this.tax * this.middleSalary * this.vacancies;
    return totalTax;
}
console.log(getTotalTaxes.call(ukraine));

//Func.4
function getMySalary(country) {
    let mySalary = {};
    mySalary.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    mySalary.taxes = Math.round(getMyTaxes.call(this, mySalary.salary));
    mySalary.profit = mySalary.salary - mySalary.taxes;
    return mySalary;
}
console.log(getMySalary.call(ukraine));

setInterval(() => console.log(getMySalary.call(ukraine)), 10000);