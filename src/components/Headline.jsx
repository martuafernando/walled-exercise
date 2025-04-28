import './Headline.css'

export default function Headline({ title, text }) {
	return (
		<div className="headline">
			<p>{title}</p>
			<p>{text}</p>
		</div>
	);
}
