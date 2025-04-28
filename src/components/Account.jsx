import { useState } from "react";
import "./Account.css";

export default function Account({
	accountNumber,
	balance,
	currency,
	onTopUpButtonClicked = () => {},
	onTransferButtonClicked = () => {},
}) {
	const [isHidden, setIsHidden] = useState(false)

	return (
		<div className="account">
			<div className="information">
				<p>Account No.</p>
				<p>{accountNumber}</p>
			</div>

			<div className="balance-controller">
				<div className="balance">
					<p>Balance</p>
					<div className="balance-amount">
						<p>{isHidden ? "*******" : `${currency}${balance}`}</p>
						<button type="button" onClick={() => setIsHidden(!isHidden)}>{isHidden ? "Show" : "Hidden"}</button>
					</div>
				</div>
				<div className="button-controller">
					<button type="button" onClick={onTopUpButtonClicked}>
						Add
					</button>
					<button type="button" onClick={onTransferButtonClicked}>
						Transfer
					</button>
				</div>
			</div>
		</div>
	);
}
