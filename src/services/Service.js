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

	getData = (url) => {
		return fetch(url, this.options)
			.then(response => {
				return response.json()
			})
	}

	getAllGames = async (limit, offset) => {
		let response = await this.getData('https://free-to-play-games-database.p.rapidapi.com/api/games')
			.then(data => data.slice(0, offset))
		return response.map(item => this.transformData(item));
	}

	getRandomGame = async () => {
		let response = await this.getData('https://free-to-play-games-database.p.rapidapi.com/api/games')
		let rnd = Math.floor(Math.random() * (response.length + 1))
		return this.transformData(response[rnd])
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