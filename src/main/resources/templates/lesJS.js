document.querySelector('.block').onclick = function () {
    // this.classList.toggle('red')
    // this.style.background = 'aqua'
    this.classList.toggle('possionX')
}

document.querySelector('.btn').onclick = function () {
    let text = document.querySelector('.text');
    text.innerHTML = `<h2>Hello world!</h2>`
    text.style.color = 'blue'
}

document.querySelector('.btn1').onclick = function (e) {
    e.preventDefault();

    let text1 = document.querySelector('.text1');
    let list = document.querySelector('.list');

    let li = document.createElement('li')
    li.innerText = text1.value;

    list.appendChild(li);
    text1.value = ' ';

    // console.log(li);
}
