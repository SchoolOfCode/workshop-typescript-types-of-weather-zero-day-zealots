import styles from './result_forecast.module.css'

export default function ResultForecast(data: {}) {
    console.log(data)
    const currentTemp = Math.floor(data.data.main.temp)
    const maxTemp = Math.floor(data.data.main.temp_max)
    const minTemp = Math.floor(data.data.main.temp_min)

    return (
        <>
            <div className={styles.resultWrapper}>
                <div className={styles.tempMain}>
                    <img src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} alt="" />
                    <div className={styles.tempMainText}>
                        <p className={styles.tempMainTitle}>Current Temperature: </p>
                        <h1 className={styles.tempMainValue}>{currentTemp}°C</h1>
                    </div>
                </div>
                <div class={styles.tempExtraText}>
                    <span>Max Temperature: {maxTemp}°C</span>
                    <span>Min Temperature: {minTemp}°C</span>
                </div>

            </div>
        </>
    )
}