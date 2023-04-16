
let counterValue = 0;

const idSpan = document.getElementById('value');

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener(
  'click',
  () => (spanId.textContent = counterValue += 1)
);

btnDecrement.addEventListener(
  'click',
  () => (spanId.textContent = counterValue -= 1)
);
