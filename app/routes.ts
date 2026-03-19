import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";
import { ROUTES , AUTHROUTES } from "./routes/routesPaths"
export default [
    layout(AUTHROUTES.GUEST,[
        index(ROUTES.LOGIN),
    ]),
    layout(AUTHROUTES.AUTH,[
        route("dashboard",ROUTES.DASHBOARD),
        route("inventory",ROUTES.INVENTORY),
        route("sales",ROUTES.SALES),
    ])
] satisfies RouteConfig;
