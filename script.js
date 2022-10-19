const main = document.getElementById('weatherinfo')


const input = document.getElementById('city');
const button = document.getElementById('cityButton');

button.addEventListener('click', function(){

    let cityInput = input.value;
    getWeather(cityInput);

})


function kelvinToFarenheit(kelvin){
    let farenheit = ((kelvin - 273.15) * 1.8) + 32;
    return farenheit
}


function weatherDOM(weather){

    let coords = `Coordinates: ${weather['coord']['lat']} ${weather['coord']['lon']}`;

    let temperatureKelvin = weather['main']['temp'];
    let temperature = `Temperature: ${Math.round(kelvinToFarenheit(temperatureKelvin))}`;

    let temperatureFeelsLike = `Feels Like: ${Math.round(kelvinToFarenheit(weather['main']['feels_like']))}`;

    let name = `${weather['name']}, ${weather['sys']['country']}`;

    let weatherDict = weather['weather']['0'] ;
    let weatherSummary = `${weatherDict['main']}, ${weatherDict['description']}`;

    let coordsHTML = document.createElement('div');
    coordsHTML.setAttribute('class', 'weatherElement');
    coordsHTML.textContent = coords
    
    let temperatureHTML = document.createElement('div');
    temperatureHTML.setAttribute('class', 'weatherElement');
    temperatureHTML.textContent = temperature;

    let temperatureFeelsLikeHTML = document.createElement('div');
    temperatureFeelsLikeHTML.setAttribute('class', 'weatherElement');
    temperatureFeelsLikeHTML.textContent = temperatureFeelsLike;

    let nameHTML = document.createElement('div');
    nameHTML.setAttribute('class', 'weatherElement');
    nameHTML.textContent = name;

    let weatherSummaryHTML = document.createElement('div');
    weatherSummaryHTML.setAttribute('class', 'weatherElement');
    weatherSummaryHTML.textContent = weatherSummary;

    main.append(nameHTML, weatherSummaryHTML, temperatureHTML, temperatureFeelsLikeHTML, coordsHTML)





}



//function to get weather data based on input
async function getWeather(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0fd5cc99b6b27edb9d70e965db3ff28d`);
        const weatherData = await response.json();
        weatherDOM(weatherData);
    }catch(error){
        console.log('error');
        console.log(error);
    }
    
}

