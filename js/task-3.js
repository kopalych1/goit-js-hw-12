const inputElement = document.querySelector('input#name-input');
console.log(inputElement);

const output = document.querySelector('span#name-output');

inputElement.addEventListener('input', event => {
  const val = event.currentTarget.value.trim();
  if (val === '') output.textContent = 'Anonymous';
  else output.textContent = val;
});
