setInterval(setClock, 1000)

const hourHand = document.getElementById('hours-hand')
const minutesHand = document.getElementById('minutes-hand')
const secondsHand = document.getElementById('seconds-hand')

function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(hourHand, hoursRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(secondsHand, secondsRatio);
}

function setRotation (element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock()