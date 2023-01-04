var elModal = document.querySelector('.modal');
var elIks = document.querySelector('.btn__iks');
var elAllow = document.querySelector('.btn__allow');
var elBlock = document.querySelector('.btn__block');
var elOpen = document.querySelector('.btn__open');

elOpen.addEventListener('click', function () {
    elModal.classList.add('btn__open')
})

elIks.addEventListener('click', function () {
    elModal.classList.remove('btn__open')
})

elAllow.addEventListener('click', function () {
    elModal.classList.remove('btn__open')
})

elBlock.addEventListener('click', function () {
    elModal.classList.remove('btn__open')
})