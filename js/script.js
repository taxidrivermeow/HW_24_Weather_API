(() => {
    const appKey = '0dab282f348f72b4a3ad5efd0e58ce12';

    $('#show').on('click', () => {
        const city = $('#city').val().trim();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appKey}`;
        const settings = {
            success: (response)=>{
                $('#weather').text(Math.floor(response.main.temp));
            },
            error: (err)=>{
                console.log(err);
            }
        };

        $.ajax(url, settings).done(()=>{});

    });
})()