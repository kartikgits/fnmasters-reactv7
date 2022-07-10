import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

// Use PARCEL for production (preferably for development also)

const App = () => {
	return (
		<div>
			<h1>Adopt Me!</h1>
			<SearchParams />
		</div>
	)
}

render(<App />, document.getElementById("root"));