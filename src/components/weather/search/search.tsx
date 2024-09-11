import { useState } from "react";
import Result from "../result/result";

export default function Search() {
	let [city, setCity] = useState("");

	async function onSubmit(e: any) {
		e.preventDefault();
		let cityInput = e.target.value;
		console.log(cityInput);
		let resp = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1f0b9e0659b64e4a75395bc9df2d8e7`
		).then((res) => res.json());
	}

	
	return (
		<>
			{city === "" ? (<form onSubmit={onSubmit}>
				<label htmlFor="city">
					<input
						onChange={(e) => setCity(e.target.value)}
						value={city}
						type="text"
						name="city"
						id="city"
						placeholder="City Name"
						required
					/>
				</label>
				<button type="submit">🔍</button>
			</form>): <Result />}
			
		</>
	);
}
