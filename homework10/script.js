
function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyButton = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!sound) return;
    sound.currentTime = 0;
    sound.play();
    keyButton.classList.add('playing');
};

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

document.querySelectorAll('.key').forEach(keyButton => keyButton.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);