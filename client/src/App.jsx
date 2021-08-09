import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import './App.css';
import PokerCard from "./components/PokerCard";

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
function App() {
	const classes = useStyles();
	const sequence = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 'inf'];

	const [selectedCard, setSelectedCard] = useState("...");

	const cardClickHandler = (value) => {
		setSelectedCard(value);
	};

	const cardResetHandler = (value) => {
		setSelectedCard('...');
	};

	return (
		<Container className={ classes.root }>
			<Typography variant="h1" component="h1">
				Planning Poker
			</Typography>
			<PokerCard cardClickHandler={cardResetHandler}>
				{selectedCard}
			</PokerCard>
			<Typography variant="subtitle1" component="h1">
				Selected Card
			</Typography>
			<Box display="flex">
				{sequence.map((value, index) => (
					<PokerCard key={index} cardClickHandler={cardClickHandler}>
						{value}
					</PokerCard>
				))}
			</Box>

		</Container>
	);
}

export default App;
