import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import PokerCard from "../components/PokerCard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh'
	},
	title: {
		marginBottom: '2rem',
		cursor: 'pointer',
		'&:hover': {
			color: '#C6CFF8'
		}
	},
	selectedCard: {
		margin: '2rem',
		marginTop: '0.5rem',
	},
});

export default function Planning() {
	const classes = useStyles();
	const history = useHistory();
	const sequence = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', 'inf'];

	const [selectedCard, setSelectedCard] = useState("...");

	const cardClickHandler = (value) => {
		setSelectedCard(value);
	};

	const cardResetHandler = (value) => {
		setSelectedCard('...');
	};

	return (
		<Container className={classes.root}>
			<Typography variant="h2" className={classes.title} onClick={() => history.push(`/`)}>
				Planning Poker
			</Typography>
			<PokerCard cardClickHandler={cardResetHandler}>
				{selectedCard}
			</PokerCard>
			<Typography variant="subtitle1" className={classes.selectedCard}>
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

