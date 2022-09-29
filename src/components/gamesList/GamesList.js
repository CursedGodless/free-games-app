import { Component } from 'react';
import Service from '../../services/Service';
import './gamesList.scss';

export default class GamesList extends Component {
	state = {
		games: []
	}
	service = new Service();

	componentDidMount() {
		this.service.getAllGames(0, 9)
			.then(games => this.setState({ games }))
	}

	render() {
		const items = this.state.games.map(game => <ListItem {...game} key={game.id} />)
		return (
			<ul className="games-list">
				{items}
			</ul>
		)
	}
}

function ListItem({ title, description, thumbnail }) {
	return (
		<li className="games-list__item">
			<img src={thumbnail} alt="Ragnarok Online" />
			<div className="game__title">{title}</div>
			<div className="game__descr">{description}</div>
		</li>
	)
}