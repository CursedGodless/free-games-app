import error from './error.gif'

export default function Error() {
	return (
		<div className='error' style={{ margin: '25px auto 0px', textAlign: 'center' }}>
			<img src={error} alt="spinner" style={{ width: '105px' }} />
			<div>Error. Try later</div>
		</div>
	)
}