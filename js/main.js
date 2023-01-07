var elClose = document.querySelector('.close');
var elOpen = document.querySelector('.open');
var elModal = document.querySelector('.modal');
var elBtn = document.querySelector('.btn_close');
var elSave = document.querySelector('.save');
var elShadow = document.querySelector('.shadow');

elOpen.addEventListener('click', ()=>{
    elModal.classList.add('modal_open')
    elShadow.classList.add('shadow_open')
    document.querySelector('body').style.overflow = 'hidden'
})
elClose.addEventListener('click', ()=>{
    elModal.classList.remove('modal_open')
    elShadow.classList.remove('shadow_open')
    document.querySelector('body').style.overflow = 'auto'
})
elBtn.addEventListener('click', ()=>{
    elModal.classList.remove('modal_open')
    elShadow.classList.remove('shadow_open')
    document.querySelector('body').style.overflow = 'auto'
})
elSave.addEventListener('click', ()=>{
    elModal.classList.remove('modal_open')
    elShadow.classList.remove('shadow_open')
    document.querySelector('body').style.overflow = 'auto'
})
elShadow.addEventListener('click', ()=>{
    elModal.classList.remove('modal_open')
    elShadow.classList.remove('shadow_open')
    document.querySelector('body').style.overflow = 'auto'
})