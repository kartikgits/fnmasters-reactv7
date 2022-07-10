import { render } from "react-dom";
import { BrowserRouter, Routs, Route, Routes, Link } from "react-router-dom";
import { StrictMode } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

// Use PARCEL for production (preferably for development also)

const App = () => {
	return (
		<StrictMode>
			<BrowserRouter>
				<header>
					<Link to="/">Adopt Me!</Link>
				</header>
				<Routes>
					<Route path="/details/:id" element={<Details />} />
					<Route path="/" element={<SearchParams />} />
				</Routes>
			</BrowserRouter>
		</StrictMode>
	)
}

render(<App />, document.getElementById("root"));