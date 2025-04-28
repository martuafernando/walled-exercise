export default function Account({
  accountNumber,
	balance,
	currency,
	onTopUpButtonClicked = () => {},
	onTransferButtonClicked = () => {},
}) {
	return (
		<div>
			<div>
				<p>Account No.</p>
				<p>{ accountNumber }</p>
			</div>

			<div>
				<p>Balance</p>
				<div>
					<p>{ `${currency}${balance}` }</p>
					<button type="button">Eye</button>
				</div>
			</div>

      <button type="button" onClick={onTopUpButtonClicked}>Add</button>
      <button type="button" onClick={onTransferButtonClicked}>Transfer</button>
		</div>
	);
}
