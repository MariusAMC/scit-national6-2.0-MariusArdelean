console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondParagraph = document.querySelectorAll(".seconds p");
console.log(secondParagraph);

let minutes = 0;
const minuteParagraph = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraph = document.querySelectorAll(".hours p");

const startButton = document.getElementById("start-timer");
const stopButton = document.getElementById("stop-timer");
const resetButton = document.getElementById("reset-timer");
const saveButton = document.getElementById("save-timer");

let time;

startButton.addEventListener("click", function() {
    time = setInterval(function (){
    renderDigits(seconds, secondParagraph);
    renderDigits(minutes, minuteParagraph);
    renderDigits(hours, hoursParagraph);

    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes ++
    }

    if(minutes === 60) {
        minutes = 0;
        hours++;
    }

    if (hours ===24) {
        hours = 0;
    }
})}, 100);

stopButton.addEventListener("click", function () {
    clearInterval(time);
});

resetButton.addEventListener("click",function() {
    clearInterval(time);
    seconds = 0;
    minutes = 0;
    hours = 0;

    resetTime(secondParagraph);
    resetTime(minuteParagraph);
    resetTime(hoursParagraph);
    
});

saveButton.addEventListener("click", function () {
    const savedTime = document.createElement("p");
    document.body.appendChild(savedTime);
    let newSec = checkTime(seconds);
    let newMin = checkTime(minutes);
    let newHours = checkTime(hours);
    savedTime.innerText = `${newHours}:${newMin}:${newSec}`;
})

function renderDigits(nr, plist) {
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");

    if(digitList.length === 2) {
        plist[0].innerText = digitList[0];
        plist[1].innerText = digitList[1];
    } else {
        plist[0].innerText = 0;
        plist[1].innerText = digitList[0];
}
}

function resetTime(pList) {
    pList[0].innerText = 0;
    pList[1].innerText = 0;
}


function checkTime(digit) {
    if (digit < 10) {
        digit = `0${digit}`; 
    } 
    return digit;
}