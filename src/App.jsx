import "./App.css";
import Account from "./components/Account";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Profile from "./components/Profile";

import Table from "./components/Table";

const columns = [
  { header: "Name", key: "name" },
  { header: "Email", key: "email" },
];

const data = [
  { name: "Joe", email: "joe@example.com" },
  { name: "Doe", email: "doe@example.com" },
];

function App() {
	return (
		<>
			<Header />
			<div>
				<Headline
					title="Good Morning, Chelsea"
					text="Check all your incoming and outgoing transactions here"
				/>

				<Profile
					name="Chelsea Immanuela"
					accountDescription="Personal Account"
				/>
			</div>
      <Account accountNumber="100889" balance="10.000.000" />

      <Table columns={columns} data={data} />
		</>
	);
}

export default App;
