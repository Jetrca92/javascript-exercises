const btn = document.querySelector('#btn');
btn.onclick = alertFunction;
const butn = document.querySelector('#butn');
butn.addEventListener('click', alertFunction);
function alertFunction () {
    alert('Hello, World!');
}
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});