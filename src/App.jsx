import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <Navigate to="/auth" replace />;
	}

	return children;
};

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route index path="/auth" element={<LoginForm />} />
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
