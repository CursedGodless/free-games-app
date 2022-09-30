import { Component } from 'react';
import Service from '../../services/Service';
import './gamesList.scss';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';
import GamesFilter from '../gamesFilter/GamesFilter';
export default class GamesList extends Component {
	state = {
		games: [],
		loading: true,
		error: false
	}
	service = new Service();

	componentDidMount() {
		this.service.getAllGames(0, 9)
			.then(games => this.setState({ games, loading: false }))
			.catch(err => this.setState({ loading: false, error: true }))
	}

	render() {
		const items = this.state.games.map(game => <ListItem {...game} key={game.id} />)
		const { games, loading, error } = this.state;

		const spinner = loading ? <Spinner /> : null;
		const errorMessage = error ? <Error /> : null;
		const visibleData = !(spinner || error) ? items : null;

		return (
			<>
				<div className="container">
					<GamesFilter />
					{spinner}
					{errorMessage}
					<ul className="games-list">
						{visibleData}
					</ul>
				</div>
			</>
		)
	}
}

function ListItem({ title, description, thumbnail }) {
	return (
		<li className="games-list__item">
			<img src={thumbnail} alt="Ragnarok Online" />
			<div className="game__text">
				<div className="game__title">{title}</div>
				<div className="game__descr">{description}</div>
			</div>
		</li>
	)
}