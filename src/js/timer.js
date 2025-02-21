// function getTimeRemaining(endtime) {
//   var t = endtime - new Date().getTime();
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   return {
//     total: t,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function declensionNum(number, words) {
//   if (number > 10 && number < 20) return words[2];
//   var n = number % 10;
//   if (n === 1) return words[0];
//   if (n > 1 && n < 5) return words[1];
//   return words[2];
// }

// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   var hoursSpan = clock.querySelector('.hours');
//   var minutesSpan = clock.querySelector('.minutes');
//   var secondsSpan = clock.querySelector('.seconds');
//   var hoursLabel = clock.querySelector('.hours-label');
//   var minutesLabel = clock.querySelector('.minutes-label');
//   var secondsLabel = clock.querySelector('.seconds-label');

//   function updateClock() {
//     var t = getTimeRemaining(endtime);
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     hoursLabel.innerHTML = declensionNum(t.hours, [
//       'година',
//       'години',
//       'годин',
//     ]);
//     minutesLabel.innerHTML = declensionNum(t.minutes, [
//       'хвилина',
//       'хвилини',
//       'хвилин',
//     ]);
//     secondsLabel.innerHTML = declensionNum(t.seconds, [
//       'секунда',
//       'секунди',
//       'секунд',
//     ]);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       startNewDay();
//     }
//   }

//   updateClock();
//   var timeinterval = setInterval(updateClock, 1000);
// }

// function getEndOfDay() {
//   var now = new Date();
//   var endOfDay = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1,
//     0,
//     0,
//     0
//   );
//   return endOfDay.getTime();
// }

// function startNewDay() {
//   var newDeadline = getEndOfDay();
//   initializeClock('countdown-one', newDeadline);
//   // initializeClock('countdown-two', newDeadline);
//   // initializeClock('countdown-three', newDeadline);
// }

// var deadline = getEndOfDay();
// initializeClock('countdown-one', deadline);
// // initializeClock('countdown-two', deadline);
// // initializeClock('countdown-three', deadline);

// ****************************************************************

function getTimeRemaining(endtime) {
  const t = endtime - new Date().getTime();
  const milliseconds = Math.floor((t % 1000) / 10);
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / 1000 / 60 / 60) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds,
  };
}

function initializeClocks(endtime) {
  const clocks = document.querySelectorAll('.countdown');

  function updateClocks() {
    const t = getTimeRemaining(endtime);

    clocks.forEach(clock => {
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');
      const millisecondsSpan = clock.querySelector('.milliseconds');

      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      millisecondsSpan.innerHTML = ('0' + t.milliseconds).slice(-2);
    });

    if (t.total <= 0) {
      clearInterval(timeinterval);
      clocks.forEach(clock => {
        clock.querySelector('.hours').innerHTML = '00';
        clock.querySelector('.minutes').innerHTML = '00';
        clock.querySelector('.seconds').innerHTML = '00';
        clock.querySelector('.milliseconds').innerHTML = '00';
      });
    }
  }

  updateClocks();
  const timeinterval = setInterval(updateClocks, 10);
}

const deadline = new Date(Date.parse(new Date()) + 10 * 60 * 1000); // 5 минут
initializeClocks(deadline);

// ************************************************************************

// function getTimeRemaining(endtime) {
//   const t = endtime - new Date().getTime();
//   const seconds = Math.floor((t / 1000) % 60);
//   const minutes = Math.floor((t / 1000 / 60) % 60);
//   const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(t / (1000 * 60 * 60 * 24));
//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function declensionNum(number, words) {
//   if (number > 10 && number < 20) return words[2];
//   const n = number % 10;
//   if (n === 1) return words[0];
//   if (n > 1 && n < 5) return words[1];
//   return words[2];
// }

// function initializeClock(id, endtime) {
//   const clock = document.getElementById(id);
//   const daysSpan = clock.querySelector('.days');
//   const hoursSpan = clock.querySelector('.hours');
//   const minutesSpan = clock.querySelector('.minutes');
//   const secondsSpan = clock.querySelector('.seconds');
//   const daysLabel = clock.querySelector('.days-label');
//   const hoursLabel = clock.querySelector('.hours-label');
//   const minutesLabel = clock.querySelector('.minutes-label');
//   const secondsLabel = clock.querySelector('.seconds-label');

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     daysSpan.innerHTML = ('0' + t.days).slice(-2);
//     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     daysLabel.innerHTML = declensionNum(t.days, ['день', 'дні', 'днів']);
//     hoursLabel.innerHTML = declensionNum(t.hours, [
//       'година',
//       'години',
//       'годин',
//     ]);
//     minutesLabel.innerHTML = declensionNum(t.minutes, [
//       'хвилина',
//       'хвилини',
//       'хвилин',
//     ]);
//     secondsLabel.innerHTML = declensionNum(t.seconds, [
//       'секунда',
//       'секунди',
//       'секунд',
//     ]);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//       daysSpan.innerHTML = '00';
//       hoursSpan.innerHTML = '00';
//       minutesSpan.innerHTML = '00';
//       secondsSpan.innerHTML = '00';
//     }
//   }

//   // updateClock();
//   const timeinterval = setInterval(updateClock, 1000);
// }

// // Укажите дату и время, до которого нужно отсчитывать
// const deadline = new Date('August 25, 2024 10:00:00').getTime();
// initializeClock('countdown-one', deadline);
