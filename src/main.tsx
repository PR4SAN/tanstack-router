import ReactDOM from 'react-dom/client'
import  {Suspense} from 'react'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Amplify} from 'aws-amplify';
import './index.css'
import {routeTree} from "./routeTree.gen";
import {AuthProvider, useAuth} from "@/auth.tsx";
import {Toaster} from "@/components/ui/toaster"



export const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {
    auth: undefined!,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{auth}}/>
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
        <InnerApp/>
        </Suspense>
        <Toaster/>
      </AuthProvider>
    </QueryClientProvider>
  )
}


const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
