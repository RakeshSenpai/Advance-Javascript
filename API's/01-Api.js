const button = document.getElementById('search-btn');
const inputElm = document.getElementById('input-box');

async function getData(city) {
    const ApiUrl = await fetch (`http://api.weatherapi.com/v1/current.json?key=69f08d16f2024ac3b7e180601261409&q=${city}&aqi=yes`);
    
    
}