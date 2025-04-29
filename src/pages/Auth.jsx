import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Dashboard from "./Dashboard";

export function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { login } = useAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		const result = await login(username, password);
		if (!result.success) {
			setError(result.message);
		}
	};

	return (
		<div className="login-container">
			<h2>Login</h2>
			{error && <div className="error-message">{error}</div>}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
