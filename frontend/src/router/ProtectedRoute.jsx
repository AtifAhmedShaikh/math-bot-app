import { Outlet, Navigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils";

const ProtectedRoutes = () => {
	const hasUserInConversation = getUserFromLocalStorage();
	return hasUserInConversation ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoutes;
