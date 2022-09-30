import spinner from './spinner.gif'
export default function Spinner() {
	return <img src={spinner} alt="spinner" className='spinner' style={{ display: 'block', position: 'absolute', 'left': '50%', transform: 'translateX(-50%)', width: '90px', height: '90px', 'marginTop': '30px' }} />
}