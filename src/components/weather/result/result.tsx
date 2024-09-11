import ResultError from "./result_error/result_error"
import ResultForecast from "./result_forecast/result_forecast"


export default function Result(props: any) {
    const { data } = props;


    return (
        <>
            <ResultForecast data={data} />
        </>
    )
}