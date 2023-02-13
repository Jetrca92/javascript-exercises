
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p');
p.style.color = 'red';
p.innerHTML = "Hey! I'm red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.innerHTML = "Hey! I'm blue!";

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border-style: solid; background-color: pink;'
div.setAttribute('id', 'theDiv');
container.appendChild(div);

const h1 = document.createElement('h1');
h1.innerHTML = "I'm a div!";

const theDiv = document.querySelector('#theDiv');
theDiv.appendChild(h1);

const p1 = document.createElement('p');
p1.innerHTML = 'ME TOO!';

theDiv.appendChild(p1);