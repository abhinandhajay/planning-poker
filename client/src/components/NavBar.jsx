import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import getName from "name_generator";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		cursor: 'pointer',
	},
}));


const capitalize = (s) => {
	if (typeof s !== 'string') return ''
	return s.charAt(0).toUpperCase() + s.slice(1)
}

const generateName = () => {
	const randomName = getName();
	return `${capitalize(randomName.split('_')[0])} ${capitalize(randomName.split('_')[1])}`
}

export default function PokerCard(props) {
	const classes = useStyles();
	const history = useHistory();
	const [name,] = useState(localStorage.getItem('name') || localStorage.setItem('name', generateName()));
	

	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" className={classes.title} onClick={() => history.push(`/`)}>
					Planning Poker
				</Typography>
				<Button color="inherit">Name: {name}</Button>
			</Toolbar>
		</AppBar>
	);
}









