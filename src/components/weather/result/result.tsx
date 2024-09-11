import ResultError from "./result_error/result_error"
import ResultForecast from "./result_forecast/result_forecast"

export default function Result() {

    return (
        <>
            <h2>Result</h2>
            <ResultError />
            <ResultForecast />
        </>
    )
}