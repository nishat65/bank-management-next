'use client'
import { useRouter } from 'next/navigation'
import { createContext, useState, useEffect, ReactNode } from 'react'

const AuthContext = createContext(null) as any

export default function AuthProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('access_token')
        if (token) setIsAuthenticated(true)
        else router.replace('/login')
    }, [])

    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    )
}
