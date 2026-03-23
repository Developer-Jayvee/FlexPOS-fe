import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";
import { ROUTES , AUTHROUTES , LAYOUTS } from "./routes/routesPaths"
export default [
    layout(AUTHROUTES.GUEST,[
        index(ROUTES.LOGIN),
    ]),
    layout(AUTHROUTES.AUTH,[
        ...prefix("admin",[
            layout(LAYOUTS.ADMIN,[
                route("dashboard",ROUTES.DASHBOARD),
                route("inventory",ROUTES.INVENTORY),
                route("sales",ROUTES.SALES),
            ])
        ])
    ])
] satisfies RouteConfig;
