import axios from "axios";
import Account from "./components/Account";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Profile from "./components/Profile";

import Table from "./components/Table";
import { useEffect, useState } from "react";

import './Dashboard.css'

const BASE_URL = "http://localhost:3000";

function Dashboard() {
	/**
	 * { name, accountNumber, balance, currency }
	 */
	const [user, setUser] = useState({});

	/**
	 * { id, date, type, from, to, description, amount }
	 */
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		axios.get(`${BASE_URL}/user`).then((response) => {
			setUser(response.data);
		});

		axios.get(`${BASE_URL}/transactions`).then((response) => {
			setTransactions(response.data);
		});
	}, []);

	const onQuery = ({ query, sortBy, sortOrder }) => {
		axios
			.get(
				`${BASE_URL}/transactions/?q=${query}&_sort=${sortBy}&_order=${sortOrder}`,
			)
			.then((response) => {
				setTransactions(response.data);
			});
	};

	return (
		<div className="dashboard">
			<Header />
			<div className="headline-and-profile">
				<Headline
					title={`Good Morning, ${user.name}`}
					text="Check all your incoming and outgoing transactions here"
				/>

				<Profile
					name="Chelsea Immanuela"
					accountDescription="Personal Account"
				/>
			</div>
			<Account
				accountNumber={user.accountNumber}
				balance={user.balance}
				currency={user.currency}
			/>

			<Table data={transactions} onQuery={onQuery} />
		</div>
	);
}

export default Dashboard;
