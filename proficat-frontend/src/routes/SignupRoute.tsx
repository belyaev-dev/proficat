import { Route } from "@tanstack/router";
import Signup from "../pages/Signup";
import { rootRoute } from "./RootRoute";

export const SignupRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/signup",
	component: Signup,
});
