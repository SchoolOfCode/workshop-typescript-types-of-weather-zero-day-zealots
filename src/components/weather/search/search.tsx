import { useState } from "react";
import Result from "../result/result";

export default function Search() {
	let [city, setCity] = useState<string>("");
	let [displayResult, setDisplayResult] = useState<boolean>(false);
	let [data, setData] = useState<any>(null)

	async function onSubmit(e: any) {
		e.preventDefault();
		let resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f1f0b9e0659b64e4a75395bc9df2d8e7`
		).then((res) => res.json());
		setData(resp);
		setDisplayResult(true)
	}


	return (
		<>
			{displayResult ? <Result data={data} /> :
				(<form className="w-full max-w-xl flex mx-auto p-20 text-xl" onSubmit={onSubmit}>

					<input
						onChange={(e) => setCity(e.target.value)}
						value={city}
						className="w-full placeholder-gray-400 text-gray-900 p-4"
						type="text"
						name="city"
						id="city"
						placeholder="City Name"
						required
					/>

					<button className="bg-white p-4" type="submit">🔍</button>
				</form>)
			}

		</>
	);
}
