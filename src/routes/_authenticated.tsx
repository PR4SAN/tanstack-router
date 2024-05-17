import {
    createFileRoute,
    Outlet,
    redirect,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async ({ context, location }) => {
        console.log( context, '_authenticated context')
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: '/login',
                search: {
                    redirect: location.href,
                },
            })
        }
    },
    component: AuthLayout,
})

function AuthLayout() {
    return (
        <div className="p-2 h-full">
            <h1>Authenticated Route</h1>
            <p>This route's content is only visible to authenticated users.</p>
            <hr />
            <Outlet />
        </div>
    )
}
