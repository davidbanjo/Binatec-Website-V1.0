/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Set the initial countdown time (9 hours, 23 minutes, 12 seconds)
const initialCountdown = {
    hours: 9,
    minutes: 23,
    seconds: 12
  };

  // Calculate the target date and time
  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setHours(currentDate.getHours() + initialCountdown.hours);
  targetDate.setMinutes(currentDate.getMinutes() + initialCountdown.minutes);
  targetDate.setSeconds(currentDate.getSeconds() + initialCountdown.seconds);

  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `0${hours} : ${minutes} : ${seconds}`;
    } else {
      document.getElementById('countdown').innerHTML = 'Countdown expired!';
    }
  }

  // Update the countdown every second
  setInterval(updateCountdown, 1000);

  // Initial call to set the initial countdown
  updateCountdown();
