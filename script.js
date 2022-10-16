const input = document.getElementById('city');
const button = document.getElementById('cityButton');

button.addEventListener('click', function(){

    let cityInput = input.value;
    getWeather(cityInput)

})



//function to get weather data based on input
async function getWeather(city){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0fd5cc99b6b27edb9d70e965db3ff28d`);
        const weatherData = await response.json();
        console.log(weatherData);
    }catch(error){
        console.log(error)
    }
    
}

