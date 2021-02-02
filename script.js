const daysElement = document.getElementById('days');
const hrsElement = document.getElementById('hrs');
const minsElement = document.getElementById('mins');
const secsElement = document.getElementById('secs');

const newYear = '1 Jan 2022';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSecs = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSecs/3600/24);
    const hrs = Math.floor(totalSecs/3600) % 24;
    const mins = Math.floor(totalSecs/60) % 60;
    const secs = Math.floor(totalSecs) % 60

    daysElement.innerHTML = formatTime(days);
    hrsElement.innerHTML = formatTime(hrs);
    minsElement.innerHTML = formatTime(mins);
    secsElement.innerHTML = formatTime(secs);

}

function formatTime(time) {
    return time < 10 ? ('0' + time) : time;
}

countdown();

setInterval(countdown, 1000);
