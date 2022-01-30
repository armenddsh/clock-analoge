let seconds = 0;
let hours = 0;
let minutes = 0;

const max = 360;

setInterval(() => {
    const date = new Date();
    let day = date.getDate();          // Get the day as a number (1-31)
    let weekDayNum = date.getDay();           // Get the weekday as a number (0-6)
    let year = date.getFullYear();      // Get the four digit year (yyyy)
    let hours = date.getHours();         // Get the hour (0-23)
    let minutes = date.getMinutes();       // Get the minutes (0-59)
    let month = date.getMonth();         // Get the month (0-11)
    let seconds = date.getSeconds();       // Get the seconds (0-59)

    const k = 6;
    const hour = 12;
    const deg = 90;

    if (hours >= 12) {
        hours = hours - hour;
    }

    seconds = seconds * k;
    minutes = minutes * k;
    hours = hours * 4 * k;

    minutes = minutes + deg;
    seconds = seconds + deg;
    hours = hours + deg;

    document.getElementById("seconds").style.transform = `rotate(${seconds}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minutes}deg)`;
    document.getElementById("hours").style.transform = `rotate(${hours}deg)`;

}, 500);