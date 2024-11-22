const burgerButtonOpen = document.getElementById('burgerBtnOpen');
const burgerButtonClose = document.getElementById('burgerBtnClose');
const sideBar = document.getElementById('sideBar');

burgerButtonOpen.addEventListener('click', () => {
    sideBar.style.display = 'flex';
})

burgerButtonClose.addEventListener('click', () => {
    sideBar.style.display = 'none'
})