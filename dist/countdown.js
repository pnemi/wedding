function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    days = parseInt(timeRemaining / 86400);
    timeRemaining = timeRemaining % 86400;

    hours = parseInt(timeRemaining / 3600);
    timeRemaining = timeRemaining % 3600;

    minutes = parseInt(timeRemaining / 60);
    timeRemaining = timeRemaining % 60;

    seconds = parseInt(timeRemaining);

    document.querySelector(".days").innerHTML = parseInt(Math.abs(days), 10);
    document.querySelector(".hours").innerHTML = ("0" + Math.abs(hours)).slice(
      -2
    );
    document.querySelector(".minutes").innerHTML = (
      "0" + Math.abs(minutes)
    ).slice(-2);
    document.querySelector(".seconds").innerHTML = (
      "0" + Math.abs(seconds)
    ).slice(-2);
    setTimeout(calculate, 1000);
  }

  calculate();
}
