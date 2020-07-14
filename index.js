// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';


document.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) {
        moveDodgerLeft();
        // dodger.style.left = `${parseInt(dodger.style.left) - 5}px`;
    }
    if (e.keyCode == 39) {
        moveDodgerRight();
        // dodger.style.left = `${parseInt(dodger.style.left) + 5}px`;
    }
})

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left)

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

function moveDodgerRight() {
    let left = parseInt(dodger.style.left);

    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
    }
}