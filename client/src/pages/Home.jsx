import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
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

export default function Home() {
	const classes = useStyles();
	const history = useHistory()
	const [, setCode] = useState('');

	const hostClickHandler = (value) => {
		// randomly generate a 4 character string
		const randomString = Math.random().toString(36).substring(2, 6);
		setCode(randomString);
		history.push(`/${randomString}`);

	};

	const joinClickHandler = (value) => {
		console.log("Join game")
	};

	return (
		<Container className={classes.root}>
			<Typography variant="h2" className={classes.title} onClick={() => history.push(`/`)}>
				Planning Poker
			</Typography>
			<Box display="flex">
				<Box m={2}>
					<Button variant="contained" onClick={hostClickHandler}>
						Host Game
					</Button>
				</Box>
				<Box m={2}>
					<Button variant="contained" color="secondary" onClick={joinClickHandler}>
						Join Game
					</Button>
				</Box>
			</Box>

		</Container>
	);
}

