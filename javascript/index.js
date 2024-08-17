let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let zurichElement = document.querySelector("#zurich");
let zurichDateElement = zurichElement.querySelector(".date");
let zurichTimeElement = zurichElement.querySelector(".time");
let zurichTime = moment().tz("Europe/Zurich");

zurichDateElement.innerHTML = zurichTime.format("MMMM Do YYYY");
zurichTimeElement.innerHTML = zurichTime.format("h:mm:ss [<small>]A[</small>]");
