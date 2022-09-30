import './App.css';
import GamesList from './components/gamesList/GamesList';
import Header from './components/header/Header';
import RandomGame from './components/randomGame/RandomGame';
import Service from './services/Service';

function App() {
	return (
		<div className="App">
			<Header />
			<RandomGame />
			<GamesList />
		</div>
	);
}

export default App;