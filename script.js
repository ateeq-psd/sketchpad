const container = document.querySelector(".container");
const resetButton = document.getElementById('resetButton')

for(let i = 0; i < 16 * 16; i++){
    const square = document.createElement('div');
    square.classList.add('item');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        square.style.backgroundColor ='#36322c'
    })
}

resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.item');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    })
})