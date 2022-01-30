let seconds = 0;
let hours = 0;
let minutes = 0;

const max = 360;

setInterval(() => {
    const date = new Date();
    let hours = date.getHours();         // Get the hour (0-23)
    let minutes = date.getMinutes();       // Get the minutes (0-59)
    let seconds = date.getSeconds();       // Get the seconds (0-59)

    const k = 6;
    const hour = 12;
    const deg = 90;

    if (hours >= 12) {
        hours = hours - hour;
    } else {
        hours = hours + 0;
    }

    seconds = seconds * k;
    minutes = minutes * k;
    hours = hours * 5 * k;

    const minutesDeg = minutes + deg;
    const secondsDeg = seconds + deg;
    const hoursDeg = ( hours + ( minutes / hour ) ) + deg;

    document.getElementById("seconds").style.transform = `rotate(${secondsDeg}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${minutesDeg}deg)`;
    document.getElementById("hours").style.transform = `rotate(${hoursDeg}deg)`;

}, 500);