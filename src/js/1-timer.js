import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
let countdownDate;
let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      countdownDate = userSelectedDate.getTime();
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  datetimePicker.disabled = true;

  const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const { days, hours, minutes, seconds } = convertMs(distance);

    if (distance <= 0) {
      clearInterval(x);
      document.querySelector('[data-days]').innerText = '00';
      document.querySelector('[data-hours]').innerText = '00';
      document.querySelector('[data-minutes]').innerText = '00';
      document.querySelector('[data-seconds]').innerText = '00';
      document.querySelector('timer').innerHTML = 'Таймер завершено!';
      datetimePicker.disabled = false;
      startButton.disabled = true;
    } else {
      document.querySelector('[data-days]').innerText = addLeadingZero(days);
      document.querySelector('[data-hours]').innerText = addLeadingZero(hours);
      document.querySelector('[data-minutes]').innerText =
        addLeadingZero(minutes);
      document.querySelector('[data-seconds]').innerText =
        addLeadingZero(seconds);
    }
  }, 1000);
});
startButton.disabled = true;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
