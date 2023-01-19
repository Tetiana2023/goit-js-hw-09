import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if ( selectedDates[0] <= new Date()){
            alert("Please choose a date in the future");
            startBtnEl.disabled = true;
            return
        }
         startBtnEl.disabled = false;
      console.log(selectedDates[0]);
    },
  };

  flatpickr("#datetime-picker", options);

const inputEl = document.getElementById("datetime-picker");
const startBtnEl = document.querySelector("button[data-start]");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");


let timerId = null;

startBtnEl.addEventListener('click', onButtonStart);

function onButtonStart(){
   const timerId = setInterval(()=> {
    
    let dif = new Date(inputEl.value) - Date.now();
    console.log(dif);

    startBtnEl.disabled = true;

    let timeElements =  convertMs(dif);
    console.log(timeElements);

    showTime(timeElements);

     if(dif <= 1000){
        clearInterval(timerId);
        startBtnEl.disabled = false;
    };
    
   }, 1000);

   
}
 function showTime(timeElements){
    daysEl.textContent = timeElements.days;
    hoursEl.textContent = timeElements.hours;
    minutesEl.textContent = timeElements.minutes;
    secondsEl.textContent = timeElements.seconds;
 }
function pad(value){
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }