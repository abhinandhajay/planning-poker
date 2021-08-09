import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Planning from "./pages/Planning";


function App() {

	return (
		<Router>
			<div>
				<Switch>
					<Route path="/:id">
						<Planning />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
