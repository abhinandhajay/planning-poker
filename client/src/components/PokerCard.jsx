import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 70,
		minHeight: 100,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '10px',
		transition: 'all 0.2s',
		cursor: 'pointer',
		'&:hover': {
			// boxShadow: '0px 5px 10px #518F90',
			transform: 'scale(1.1)',
		},
	},
});

export default function PokerCard(props) {
	const classes = useStyles();

	return (
		<Card raised className={classes.root} onClick={() => props.cardClickHandler(props.children)}>
			<CardContent className="hover">
				<Typography variant="h3" align="center">
					{ props.children }
				</Typography>
			</CardContent>
		</Card>
	);
}
