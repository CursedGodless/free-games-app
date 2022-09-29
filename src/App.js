import './App.css';
import GamesList from './components/gamesList/GamesList';
import Header from './components/header/Header';
import Service from './services/Service';

function App() {
	return (
		<div className="App">
			<Header />
			<GamesList />
		</div>
	);
}

export default App;

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '53c58e73a5msha4220aaf75c1aefp1edd84jsn5cd1723c9f56',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53c58e73a5msha4220aaf75c1aefp1edd84jsn5cd1723c9f56',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=452', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));