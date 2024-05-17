import * as React from 'react';
import {useQuery} from "@tanstack/react-query";

export interface AuthContext {
    isAuthenticated: boolean;
    user: any | null;
    isLoading: boolean;
    error: Error | null;
}

const AuthContext = React.createContext<AuthContext | null>(null)

export const useAuthQuery = () => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: async () => {
            try {
                return await getCurrentUser();
            } catch (error) {
                return null;
            }
        },
        queryOptions:{
            retry: false,
            refetchOnWindowFocus: false,
        }

    });
};



const getCurrentUser = (): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('userrr');
    }, 1000);
  });


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { data: user, isLoading, error } = useAuthQuery();
    const isAuthenticated = !!user
    const contextValue = { isAuthenticated, user, isLoading, error }
    console.log(contextValue, 'auth context');

    return (
        <AuthContext.Provider value={{...contextValue}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
