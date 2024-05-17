import { createLazyFileRoute } from '@tanstack/react-router'
import DashboardComponent from "./-components/Dashboard";

export const Route = createLazyFileRoute('/_authenticated/dashboard/')({
    component: DashboardComponent,
})
