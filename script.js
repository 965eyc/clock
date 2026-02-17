'use strict';

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = (hours / 12) * 360;

  document.getElementById('second-hand').style.transform =
    `rotate(${secondDeg}deg)`;
  document.getElementById('minute-hand').style.transform =
    `rotate(${minuteDeg}deg)`;
  document.getElementById('hour-hand').style.transform =
    `rotate(${hourDeg}deg)`;
}

document.addEventListener('DOMContentLoaded', () => {
  setClock();
  setInterval(setClock, 50);

  document.querySelectorAll('.bubble').forEach((bubble) => {
    bubble.addEventListener('click', function popBubble() {
      this.classList.add('pop');
      this.addEventListener('animationend', () => this.remove(), { once: true });
    });
  });
});