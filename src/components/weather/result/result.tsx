import ResultError from "./result_error/result_error"
import ResultForecast from "./result_forecast/result_forecast"


export default function Result(props: any) {
	const { data } = props;
	const currentTemp = Math.floor(data.main.temp)
	const maxTemp = Math.floor(data.main.temp_max)
	const minTemp = Math.floor(data.main.temp_min)

	return (
        <>
            <h2>Result</h2>
						<div>Today it is {currentTemp}° with a high of {maxTemp}° and a low of {minTemp}°</div>
            <ResultForecast />
        </>
    )
}