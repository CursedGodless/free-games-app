import spinner from './spinner.gif'
export default function Spinner() {
	return <img src={spinner} alt="spinner" className='spinner' style={{ display: 'block', margin: '0 auto', width: '90px', height: '90px', 'marginTop': '30px' }} />
}