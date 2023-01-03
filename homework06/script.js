const students = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
    }];

//Func.1
function getSubjects(st) {
    const subject = Object.keys(students[st].subjects);

    for (let i = 0; i < subject.length; i++){
        subject[i] = subject[i].replace("_", " ");
        subject[i] = subject[i][0].toUpperCase() + subject[i].slice(1);
    }
    return subject;
}
console.log(getSubjects(1));

//Func.2
function getAverageMark(st) {
    let arrMarks = Object.entries(st.subjects);
    let total = 0;
    let count = 0;
    for (m of arrMarks) {
       let sum =m[1].forEach(function(item, index) {
    total += item;
    count++;
});
  }
result = total / count;
return result.toFixed(2);
}
console.log(getAverageMark(students[0]));

//Func.3
function getStudentInfo(st) {
    let stInfo = {};
    stInfo["Course"] = st.course;
    stInfo["Name"] = st.name;
    stInfo["Average mark"] = getAverageMark(st);
    return stInfo;
}
console.log(getStudentInfo(students[2]));

//Func.4
function getStudentsNames(st) {
    let arrName = [];
    for (let i = 0; i < st.length; i++){
        arrName.push(students[i].name);
    }
    return arrName.sort();
}
console.log(getStudentsNames(students));

//Func.5
function getBestStudent(st) {
    let highest = students[0];
    for (value of st) {
        if (getAverageMark(value) > getAverageMark(highest)) {
            highest = value;
        }
    }
    return highest.name;
}
console.log(getBestStudent(students));

//Func.6
function calculateWordLetters(word) {
    let result = {};
    let repeats = [];
    for (i = 0; i < word.length; i++){
        let letter = word.charAt(i);
        result[letter] = (isNaN(result[letter]) ? 1 : result[letter] + 1);
    }
    return result;
}
console.log(calculateWordLetters("test"));