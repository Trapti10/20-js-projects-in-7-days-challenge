const months = [
    "Januari",
    "Fabruary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".time-value")

let futureDate = new Date(2025, 10, 30, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]

let day = futureDate.getDay()
day = weekdays[day];
giveaway.textContent = `giveaway ends on ${day}, ${month} ${year} ${hours}:${mins}am`
// futture time in milisec
const futureTime = futureDate.getTime()
//current time in ms
function getremainTime(){
    const today  = new Date().getTime();
    const t = futureTime - today;  //difference b/w today and future time

    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all values 
    let days = t / oneDay;
    days = Math.floor(days)
    let hours = (t%oneDay )/ oneHour;
    hours = Math.floor(hours)
    let minutes = (t%oneHour )/ oneMinute;
    minutes = Math.floor(minutes)
    let seconds = Math.floor((t%oneMinute)/1000);

    // set values array
    const values = [days, hours,minutes, seconds];

    function format(item){
        if(item<10){
            return (item = `0${item}`)
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    })
}

// countdown
let countdown = setInterval(getremainTime, 1000);

getremainTime();

