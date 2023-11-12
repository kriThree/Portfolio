import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./shared/router/Router";
import {Layout} from "./shared/layout/Layout";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Router />
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
);