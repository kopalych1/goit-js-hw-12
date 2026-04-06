function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/* Elements */

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputField = document.querySelector(
  'div#controls > input[type="number"]'
);
const boxesContainer = document.querySelector('div#boxes');

/* Boxes Logic */

function createBox(box_number) {
  const box = document.createElement('div');
  box.style['width'] = 30 + box_number * 10 + 'px';
  box.style['height'] = 30 + box_number * 10 + 'px';
  box.style['background-color'] = getRandomHexColor();
  // box.textContent = box_number;
  return box;
}
/**
 * @param {number} amount
 */
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = createBox(i);
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

/* Handlers */

createButton.addEventListener('click', event => {
  const userInput = Number.parseInt(inputField.value);
  if (userInput < 1 || userInput > 100) {
    alert('Invalid amount');
    return;
  }
  destroyBoxes();
  createBoxes(userInput);
  console.debug('Created boxes:', userInput);
  inputField.value = '';
});

destroyButton.addEventListener('click', event => {
  destroyBoxes();
  console.debug('Destroyed boxes');
});
