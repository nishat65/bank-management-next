'use client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ToastProvider from '@/app/utils/provider/ToastContext'
import LoginForm from './form'

export default function Login() {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
            <ToastProvider>
                <LoginForm />
            </ToastProvider>
        </GoogleOAuthProvider>
    )
}
