import { Route } from "@tanstack/router";
import Login from "../pages/Login";
import { rootRoute } from "./RootRoute";

export const LoginRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/login",
	component: Login,
});
