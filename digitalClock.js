console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondParagraphs = document.querySelectorAll(".seconds p");
console.log(secondParagraphs);

let minutes = 0;
const minuteParagraph = document.querySelectorAll(".minutes p")

let hours = 0;
const hoursParagraph = document.querySelectorAll(".hours p")

setInterval(function(){
    renderDigits(seconds, secondParagraphs);
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

}, 1);

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