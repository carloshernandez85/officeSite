const countdown = document.querySelector('.countdown-wrapper');

// Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2020 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div class="days">${days}<span>Days</span></div> 
  <div class="bottom-grid">
  <div class="hours">${hours}<span>Hours</span></div>
  <div class="mins">${mins}<span>Minutes</span></div>
  <div class="seconds">${seconds}<span>Seconds</span></div>
  </div>

  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
