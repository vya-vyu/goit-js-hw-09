import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const startTimerBtn = document.querySelector('[data-start]');
const timerInput=document.querySelector('#datetime-picker')

const timerValue = document.querySelectorAll('.value');
let intervalId = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        
        if (intervalId === null) {
            startTimerBtn.disabled = false;
        } else { 
            startTimerBtn.disabled = true;
            Notiflix.Notify.warning('Reload the page to play the new timer')
        }
  },
};

startTimerBtn.addEventListener('click', onStart);
startTimerBtn.disabled = true;
function onStart() {
    const selectedDate = new Date(timerInput.value);
    
    if (options.defaultDate >= selectedDate) {
            Notiflix.Notify.failure('Please choose a date in the future');
            startTimerBtn.disabled = true;
            return;
    }
    if (intervalId === null) {
        intervalId = setInterval(() => howMuchIsLeft(selectedDate), 1000);
        Notiflix.Notify.success('Timer ON');
        startTimerBtn.disabled = true;
    } 
    
}
function howMuchIsLeft(date) {
    const currentDate = new Date();
    const difference = date.getTime() - currentDate.getTime();

    const timeleft = {
        days: addLeadingZero(convertMs(difference).days),
        hours: addLeadingZero(convertMs(difference).hours),
        minutes: addLeadingZero(convertMs(difference).minutes),
        seconds: addLeadingZero(convertMs(difference).seconds),
    }

    timerValue.forEach(el => {
       
        if (Number(timeleft[el.nextElementSibling.textContent.toLowerCase()]) < 0) {
            clearInterval(intervalId);
            return;
        }
        el.textContent = timeleft[el.nextElementSibling.textContent.toLowerCase()];
       
    });
}
function addLeadingZero(value) { 
   return `${value}`.padStart(2,0)
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}



flatpickr('#datetime-picker', options);