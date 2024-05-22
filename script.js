// const clock = document.getElementsById('timeclock')
const clock = document.querySelector(`#timeclock`)

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);