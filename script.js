const circle = document.querySelector('.circular-progress');
const text = document.querySelector('.percentage');
let val = 0;

const update = setInterval(() => {
    if(val >= 89) clearInterval(update);
    circle.style.setProperty('--percent', val);
    text.innerText = val + "%";
    val++;
}, 20); // Adjust speed here
