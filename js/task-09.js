function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('.body');



colorBtn.addEventListener('click', () => {

  colorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = colorSpan.textContent;

});

