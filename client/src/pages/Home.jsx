/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, TextField, Typography } from '@material-ui/core';
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
		marginBottom: '4rem',
		textAlign: 'center',
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
	const history = useHistory();
	const [code, setCode] = useState('');

	const hostClickHandler = (value) => {
		// randomly generate a 4 character string
		const randomString = Math.random().toString(36).substring(2, 6);
		setCode(randomString);
		history.push(`/${randomString}`);

	};

	const handleCodeFieldChange = (event) => {
		setCode(event.target.value);
	};

	const joinClickHandler = () => {
		history.push(`/${code}`);
	};

	

	useEffect(() => {
		// console.log(name);
	}, []);

	return (
		<Container className={classes.root}>
			<Typography variant="h2" className={classes.title} onClick={() => history.push(`/`)}>
				Planning Poker
			</Typography>
			<Box display="flex" flexDirection="column" alignItems="center">
				<Box m={1} mb={4}>
					<Button size="large" variant="contained" onClick={hostClickHandler}>
						Host Game
					</Button>
				</Box>
				<Box m={1} mb={4}>
					<Typography variant="subtitle1">
						or
					</Typography>
				</Box>
				<Box m={1}>
					<TextField label="Enter Code" variant="outlined" color="secondary" onChange={handleCodeFieldChange} />
				</Box>
				<Box m={1}>
					<Button size="large" variant="contained" color="secondary" onClick={joinClickHandler}>
						Join Game
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

