import { Component } from 'react';
import Service from '../../services/Service';
import './randomGame.scss';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
export default class RandomGame extends Component {
	state = {
		game: {},
		loading: true,
		error: false,
		autoUpdate: false,
	}

	timerId;

	service = new Service();
	res = new ResizeObserver((entries, observer) => {
		for (let entry of entries) {
			if (entry.contentRect.width <= 630) {
				document.querySelector('.games-list').classList.remove('games-list_visible-type__list')
				document.querySelector('#grid').checked = true;
				document.querySelector('#list').checked = false
			}
		}
	})

	rndGame = new ResizeObserver((entries, observer) => {
		for (let entry of entries) {
			if (entry.contentRect.width <= 850) {
				if (!this.state.autoUpdate) {
					this.setState({ autoUpdate: true })
					this.timerId = setInterval(this.updateGame, 10000)
				}
			} else if (entry.contentRect.width > 850) {
				this.setState({ autoUpdate: false })
				clearInterval(this.timerId)
			}
		}
	})

	updateGame = () => {
		this.setState({ loading: true, error: false })
		this.service.getRandomGame()
			.then(game => this.setState({ game, loading: false }))
			.catch(err => this.setState({ error: true, loading: false }))
	}

	componentDidMount() {
		this.updateGame();
		this.res.observe(document.querySelector('.games-list'))
		this.rndGame.observe(document.querySelector('.random-game'))

	}

	componentWillUnmount() {
		this.res.unobserve(document.querySelector('.games-list'))
	}

	render() {
		const { game, loading, error } = this.state;

		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <Error /> : null;
		const visibleData = !(spinner || error) ? <View {...game} /> : null;

		return (
			<div className="container">
				<div className="random-game">
					{spinner}
					{errorMessage}
					{visibleData}
					<div className='static'>
						<div>Wanna new random game?</div>
						<button onClick={this.updateGame} className='btn'>Click me</button>
					</div>
				</div>
			</div>
		)
	}
}

function View({ thumbnail, name, description }) {
	return (
		<div className="game">
			<img src={thumbnail} alt={name} />
			<div className="game__descr">{description}</div>
		</div>
	)
}