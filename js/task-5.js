function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElement = document.querySelector('button.change-color');
const spanElement = document.querySelector('span.color');

buttonElement.addEventListener('click', event => {
  const randomColor = getRandomHexColor();

  document.querySelector('body').style['background-color'] = randomColor;
  spanElement.textContent = randomColor;
});
