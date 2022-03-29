
   const dom_selectors = {
       search_text : document.querySelector('.search-bar'),
       search_form: document.querySelector('.search-form'),
       weather_container: document.querySelector('.weather'),
       res:[]
   }
   dom_selectors.search_form.addEventListener("submit", (e) =>{
       e.preventDefault()
       dom_selectors.search_text = document.querySelector('.search-bar').value
       fetch_weather(dom_selectors.search_text)
   })

   let fetch_weather= (city)=>{
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=' + 'c563a4179b155adcbd4bb75946fe86ab')
        .then(res => {return res.json()})
        .then(data => {return data})
        .then(result => {
            return render(result)
        })
    }

    render = (datas) =>{
        const {name} = datas
        const {icon, description} = datas.weather[0]
        const {temp,humidity} = datas.main
        const {speed} = datas.wind

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
          "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
    }

    fetch_weather('San Francisco')
    // let display_weather = (data)=>{
    //     const{name}= data;
    //     const {icon,description} =data.weather[0]
    //     const {temp, humidity} = data.main
    //     const {speed} = data.wind
    //     console.log(name, icon, description, temp, humidity,speed)
    // }



