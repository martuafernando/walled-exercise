import { createContext, useContext, useState, useEffect } from "react";

// Create auth context
const AuthContext = createContext();

// Custom hook
export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	// Check if user is logged in on page load
	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			setCurrentUser(JSON.parse(user));
		}
		setLoading(false);
	}, []);

	// Login
	const login = async (username, inputPassword) => {
		try {
			const response = await fetch("http://localhost:3000/users");
			const users = await response.json();

			const user = users.find(
				(user) => user.username === username && (user.password === inputPassword),
			);

			if (!user) {
				return {
					success: false,
					message: "Invalid username or password",
				};
			}

			// eslint-disable-next-line no-unused-vars
			const { password, ...userWithoutPassword } = user;
			setCurrentUser(userWithoutPassword);
			localStorage.setItem("user", JSON.stringify(userWithoutPassword));
			return { success: true };
		} catch (error) {
			console.error("Login error:", error);
			return {
				success: false,
				message: "An error occurred during login",
			};
		}
	};

	// Logout
	const logout = () => {
		setCurrentUser(null);
		localStorage.removeItem("user");
	};

	const value = {
		currentUser,
		login,
		logout,
		isAuthenticated: !!currentUser,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthContext;