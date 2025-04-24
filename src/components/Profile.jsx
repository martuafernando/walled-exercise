export default function Profile({ name, accountDescription }) {
	return (
		<div>
			<div>
				<p>{name}</p>
				<p>{accountDescription}</p>
			</div>
			<img src="https://placehold.co/64" alt="" />
		</div>
	);
}
