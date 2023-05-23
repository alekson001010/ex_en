document.addEventListener("DOMContentLoaded", () => {
  let time = 900;
  const countDownEl = document.getElementById("time");

  setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;

    if (time < 0) time = 0;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  Array.from(document.querySelectorAll(".accordeon__item"));
  var t = document.querySelector(".accordeon__body");
  document
    .querySelector(".accordeon button")
    .addEventListener("click", function () {
      var e = document.querySelector(".accordeon__item");
      e.remove(), t.insertAdjacentElement("beforeend", e);
    }),
    t.addEventListener("click", function (e) {
      e.target.closest(".accordeon__item") &&
        ((e = e.target.closest(".accordeon__item")).remove(),
        t.insertAdjacentElement("afterbegin", e));
    });
});
