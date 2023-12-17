import { Route } from "@tanstack/router";
import Main from "../pages/Main";
import { rootRoute } from "./RootRoute";

export const MainRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/main",
	component: Main,
});
