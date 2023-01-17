// Створення без css:

// function generateBlocks() {
//     let mainBlock = document.createElement('div');
//     mainBlock.style.width='250px'
//     mainBlock.style.display = 'flex';
//     mainBlock.style.flexWrap = 'wrap';
//     mainBlock.style.margin = '100px auto';
//     document.body.append(mainBlock);

//     for (let i = 0; i < 25; i++) {
//         let smallBlock = document.createElement('div');
//         smallBlock.style.width = '50px';
//         smallBlock.style.height = '50px';
//         smallBlock.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         mainBlock.append(smallBlock);
//     };

// };
// generateBlocks();

document.addEventListener('DOMContentLoaded', function () {
    function getRandomColors() {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    function generateBlocks() {
        for (let i = 0; i < 25; i++){
            let smallBlock = document.createElement('div');
            let mainBlock = document.querySelector('.mainBlock');
            smallBlock.setAttribute('class', 'smallBlock');

            mainBlock.appendChild(smallBlock);
            smallBlock.style.backgroundColor = getRandomColors();
        }
    };

    generateBlocks();

    function generateBlocksInterval() {
    
    document.querySelectorAll('.smallBlock').forEach((element) => {
       element.style.backgroundColor =  getRandomColors(); 
    });
}

setInterval(generateBlocksInterval , 1000);
})


