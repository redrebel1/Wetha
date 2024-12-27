let weather = {
    apiKey: "735b8894547c36a42daf26013a2ce57c",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=735b8894547c36a42daf26013a2ce57c"
        ).then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max  } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed,temp_min,temp_max);
        document.querySelector(".placename").innerText = name;
        document.querySelector(".caption").innerText = description;
        document.querySelector(".degrees").innerText = Math.round(temp) +"°C";
        document.querySelector(".mintemp").innerText =  "Min :" +temp_min +"°C";
        document.querySelector(".maxtemp").innerText = "Max :" + temp_max +"°C";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ cloudy + "')"

    },

    search: function () {
       this.fetchWeather (document.querySelector(".searchbox").value); 
    }

};

document
.querySelector(".searchbtn")
.addEventListener("click", function() {
    weather.search();


    
})

document.querySelector(".searchbox")
.addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});

