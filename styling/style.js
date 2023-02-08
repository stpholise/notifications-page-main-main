const newMsg = document.querySelectorAll('.new')
const dot = document.querySelectorAll('.dot')
const btn = document.querySelector('.btn')
const unread = document.querySelector('.unread-num');
let num = newMsg.length
unread.innerHTML = num
btn.addEventListener('click', mar);
function mar(e) {
    for (let i = 0; i < newMsg.length; i++) {
        newMsg[i].classList.remove('new')
        dot[i].classList.remove('dot')
        num--
    }
    unread.innerHTML = num
    if (num < 0) {
        num = 0;
        unread.innerHTML = num

    }
}


newMsg.forEach((item) => item.addEventListener('click', read))
function read(e) {
    e.currentTarget.classList.remove('new')
    num--
    unread.innerHTML = num

    if (num < 0) {
        num = 0;
        unread.innerHTML = num

    }
    for (let i = 0; i < dot.length; i++) {
        if (dot[i].parentNode.parentElement === e.currentTarget) {
            dot[i].classList.remove('dot')
        }
    }

}

