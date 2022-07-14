const key = "7ae5aa41a61cb8d407162034b8f40c32";
const select = document.querySelector(".dropdown-style");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon1");
const weatherType = document.querySelector(".weather-type");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");


const kelvinToCelsius = (degrees) => {
    const celsius = degrees -  273.15;
    return celsius.toFixed(0);
};

  let data = [];

   const getCities = () => {
    fetch(`cities.json`, {
        method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
                const option = document.createElement("option");
                option.text = city.name;
                option.value = city.id;
                if(city.id === 683506) {
                    option.setAttribute("selected", true);
                }
                select.appendChild(option);
            })
        })
        .catch(function (error) {
        console.log('Request failed', error);
        }); 
  }

  const getWeather = (cityId=683506) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`, {
    method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        temp.innerText = kelvinToCelsius(data.main.temp) + '\xB0C';
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherType.innerText = data.weather[0].description;
        wind.innerText = `${data.wind.speed} m/s`;
        humidity.innerText = `${data.main.humidity} %`;
        
    console.log('Success:', data);
    })
    .catch(function (error) {
    console.log('Request failed', error);
    });
  }

  function cityBackground(cityID='683506') {
    if (cityID === '683506') {
        document.body.style.backgroundImage = "url('https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2020-04/parliament_palace_bucharest_-_photo_calin_stan_-_dreamstime.com_.jpg')";
        console.log( 'Bucharest' );
        document.body.style.backgroundPosition = "center";
    } else if (cityID === '686253'){
        document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Arad_%2829586363764%29.jpg/1200px-Arad_%2829586363764%29.jpg')";
      console.log( 'Arad' );
      document.body.style.backgroundPosition = "center";
    }
    else if (cityID === '1726701'){
        document.body.style.backgroundImage = "url('https://expressdebanat.ro/wp-content/uploads/2019/10/barcelona.jpg')";
      console.log( 'Barcelona' );
    }
    else if (cityID === '2618425'){
        document.body.style.backgroundImage = "url('https://media.cntraveler.com/photos/5bfdb12a1b3466234d8136c5/16:9/w_4991,h_2807,c_limit/GettyImages-1045586638.jpg')";
      console.log( 'Copenhaga' );
      document.body.style.backgroundPosition = "center";
    }
    else if (cityID === '2950158'){
        document.body.style.backgroundImage = "url('https://xplorer.ro/wp-content/uploads/2021/12/Obiective-turistice-Berlin.jpg')";
      console.log( 'Berlin' );
      document.body.style.backgroundPosition = "center";
    }
    else {
        document.body.style.backgroundImage = "url('http://res.cloudinary.com/simpleview/image/upload/v1622206643/clients/newyorkstate/2000_x_797_web_hero_skyline_2_6b921811-cd45-42fd-990a-ba60c7fba1f0.jpg')";
      console.log( 'NYC' );
    }
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
/*
  const getBackgroundImage = (cityId=683506) => {
    fetch(`cities.json`, {
        method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
            if(cityId === city.id)
            document.body.style.backgroundImage ="url('city.reference')";
            })
        })
    }    
*/
  getCities();
  cityBackground();
  getWeather();


  select.addEventListener("change", function(e) {
      cityId = e.target.value;
      console.log(cityId); 
      cityBackground(cityId);
      getWeather(cityId);
  })


  /*
document.body.style.backgroundImage = "url('https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2020-02/bucegi_mountains_seen_from_downtown_bucharest_dan_mihai_balanescu_facebook_page.jpg')";

api.openweathermap.org/data/2.5/forecast/daily?id={cityID}&cnt={1}&appid={key}
https://api.openweathermap.org/data/2.5/forecast/daily?id=${cityID}&cnt=${1}&appid=${key}`
  fetch('cities.json')
  .then(response => response.json())
  .then(data => console.log(data));

  /*
  async function getCities() {
    let url = 'cities.json';
    try {
        let res = await fetch(url);
        console.log(res.json())
    } catch (error) {
        console.log(error);
    }
}
  
getCities();
*/