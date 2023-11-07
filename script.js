const btn = document.getElementById("form-button");
const yearsSpan = document.getElementById("years-number")
const monthsSpan = document.getElementById("months-number")
const daysSpan = document.getElementById("days-number")
const daysInputEl = document.getElementById("day");
const monthsInputEl = document.getElementById("month");
const yearsInputEl = document.getElementById("year");
const errorDayEl = document.getElementById("error-day");
const errorMonthEl = document.getElementById("error-month");
const errorYearEl = document.getElementById("error-year");
const labelDayEl = document.getElementById("label__day");
const labelMonthEl = document.getElementById("label__month");
const labelYearEl = document.getElementById("label__year");

daysInputEl.addEventListener("keypress",(e)=>{
  if((daysInputEl.value.length==2)||(isNaN(daysInputEl.value)))
  {
    e.preventDefault();
  }
});
daysInputEl.addEventListener("focus",()=>{
  if(daysInputEl.classList.contains("invalid-input")){
    daysInputEl.classList.remove("invalid-input");
  }
  if(errorDayEl.classList.contains("invalid-text")){
    daysInputEl.classList.remove("invalid-text");
  }
  if(labelDayEl.classList.contains("invalid-text")){
    labelDayEl.classList.remove("invalid-text");
  }
  errorDayEl.innerHTML = ".";
});

monthsInputEl.addEventListener("keypress",(e)=>{
  if((monthsInputEl.value.length==2)||(isNaN(monthsInputEl.value)))
  {
    e.preventDefault();
  }
});
monthsInputEl.addEventListener("focus",()=>{
  if(monthsInputEl.classList.contains("invalid-input")){
    monthsInputEl.classList.remove("invalid-input");
  }
  if(errorMonthEl.classList.contains("invalid-text")){
    monthsInputEl.classList.remove("invalid-text");
  }
  if(labelMonthEl.classList.contains("invalid-text")){
    labelMonthEl.classList.remove("invalid-text");
  }
  errorMonthEl.innerHTML = ".";
});

yearsInputEl.addEventListener("keypress",(e)=>{
  if((yearsInputEl.value.length==4)||(isNaN(yearsInputEl.value)))
  {
    e.preventDefault();
  }
});
yearsInputEl.addEventListener("focus",()=>{
  if(yearsInputEl.classList.contains("invalid-input")){
    yearsInputEl.classList.remove("invalid-input");
  }
  if(errorYearEl.classList.contains("invalid-text")){
    yearsInputEl.classList.remove("invalid-text");
  }
  if(labelYearEl.classList.contains("invalid-text")){
    labelYearEl.classList.remove("invalid-text");
  }
  errorYearEl.innerHTML = ".";
});

btn.addEventListener("click", () => {
  let day = daysInputEl.value;
  let month = monthsInputEl.value;
  let year = yearsInputEl.value;
  let err = false;
  let birthDate = new Date();
  let currentTime = new Date();

  if(!day){
    errorDayEl.innerHTML = "This field is required";
    errorDayEl.classList.add("invalid-text");
    labelDayEl.classList.add("invalid-text");
    daysInputEl.classList.add("invalid-input");
    err=true;
  }
  if(day<1||day>31){
    errorDayEl.innerHTML = "Must be a valid day";
    errorDayEl.classList.add("invalid-text");
    labelDayEl.classList.add("invalid-text");
    daysInputEl.classList.add("invalid-input");
    err=true;
  }

  if (!month) {
    errorMonthEl.innerHTML = "This field is required";
    errorMonthEl.classList.add("invalid-text");
    labelMonthEl.classList.add("invalid-text");
    monthsInputEl.classList.add("invalid-input");
    err=true;
  }
  if (month<1||month>12) {
    errorMonthEl.innerHTML = "Must be a valid month";
    errorMonthEl.classList.add("invalid-text");
    labelMonthEl.classList.add("invalid-text");
    monthsInputEl.classList.add("invalid-input");
    err=true;
  }

  if (!year) {
    errorYearEl.innerHTML = "This field is required";
    errorYearEl.classList.add("invalid-text");
    labelYearEl.classList.add("invalid-text");
    yearsInputEl.classList.add("invalid-input");
    err=true;
  }
  if (year>currentTime.getFullYear()) {
    errorYearEl.innerHTML = "Must be in the past";
    errorYearEl.classList.add("invalid-text");
    labelYearEl.classList.add("invalid-text");
    yearsInputEl.classList.add("invalid-input");
    err=true;
  }

  if(((+month===1||+month===3||+month===5||+month===7||+month===10+month===12)&&(day>31))||((+month===4||+month===6||+month===9||+month===11)&&(day>30))||((+month===2)&&(day>29))){
    err=true;
    errorDayEl.innerHTML = "Must be a valid date";
    errorDayEl.classList.add("invalid-text");
    labelDayEl.classList.add("invalid-text");
    daysInputEl.classList.add("invalid-input");
  }

  if(err){return;}

  birthDate.setFullYear(year,month-1,day);

  const ms = currentTime.getTime() - birthDate.getTime();
  const nrOfDays=ms/86400000;

  const yearsDisplayVal=nrOfDays/365.24;
  yearsSpan.innerHTML=Math.floor(yearsDisplayVal);

  const monthsDisplayVal = (yearsDisplayVal - Math.floor(yearsDisplayVal))*12;
  monthsSpan.innerHTML = Math.floor(monthsDisplayVal);

  const daysDisplayVal = (monthsDisplayVal - Math.floor(monthsDisplayVal))*30;
  daysSpan.innerHTML = Math.floor(daysDisplayVal);
});
