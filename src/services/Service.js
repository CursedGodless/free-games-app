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
		this.games = [];
	}

	getData = (url) => {
		return fetch(url, this.options)
			.then(response => {
				return response.json()
			})
	}

	getAllGames = async (offset, limit = 9 ) => {
		if (!this.games.length) {
			let response = await this.getData('https://free-to-play-games-database.p.rapidapi.com/api/games')
			this.games = response.map(item => this.transformData(item));
		}
		return this.games.slice(offset, limit);
	}

	getRandomGame = async () => {
		if (!this.games.length) {
			let response = await this.getData('https://free-to-play-games-database.p.rapidapi.com/api/games')
			this.games = response.map(item => this.transformData(item));
		}
		let rnd = Math.floor(Math.random() * (this.games.length + 1))
		return this.games[rnd]
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