import './Profile.css'

export default function Profile({ name, accountDescription }) {
	return (
		<div className='profile'>
			<div className='name-container'>
				<p>{name}</p>
				<p>{accountDescription}</p>
			</div>
			<img src="https://placehold.co/64" alt="" />
		</div>
	);
}
