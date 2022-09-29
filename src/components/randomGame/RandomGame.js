import { Component } from 'react';
import Service from '../../services/Service';
import './randomGame.scss';

export default class RandomGame extends Component {
	state = {
		game: {},
		loading: false,
		error: false
	}

	service = new Service();

	updateGame = () => {
		this.service.getRandomGame()
			.then(game => this.setState({ game }))
	}

	componentDidMount() {
		this.updateGame();
	}

	render() {
		const { game: { name, description, thumbnail } } = this.state;
		return (
			<div className="container">
				<div className="random-game">
					<div className="game">
						<img src={thumbnail} alt={name} />
						<div className="game__descr">{description}</div>
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