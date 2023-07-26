const saya = document.querySelector(".geo span");
const keahlian = ['geographer', 'kartographer', 'frontend', 'blogger']
const hamburger = document.querySelector(' nav .hamburger input')
const hamburgerSpan = document.querySelectorAll(' nav .hamburger span')[2]
const menu = document.querySelector('nav .menu')
const about = document.getElementsByClassName('about')[0]
const clock = document.querySelector(".digitalClock");

textSequence(0);
function textSequence(i) {
    if (keahlian.length > i) {
        setTimeout(function () {
            saya.innerHTML = keahlian[i];
            textSequence(++i)
        }, 2000)
    } else if (keahlian.length == i) {
        textSequence(0)
    }

}


about.addEventListener('click', function () {
    this.href = 'http://127.0.0.1:5500/Gabut/about.html'
})

hamburger.addEventListener('click', function () {
    menu.classList.toggle('slide')
})

clock.addEventListener('click', function () {
    this.href = 'http://127.0.0.1:5500/projek/clock/clock.html'
})

