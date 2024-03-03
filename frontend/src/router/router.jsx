import { Routes, Route } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/chat" element={<ChatPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default Router;
