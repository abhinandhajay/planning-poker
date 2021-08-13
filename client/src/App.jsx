import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Planning from "./pages/Planning";
import NavBar from "./components/NavBar";


function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/:id">
						<NavBar />
						<Planning />
					</Route>
					<Route path="/">
						<NavBar />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
