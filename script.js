const btn = document.getElementById("form-button");
const yearsSpan = document.getElementById("years-number")
const monthsSpan = document.getElementById("months-number")
const daysSpan = document.getElementById("days-number")
const daysInputEl = document.getElementById("day");
const monthsInputEl = document.getElementById("month");
const yearsInputEl = document.getElementById("year");

daysInputEl.addEventListener("keypress",(e)=>{
  if((daysInputEl.value.length==2)||(isNaN(daysInputEl.value)))
  {
    e.preventDefault();
    daysInputEl.classList.add("invalid-input");
  }
})

daysInputEl.addEventListener("focus",()=>{
  if(daysInputEl.classList.contains("invalid-input")){
    daysInputEl.classList.remove("invalid-input")
  }
})

btn.addEventListener("click", () => {
  let day = daysInputEl.value;
  let month = monthsInputEl.value;
  let year = yearsInputEl.value;

  let birthDate = new Date();
  let currentTime = new Date();

  if(!day||!month||!year||(+day>31)||(+month>12)||(+year<1970)||(year>currentTime.getFullYear())){
    alert("Please enter a valid date after January 1st 1970");
    return 0;
  }



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
