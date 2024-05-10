var adrButton = document.querySelector('.adr i');
var adrWritten = document.querySelector('.adresse');

adrButton.addEventListener('click', function() {
    if (adrWritten.classList.contains('showadr')) {
        adrWritten.classList.remove('showadr');
    } else {
        adrWritten.classList.add('showadr');
    }
});
var phoneBtn = document.querySelector('.phone .fa-phone')
var phoneNum = document.querySelector('.phone .phoneNum')
phoneBtn.addEventListener('click', function() {
    if (phoneNum.classList.contains('showphone')) {
        phoneNum.classList.remove('showphone');
    } else {
        phoneNum.classList.add('showphone');
    }
});




var formBut = document.querySelector('.Form .cont');
var form = document.querySelector('.Form .container form');
var up = document.querySelector('.up')
up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

})





formBut.addEventListener('click', function() {
    form.classList.toggle('showform');
});

header = document.querySelector('header')
window.addEventListener('scroll', () => {
    if (scrollY > 30) {
        header.style.backgroundColor = 'black'
        header.style.position = 'sticky'
        header.style.top = '0'
        up.style.display = 'flex'

    } else {
        header.style.backgroundColor = 'transparent'
        up.style.display = 'none'
    }
})


function handleMethodChange(input) {
    document.getElementById('email').style.display = 'none';
    document.getElementById('tel').style.display = 'none';
    if (input.value === 'email') {
        document.getElementById('email').style.display = 'block';
    } else if (input.value === 'tel') {
        document.getElementById('tel').style.display = 'block';
    }
}