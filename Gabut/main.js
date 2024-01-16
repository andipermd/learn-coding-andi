const saya = document.querySelector(".geo span");
const keahlian = ["geographer", "kartographer", "frontend", "blogger"];
const hamburger = document.querySelector(" nav .hamburger input");
const hamburgerSpan = document.querySelectorAll(" nav .hamburger span")[2];
const menu = document.querySelector("nav .menu");
const clock = document.querySelector(".digitalClock");
const display = document.querySelector(".displayOn");
const mainContent = document.querySelector("#mainContent");
const aboutContent = document.querySelector(".aboutContent");
const portfolioContent = document.querySelector(".portfolioContent");
const contactContent = document.querySelector(".contactContent");
const blogContent = document.querySelector(".blogContent");

textSequence(0);
function textSequence(i) {
  if (keahlian.length > i) {
    setTimeout(function () {
      saya.innerHTML = keahlian[i];
      textSequence(++i);
    }, 2000);
  } else if (keahlian.length == i) {
    textSequence(0);
  }
}

function mainContentOn() {
  mainContent.classList.remove("displayNone");
}

const listContent = document.querySelectorAll(".gallery a");

for (let i = 0; i < listContent.length; i++) {
  listContent[i].addEventListener("click", function () {
    mainContentOn();

    if (i === 0) {
      aboutContent.classList.add("displayOn");
      aboutContent.classList.remove("displayNone");
      portfolioContent.classList.add("displayNone");
      contactContent.classList.add("displayNone");
      blogContent.classList.add("displayNone");
    } else if (i === 1) {
      aboutContent.classList.add("displayNone");
      contactContent.classList.add("displayNone");
      blogContent.classList.add("displayNone");

      portfolioContent.classList.remove("displayNone");
    } else if (i === 2) {
      aboutContent.classList.add("displayNone");
      portfolioContent.classList.add("displayNone");
      blogContent.classList.add("displayNone");

      contactContent.classList.remove("displayNone");
    } else {
      aboutContent.classList.add("displayNone");
      portfolioContent.classList.add("displayNone");
      contactContent.classList.add("displayNone");

      blogContent.classList.remove("displayNone");
    }
  });
}

// listContent.forEach(e => {

//     e.addEventListener('click', function (x, i) {

//         console.log(e)
//         console.log(e.map((value) => value))
//     })
// });

// about.addEventListener('click', function () {
//     mainContentOn()
// })
// portfolio.addEventListener('click', function () {
//     mainContentOn()
//     aboutContent.style.display = 'none'
//     portfolioContent.style.display = 'block'
// })

hamburger.addEventListener("click", function () {
  menu.classList.toggle("slide");
});

clock.addEventListener("click", function () {
  this.href = "http://127.0.0.1:5500/projek/clock/clock.html";
});

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    },
  },
});
