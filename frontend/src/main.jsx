import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import ErrorPage from "./pages/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ErrorBoundary fallback={<ErrorPage />}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ErrorBoundary>
	</React.StrictMode>
);
