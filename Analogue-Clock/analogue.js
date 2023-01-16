const deg = 6;
const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondsHand = document.querySelector("#seconds-hand");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
