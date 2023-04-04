import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const savedSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(savedSettings);

form.email.value = parsedSettings?.email ?? '';
form.message.value = parsedSettings?.message ?? '';

const listenForm = throttle(
  event => {
    const { email, message } = event.currentTarget.elements;
    const feedback = { email: email.value, message: message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  },
  500,
  { trailing: false }
);

form.addEventListener('input', listenForm);
form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  localStorage.clear();
});
