import got from "got";

export default function SearchBar() {
	async function onSubmit(e: any) {
		e.preventDefault();
		let cityInput = e.target.value;
		let resp = await got(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f1f0b9e0659b64e4a75395bc9df2d8e7`
		);
		console.log(resp);
	}

	return (
		<>
			<form onSubmit={onSubmit}>
				<label htmlFor="city">
					<input type="text" name="city" id="city" placeholder="City Name" required />
				</label>
				<button type="submit">🔍</button>
			</form>
		</>
	);
}
