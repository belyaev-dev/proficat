import {Router} from "@tanstack/router";
import {IndexRoute} from "./IndexRoute";
import {rootRoute} from "./RootRoute";
import {MainRoute} from "./MainRoute";
import {LoginRoute} from "./LoginRoute";
import {SignupRoute} from "./SignupRoute";

const routeTree = rootRoute.addChildren([IndexRoute, MainRoute, LoginRoute, SignupRoute]);

const router = new Router({routeTree});

declare module "@tanstack/router" {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router;
    }
}

export {router};
