//Func.1
const getRandomArray = (length, min, max) =>
    Array(length).fill().map(() => Math.round(Math.random() * (max - min + 1) + min));
    console.log(getRandomArray(15, 1, 100));

//Func.3
function getAverage(...numbers) {
    let sum = 0;
    const len = numbers.length;
    const numInteger = numbers.filter((n) => Number.isInteger(n)).map((num) => {
        sum += num;
    });
    let averageNum = sum / len;
    return Number(averageNum.toFixed(2));
};
console.log(getAverage(1, 4, 6.3, 3, 9.8, 8, 67, 34, 2));

//Func.4
function getMedian(...numbers) {
    return numbers.reduce((acc, number) => {
        if (Number.isInteger(number)) {
            acc += number;
        }
        return acc;
    }) / numbers.length;
    }
console.log(getMedian(3, 5, 7, 8, 9));

//Func.5
function filterEvenNumbers(...numbers) {
    let evens = numbers.filter(num => (num % 2) !== 0);
            return evens;
        }
console.log(filterEvenNumbers(3, 5, 6, 8, 10, 86, 34, 31));

//Func.6
function countPositiveNumbers(...numbers) {
    const positiv = (numbers.filter((num) => (num >= 0))).length;
    return positiv;
}
console.log(countPositiveNumbers(-1, 2, 4, 7, -4, -9));

//Func.7
function getDividedByFive(...numbers) {
    let divByFive = numbers.filter(num => (num % 5) === 0);
    return divByFive;
}
console.log(getDividedByFive(55, 40, 23, 7, 98, 5));

//Func.9
function divideByThree(word) {
    let rightWord = word.toLowerCase().trim();
    const chunkSize = 3;
    const result = [];
    for (let i = 0; i < word.length; i += chunkSize){
        const chunk = rightWord.slice(i, i + chunkSize);
        result.push(chunk);
    }
    return result;
}
console.log(divideByThree("Функціональність"));