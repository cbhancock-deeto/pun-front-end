import React, { useState, useEffect } from "react";
import {
	Grid,
	Button,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	heading: {
		fontWeight: "600",
		paddingBottom: 70,
		fontSize: "2rem",
	},
	container: {
		backgroundColor: "#e7dfd5",
		fontFamily: "Verdana, Geneva, sans-serif",
		top: "200",
		textAlign: "center",
		height: "100vh",
		margin: 0,
	},
	joke: { paddingTop: 80 },
}));

function App() {
	const [randomJoke, setRandomJoke] = useState("");
	const [jokeArr, setJokeArr] = useState([]);

	useEffect(() => {
		const apiURL =
			"https://calm-stream-56867.herokuapp.com/jokes";
		fetch(apiURL)
			.then(response => response.json())
			.then(data => setJokeArr(data));
	}, []);

	const randomJokeHandler = () => {
		let randVal = Math.random() * jokeArr.length;
		let wholeRandom = Math.floor(randVal);
		setRandomJoke(jokeArr[wholeRandom].joke);
	};

	const classes = useStyles();
	return (
		<Grid
			container
			className={classes.container}
			direction='column'
			alignItems='center'
			justify='center'>
			<Grid item className={classes.heading}>
				Welcome to the Punny API!
			</Grid>
			<Grid item>
				*Please allow a moment for the application to
				connect to the database*
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					onClick={randomJokeHandler}
					className={classes.button}>
					Random Joke
				</Button>
			</Grid>
			<Grid item className={classes.joke}>
				<Typography>{randomJoke}</Typography>
			</Grid>
		</Grid>
	);
}

export default App;
