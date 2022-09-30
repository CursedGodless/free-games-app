import './App.css';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import GamesList from './components/gamesList/GamesList';
import Header from './components/header/Header';
import RandomGame from './components/randomGame/RandomGame';
import Service from './services/Service';


function App() {
	return (
		<div className="App">
			<Header />
			<ErrorBoundary>
				<RandomGame />
			</ErrorBoundary>
			<GamesList />
		</div>
	);
}

export default App;