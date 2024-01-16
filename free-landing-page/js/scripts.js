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



  function submitForm() {
    // Get the form element
    document.getElementById("form-errors").innerText = "";
    let errors = []

    // Get the values from form elements
    const firstNameValue = document.getElementById('firstName').value;
    const lastNameValue = document.getElementById('lastName').value;
    const emailValue = document.getElementById('email').value;
    const companyValue = document.getElementById('company').value;
    const websiteValue = document.getElementById('website').value;
    const industryValue = document.getElementById('industry').value;
    const specificationsValue = document.getElementById('specifications').value;

    
    // Do something with the values (for example, log them)
    console.log('here1= ', firstNameValue)
    if(!firstNameValue){
      errors.push("First name ")
    }
    if(!lastNameValue){
      errors.push("Last name ")
    }
    if(!emailValue){
      errors.push("Email ")
    }
    if(!companyValue){
      errors.push("Company name ")
    }

    
    // Check if the form is valid before submitting
    if (firstNameValue && lastNameValue && emailValue && companyValue) {
      // Submit the form

      var templateParams = {
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: emailValue,
        company_name: companyValue,
        website: websiteValue,
        industry: industryValue,
        specifications: specificationsValue
      };
    
      emailjs.send('service_5kk52of', 'template_do08q1d', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        
        document.getElementById("form-success").innerText = `Form submitted successfully!!! :)`;

        setTimeout(function() {
          document.getElementById("form-success").innerText = "";
        }, 10000);

        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('company').value = "";
        document.getElementById('website').value = "";
        document.getElementById('industry').value = "";
        document.getElementById('specifications').value = "";
      }, function(error) {
         console.log('FAILED...', error);
         document.getElementById("form-errors").innerText = `An error has occured, please try again :(`;
      });

    } else {
      if(errors.length > 1){
        document.getElementById("form-errors").innerText = `${errors} are required`;
      }else{
        document.getElementById("form-errors").innerText = `${errors} is required`;
      }
    }

  }


  