import list from './list.png';
import './gamesFilter.scss';

export default function GamesFilter() {

	const handleClick = (e) => {
		const ul = document.querySelector('.games-list');

		if (e.target.getAttribute('id') === 'list') {
			ul.classList.add('games-list_visible-type__list');
		} else {
			ul.classList.remove('games-list_visible-type__list');
		}
	}
	
	return (
		<div className="filters">
			<div className="filters__inputs">

			</div>
			<div className="filters__btns">
				<label>
					<input type='radio' name="radio" id="grid" defaultChecked onClick={handleClick} />
					<i className="fa-solid fa-grip"></i>
				</label>
				<label>
					<input type='radio' name="radio" id="list" onClick={handleClick} />
					<i className="fa-solid fa-list"></i>
				</label>
			</div>
		</div>
	)
}