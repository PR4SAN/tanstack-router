import {
  createRootRouteWithContext, Outlet,
} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {AuthContext} from "@/auth.tsx";


interface RouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet/>
      <ReactQueryDevtools buttonPosition="top-right"/>
      <TanStackRouterDevtools position="bottom-right"/>
    </>
  ),
})