const button = document.getElementById('search-btn');
const inputElm = document.getElementById('input-box');

const cityName = document.getElementById('city-name')
const cityTime = document.getElementById('city-time')
const cityTemp = document.getElementById('city-temp')

async function getData(city) {
    const apiUrl = await fetch (`http://api.weatherapi.com/v1/current.json?key=69f08d16f2024ac3b7e180601261409&q=${city}&aqi=yes`);
    
    return await apiUrl.json();
}

button.addEventListener('click', async () => {
    const value = inputElm.value;
    const result = await getData(value);
    console.log(result)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
}) 