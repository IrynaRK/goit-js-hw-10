import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.success({
        // title: 'Success',
        message: `✅ ${message}`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        // title: 'Error',
        message: `❌ ${error}`,
        position: 'topRight',
      });
    });
});
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
