const btn = document.getElementById("form-button");
const yearsSpan = document.getElementById("years-number")
const monthsSpan = document.getElementById("months-number")
const daysSpan = document.getElementById("days-number")

btn.addEventListener("click", () => {
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;



  let birthDate = new Date();
  let currentTime = new Date();

  birthDate.setFullYear(year,month-1,day);

  const ms = currentTime.getTime() - birthDate.getTime();
  const nrOfDays=ms/86400000

  const yearsDisplayVal=nrOfDays/365.24;
  yearsSpan.innerHTML=Math.floor(yearsDisplayVal);

  const monthsDisplayVal = (yearsDisplayVal - Math.floor(yearsDisplayVal))*12;
  monthsSpan.innerHTML = Math.floor(monthsDisplayVal);

  const daysDisplayVal = (monthsDisplayVal - Math.floor(monthsDisplayVal))*30;
  daysSpan.innerHTML = Math.floor(daysDisplayVal);
});
