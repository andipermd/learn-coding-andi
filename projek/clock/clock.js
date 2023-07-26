setInterval(() => {
    const displayClock = document.querySelector(".clock")
    const displayDate = document.querySelector(".date")
    const jam = document.querySelector(".hours")
    const menit = document.querySelector(".minutes")
    const detik = document.querySelector(".seconds")
    let date = new Date();

    // clock
    let hours = date.getHours()
    if (hours <= 9) {
        hours = `0${hours}`
    }

    let minutes = date.getMinutes()
    if (minutes <= 9) {
        minutes = `0${minutes}`
    }

    let second = date.getSeconds()
    if (second <= 9) {
        second = `0${second}`
    }

    // displayClock.innerHTML = `${hours} : ${minutes} : ${second}`
    jam.innerHTML = `${hours}`
    menit.innerHTML = `${minutes}`
    detik.innerHTML = `${second}`
    // day 


    let day = date.getDay()
    let dateNumber = date.getDate()
    let month = date.getMonth()
    let years = date.getFullYear()


    let semuaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu",]
    let semuaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Desember"]


    // for (let date = 7; date > semuaHari.length; date = 0) {

    // }
    // console.log(date)

    day = semuaHari[day]
    month = semuaBulan[month]

    displayDate.innerHTML = `${day}, ${dateNumber} ${month} ${years} `


})

