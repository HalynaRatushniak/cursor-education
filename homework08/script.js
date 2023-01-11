class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.active = true;
    }
    getInfo() {
        return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this._active ? this._marks : null;
    }

    set marks(newMark) {
        if (this._active) {
            this._marks.push(newMark);
        }
    }

    getAverageMark() {
        return this._marks.reduce((acc, curValue) => acc + curValue, 0) / (this._marks.length || 1);
    }

    get active() {
        return this._active;
    }
    set active(curAct) {
        this._active = curAct;
    }
    dismiss() {
        this._active = false;
    }
    recover() {
        this.active = true;
    }
}

let newStudent = new Student('Вища Школа Психотерапії м.Одеса,', '1', 'Остап Родоманський Бендер');
console.log(newStudent.getInfo());
console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.getAverageMark());
newStudent.dismiss();
console.log(newStudent.marks);
newStudent.recover();
console.log(newStudent.marks);

//Advanced
class BudgetStudent extends Student{
    static sumOfBudget = 1400;
    constructor(university, course, fullName) {
        super(university, course, fullName);
            this.sumScholarship = BudgetStudent.sumOfBudget;
        setInterval(() => this.getScholarship(), 30000);
        }
    getScholarship() {
        if (this.active) {
            if (this.getAverageMark() >= 4)
                console.log(`Ви отримали ${this.sumScholarship} грн. стипендії`);
        }
    }
}
let newBudgetStudent = new BudgetStudent('КНУБА', '3', 'Федько Іван Степанович');