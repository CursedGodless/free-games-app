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
	offset = 0;
	limit = 9;
	service = new Service();

	loadGames = () => {
		this.service.getAllGames(this.offset, this.limit)
			.then(nextGames => {
				this.setState(({ games }) => {
					return {
						games: [...games, ...nextGames]
						, loading: false
					}
				})
			})
			.catch(err => this.setState({ loading: false, error: true }))
		this.offset += 9;
		this.limit += 9;
	}

	componentDidMount() {
		this.loadGames();
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
					<button onClick={this.loadGames} className='btn btn_load-more'>Load more</button>
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