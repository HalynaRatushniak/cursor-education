//1

function* createIdGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

//2

const fontSizeGenerator = {
    generator(fontSize) {
    let i = fontSize;
    return {
        next(dir) {
            if (dir === 'up') {
                return { value: i += 2, done: false};
            }
            if (!dir) {
                return { value: i, done: true};
            }
            if (dir === 'down') {
                return { value: i -= 2, done: false};
            }
        }  
    }
}
}


let text = document.querySelector('.text')
    
let fontDir = "";
const iterator = fontSizeGenerator.generator(14)
const size = iterator.next(`${fontDir}`).value;

const btnUp = document.querySelector('.up');
btnUp.addEventListener('click', () => {
    fontDir = 'up';
    const size = iterator.next(`${fontDir}`).value;
    text.style.fontSize = size +'px';
    console.log(size);
})

const btnDown = document.querySelector('.down');
btnDown.addEventListener('click', () => {
    fontDir = 'down';
    const size = iterator.next(`${fontDir}`).value;
    text.style.fontSize = size +'px';
    console.log(size);
})


