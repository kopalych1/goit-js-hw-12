const categories = document.querySelector('ul#categories');

console.log('Number of categories:', categories.children.length);

categories.querySelectorAll('li.item').forEach(element => {
  console.log('Category:', element.querySelector('h2').innerText);
  console.log('Elements:', element.querySelector('ul').children.length);
});
