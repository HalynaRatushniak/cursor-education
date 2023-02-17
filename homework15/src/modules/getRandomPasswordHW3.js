import {getRandomNumberHW3} from './getRandomNumberHW3';
export function getRandomPasswordHW3(passwordLength = 8) {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomNumberHW3(0, 9);
    }
    console.log(randomPassword);
    return randomPassword;
};