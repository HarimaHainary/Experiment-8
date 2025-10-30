// Set the target date and time (Example: December 31, 2025)
const targetDate = new Date("December 31, 2025 23:59:59").getTime();

// Update the countdown every 1 second
const timer = setInterval(function() {
  // Get current date and time
  const now = new Date().getTime();

  // Find the distance between now and target date
  const distance = targetDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("countdown").innerHTML =
    `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  // When countdown reaches zero
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "🎉 Countdown Ended!";
  }
}, 1000);