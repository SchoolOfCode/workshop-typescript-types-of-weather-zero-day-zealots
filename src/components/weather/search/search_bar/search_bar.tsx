import { useReducer } from "react";

// const intitialState = {
//     date: {
//         city: string,
//         postcode: string,
//     }
// }

export default function SearchBar() {

    function onSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        e.preventDefault();
        let cityInput = e.target.value
    }

    // `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f1f0b9e0659b64e4a75395bc9df2d8e7`

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="city">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City Name"
                        onChange={handleChange}
                        required
                    />
                </label >
                <button type="submit"
                >🔍</button>
            </form >
        </>
    )
}