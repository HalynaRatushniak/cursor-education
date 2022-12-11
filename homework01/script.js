
//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
const avocado = 15.678;
const eggs = 123.965;
const bread = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const a = Math.max(avocado, eggs, bread);
console.log(a);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const b = Math.min(avocado, eggs, bread);
console.log(b);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const s = avocado + eggs + bread;
console.log("Sum is:", s );

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару
//між собою. Округлення використовувати в МЕНЬШУ сторону.
const c = Math.floor(avocado);
const d = Math.floor(eggs);
const e = Math.floor(bread);

const rounded = c + d + e;

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть
//300)
console.log(Math.ceil(rounded/100) * 100);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним
//чи непарним числом?
let roundedBoolean;
if (rounded % 2 == 0) {
    roundedBoolean = true;
} else {
    roundedBoolean = false;
};

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500
//грн.
console.log(500 - s);

//Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(Number((s / 3).toFixed(2)));
//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте
//функцію Math.random).
const min = 1;
const max = 100;
const calculateSale = Math.floor((max - min) * Math.random() + min);
console.log(calculateSale);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків
//після коми.
const sumWhithSave = (s - ((calculateSale / 100) * s));
console.log("Sum whith sale:", Number(sumWhithSave.toFixed(2)));

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів
//рівно в два рази нижче їх ціни?
console.log("Income:", Number(((s / 2) - calculateSale).toFixed(2))); 

//Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього
//завдання
const result = `Максимальна ціна: ${a} </br>
    Мінімальна ціна: ${b} </br >
    Сума всіх товарів: ${s} </br >
    Сума товарів з округленням: ${rounded} </br >
    Сума товарів округлена до сотень: ${Math.ceil(rounded / 100) * 100} </br>
    Булеве значення: ${roundedBoolean} </br>
    Сума решти: ${500 - s} </br>
    Середнє значення цін з округленням: ${Number((s / 3).toFixed(2))} </br>
    Чистий прибуток: ${Number(((s / 2) - calculateSale).toFixed(2))}`;
console.log(result);
