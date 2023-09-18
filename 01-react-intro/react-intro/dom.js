const root = document.querySelector('#root');

const div = document.createElement('div');

div.textContent = 'Hello World from native DOM';
div.style.color = 'red';

root.append(div);
