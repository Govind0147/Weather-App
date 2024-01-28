const apiKey = "d723d7ce6ff1e2750e18336ecf36d1fe"
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'

let search = document.querySelector("#search");
let temprature = document.querySelector("h2");
let windspeed = document.querySelector("#windspeed");
let humidity = document.querySelector("#humidity-percent");
let input = document.querySelector("input");
let city = document.querySelector(".cityname")



search.addEventListener("click", () => {
    checkWeather();
})

async function checkWeather(){
    let cityname = document.querySelector("#cityname").value;
    const response = await fetch(url + `q=${cityname}&appid=${apiKey}`)
    let data = await response.json();
    if(data.message === 'city not found'){
        input.value = ''
        input.placeholder = 'Enter a valid city name'
    }else{
        temprature.innerHTML = `${Math.floor(data.main.temp)}<sup>o</sup>C`
        windspeed.innerHTML = `${Math.round(data.wind.speed)} km/h`
        humidity.innerHTML = `${Math.round(data.main.humidity)} %`
        city.innerText = `${data.name}`
    }
}