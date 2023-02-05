(() => {
    const appKey = '0dab282f348f72b4a3ad5efd0e58ce12';
    const showWeatherBtn = document.getElementById('show');
    const weatherDiv = document.getElementById('weather');

    showWeatherBtn.addEventListener('click', () => {
        const city = document.getElementById('city').value;
        const weatherProm = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appKey}`);
        weatherProm.then(res => res.json())
                    .then(res => weatherDiv.innerText = Math.floor(res.main.temp));
    });
})()