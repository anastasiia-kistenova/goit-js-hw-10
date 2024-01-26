import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

 let calendar = new flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
   }
 })
  
let userSelectedDate = {
  onClose(userSelectedDate) {
    console.log(userSelectedDate[0]);
   }
}
 

const startBtn = document.querySelector('.btn');

class Timer {
  constructor(tick) { 
    this.tick = tick;
    this.isActive = false;
  }
  
  
  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();
    console.log(this.initTime);

    this.intervalId = setInterval(() => {
      const current = Date.now();
      const diff = current - this.initTime;
      const timeObj = this.#convertMs(diff);
      this.tick(timeObj);
    }, 1000);
  }

  #convertMs(ms) {
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

}

const timer = new Timer();

startBtn.addEventListener('click', () => {
  timer.start();
});

function tick({ days, hours, minutes, seconds }) {
  const timeStr = `${days}:${hours}:${minutes}:${seconds}`;
  console.log(timeStr);
}










