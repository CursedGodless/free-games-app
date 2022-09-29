export default class Service {
	constructor() {
		Object.defineProperty(this, 'options', {
			value: {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '53c58e73a5msha4220aaf75c1aefp1edd84jsn5cd1723c9f56',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
				}
			},
			enumerable: false,
			writable: false,
			configurable: false
		})
	}

	getAllGames = async (limit, offset) => {
		let response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', this.options)
			.then(response => response.json())
			.then(data => data.slice(0, offset))
		return response.map(item => this.transformData(item));
	}

	transformData = ({ title, short_description: description, id, thumbnail }) => {
		return {
			title,
			description,
			id,
			thumbnail
		}
	}
}