//Func.1
function getMaxDigit(number) {
    let max = 0;
    let string = number.toString();
    for (let i = 0; i <= string.length; i++) {
        let check = Number(string[i]);
        if (check > max) {
            max = check;
        }
    } return max;
} 

//Func.2
function mathPow(num, pow) {
    let result = num;
    for (let i = 1; i < pow; i++) {
        result *= num;
    }
    return result;
}

//Func.3
function formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }

//Func.4
function getRandomNumber(N, M) {
    let randomNumber = Math.floor(Math.random() * (M - N+1) + N);
    return randomNumber;
}

//Func.5
function countLetter(letter, word) {
    let repeatedLetter = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            repeatedLetter ++;
        }
    }
    return repeatedLetter;
}

//Func.6
function getRandomPassword(passwordLength = 8) {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomNumber(0, 9);
    }
    return randomPassword;
}

document.writeln(`<p> Func.1: Найбільша цифра: ${getMaxDigit(1236)} </p>`);
document.writeln(`<p> Func 2: Ступінь числа : ${ mathPow(2, 4)} </p>`);
document.writeln(`<p> Func 3: Відформатоване імя: ${formatName('іВан')} </p>`);
document.writeln(`<p> Func.4: Рандомне число: ${getRandomNumber(1, 100)} </p>`);
document.writeln(`<p> Func.5: Повторення літери: ${countLetter("е", "Неперевершений")} </p>`);
document.writeln(`<p> Func.6: Рандомний пароль: ${ getRandomPassword(8) } </p>`);
