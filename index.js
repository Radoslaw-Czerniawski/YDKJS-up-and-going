(function IIFE (){
let bank_balance = prompt("State your bank account balance");
let balance_change = bank_balance;
const phone_price = 99.99;
const accessory_price = 9.99;
const spending_threshold = 120;
const tax_rate = 0.08;

let phones = 0;
let accessories = 0;
let money_spent = 0;

function taxing (money_spent) {
    return (money_spent + money_spent * tax_rate).toFixed(2);
}

while (balance_change > phone_price) {
    balance_change -= phone_price;
    money_spent += phone_price;
    phones ++;
    if (balance_change > spending_threshold) {
        balance_change -= accessory_price;
        money_spent += accessory_price;
        accessories ++;
    }
}

if (bank_balance < taxing(money_spent)) {
    console.log(`Unfortunately you are $${(taxing(money_spent) - money_spent).toFixed(2)} short.`)
} else {
    console.log(`You bought: ${phones} phones, ${accessories} accessories and spent $${taxing(money_spent)}`);
}})();

