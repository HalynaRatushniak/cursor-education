const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структура даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1
export function getPairs(students = []) {
    const girls = [];
    girls.push(students[2], students[3], students[5]);
    const boys = [];
    boys.push(students[0], students[1], students[4]);

    const result = [];
    for (let i = 0; i < girls.length; i++) {
        result.push([girls[i], boys[i]]);
    }
    console.log(result);
    return result;
}
getPairs(students);

//2
function getThemes(arrPair = [], themes = []) {
    let pairTheme = [];
    for (let i = 0; i < arrPair.length; i++) {
        let pair = arrPair[i];
        pairTheme.push([`${pair[0]} i ${pair[1]}`, themes[i]]);
    }
    return pairTheme;
}
console.log(getThemes((getPairs(students)), themes));

//3
function getMarks(students = [], marks = []) {
    let rating = [];
    for (let i = 0; i < Math.min(students.length, marks.length); i++) {
        rating.push([students[i], marks[i]]);
    }
    return rating;
}
console.log(getMarks(students, marks));

//4
function getRandomMarks(array = []) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let randomMark = Math.floor(Math.random() * (5 - 1) + 1);
        result.push([array[i][0], array[i][1], randomMark]);
    }
    return result;
}
console.log(getRandomMarks(getThemes((getPairs(students)), themes)));

 