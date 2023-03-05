const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId = null;
startBtn.addEventListener('click', (event) => {
    
    intervalId = setInterval(chengeBgColor, 1000);
    event.target.disabled = true;

});

stopBtn.addEventListener('click', (event) => { 
     
    clearInterval(intervalId);
    startBtn.disabled = false;
})



function chengeBgColor() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}