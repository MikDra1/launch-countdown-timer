// const startDays = 9;
// let startSeconds = startDays * 24 * 60 * 60;

// const daysLabel = document.querySelector('.days__label')
// const hoursLabel = document.querySelector('.hours__label')
// const minutesLabel = document.querySelector('.minutes__label')
// const secondsLabel = document.querySelector('.seconds__label')

// function init(seconds) {
//     daysLabel.textContent = String(Math.floor(seconds / 60 / 60 / 24)).padStart(2, '0')
//     hoursLabel.textContent = String(Math.floor((seconds - (+daysLabel.textContent * 60 * 60 * 24)) / 60 / 60)).padStart(2, '0')
//     minutesLabel.textContent = String(Math.floor((seconds - (+daysLabel.textContent * 60 * 60 * 24) - (+hoursLabel.textContent * 60 * 60)) / 60)).padStart(2, '0')

//     secondsLabel.textContent = String(Math.floor((seconds - (+daysLabel.textContent * 60 * 60 * 24) - (+hoursLabel.textContent * 60 * 60) - minutesLabel.textContent * 60))).padStart(2, '0')

// }

// function timer() {
//     setInterval(() => {
//         startSeconds -= 1;
//         init(startSeconds)
//         if(startSeconds === 0) {
//         }
//     }, 1000)
// }

// timer()


const countToDate = new Date().setHours(new Date().getHours() + 216)
let previousTimeBetweenDates;
setInterval(() => {
    const currentDate = new Date()
    const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)

    if(previousTimeBetweenDates !== timeBetweenDates) {
        flipAllCards(timeBetweenDates)
    }

    previousTimeBetweenDates = timeBetweenDates
}, 250)

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent)

  if(+newNumber === +startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");


  topFlip.textContent = String(startNumber ).padStart(2, '0');
  topHalf.textContent = String(startNumber ).padStart(2, '0');
  bottomHalf.textContent = String(startNumber).padStart(2, '0');
  bottomFlip.textContent = String(newNumber).padStart(2, '0') ;



  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = String(newNumber).padStart(2, '0')

  });

  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = String(newNumber).padStart(2, '0')
    bottomFlip.remove();

  });

  flipCard.append(topFlip, bottomFlip);
}

function flipAllCards(time) {
    const days = String(Math.floor(time / 3600 / 24)).padStart(2, '0')
    const hours = Math.floor(((time - (days * 3600 * 24)) / 3600))
    const minutes =  Math.floor(((time - (days * 3600 * 24) - (hours * 3600)) / 60))
    const seconds = Math.floor(((time - (days * 3600 * 24) - (hours * 3600) - (minutes * 60) )))



    const day = document.querySelector('[data-day]')
    const hour = document.querySelector('[data-hours]')
    const minute = document.querySelector('[data-minutes]')
    const second = document.querySelector('[data-seconds]')



    flip(day, days)
    flip(hour, hours)
    flip(minute, minutes)
    flip(second, seconds)

}


