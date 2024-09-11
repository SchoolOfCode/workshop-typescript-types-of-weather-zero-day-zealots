

export default function ResultForecast(data: any) {
    console.log(data)
    const currentTemp = Math.floor(data.data.main.temp)
	const maxTemp = Math.floor(data.data.main.temp_max)
	const minTemp = Math.floor(data.data.main.temp_min)
    
    return (
        <>
            <h3>Result Forecast</h3>
            <div>
                <p>Current Temperature: {currentTemp}°C <img src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} alt="" /></p>
                <p>Max Temperature: {maxTemp}°C</p>
                <p>Min Temperature: {minTemp}°C</p>

            </div>
        </>
    )
}