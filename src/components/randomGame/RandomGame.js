import { Component } from 'react';
import Service from '../../services/Service';
import './randomGame.scss';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
export default class RandomGame extends Component {
	state = {
		game: {},
		loading: true,
		error: false
	}

	service = new Service();

	updateGame = () => {
		this.setState({ loading: true })
		this.service.getRandomGame()
			.then(game => this.setState({ game, loading: false }))
			.catch(err => this.setState({ error: true, loading: false }))
	}

	componentDidMount() {
		this.updateGame();
	}

	render() {
		const { game: { name, description, thumbnail }, loading, error } = this.state;

		const gameInfo = (
			<>
				<img src={thumbnail} alt={name} />
				<div className="game__descr">{description}</div>
			</>
		)
		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <Error /> : null;
		const visibleData = !(spinner || error) ? gameInfo : null;

		return (
			<div className="container">
				<div className="random-game">
					<div className="game">
						{spinner}
						{errorMessage}
						{visibleData}
					</div>
					<div>
						<div>Wanna new random game?</div>
						<button onClick={this.updateGame}>Click me</button>
					</div>
				</div>
			</div>
		)
	}
}