'use client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import LoginForm from './form'

export default function Login() {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
            <LoginForm />
        </GoogleOAuthProvider>
    )
}
