let weather = {
  apiKey: "e157e72605f716d0074d0fa65786cb59",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      //here we made the funtion in which we use api link

      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
      // here we take data from api and give it to function display weather   

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed)
    // here we take all the data from the api and make it constant value 


    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").scr = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temprature").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind: " + speed + "Km/h";
    // via using query selector we target the data that we get from the api (openweather) and put it on the class file  

    document.querySelector(".weather").classList.remove("loading");
    // this line is added  to replace the blank with loading when your site is loading

    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    // here we target the  backgroundImage vai using unsplash.com with standerd size here we use name for city image  
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key == "enter") {
    weather.search();
  }
});

weather.fetchWeather("Kolkata");

// this function is use for default weather in kolkata
// here we have reuse weather (function) then fetchWeather (function) and city

//https://api.openweathermap.org/data/2.5/weather?q=kolkata&units=metric&appid=e157e72605f716d0074d0fa65786cb59