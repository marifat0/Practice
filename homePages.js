const dropup = document.querySelectorAll('.dropup');

dropup.forEach(dropup => {
const select = dropup.querySelector('.select');
const caret = dropup.querySelector('.caret');
const menu = dropup.querySelector('.menu');
const option = dropup.querySelectorAll('.menu li');
const selected = dropup.querySelector('.selected');

select.addEventListener('click', () => {
select.classList.toggle('select-clicked');
caret.classList.toggle('caret-rotate');
menu.classList.toggle('menu-open');
});
option.forEach(option => {
    option.addEventListener('click', () => {
    selected.innerText = option.innerText;
    select.classList.remove('select-clicked');
    caret.classList.remove('caret-rotate');
    menu.classList.remove('menu-open');
    options.forEach(option => {
        option.classList.remove('active');
    });
    option.classList.add('active');
});
});
});
