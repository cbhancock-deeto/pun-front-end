import React, { useState } from "react";
import JokeSuggestion from "./components/JokeSuggestion";
import { Grid, Button } from "@material-ui/core";

function App() {
	const [randomJoke, setRandomJoke] = useState("testy");

	const randomJokeHandler = () => {
		let testText = "a random joke";
		setRandomJoke(testText);
	};

	// const getAJoke = () => {
	// 	fetch("https://example.com/profile", {
	// 		method: "POST", // or 'PUT'
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			console.log("Success:", data);
	// 		})
	// 		.catch(error => {
	// 			console.error("Error:", error);
	// 		});
	// };

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			spacing={3}>
			<Grid item>Welcome to the Punny API!</Grid>
			<Grid item>
				<Button variant='contained'>Suggest a Joke</Button>
			</Grid>
			<Grid item>
				<Button
					variant='contained'
					onClick={randomJokeHandler}>
					Random Joke
				</Button>
			</Grid>
			<Grid item>{randomJoke}</Grid>
		</Grid>
	);
}

export default App;
