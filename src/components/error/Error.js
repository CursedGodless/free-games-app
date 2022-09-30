import error from './error.gif'

export default function Error() {
	return (
		<div className='error' style={{ position: 'absolute', 'left': '50%', 'top': '50%', transform: 'translate(-50%,-50%)',textAlign:'center'}}>
			<img src={error} alt="spinner"style={{ width: '105px' }} />
			<div>Error. Try later</div>
		</div>
	)
}