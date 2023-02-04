var endDate = new Date("Nov 22, 2023 10:10:00").getTime();
var timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = ("0" + hours).slice(-2);

    document.getElementById("minutes").textContent = ("0" + minutes).slice(-2);

    document.getElementById("seconds").textContent = ("0" + seconds).slice(-2);
  } else {
    document.getElementById("count-down-timer").textContent =
      "Event has been started.";
  }
}, 1000);
